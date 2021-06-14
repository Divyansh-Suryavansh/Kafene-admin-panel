let infoObject=[];
let infoObjectkeys = [];
let tableDetails = document.getElementsByTagName('tbody');

var http = new XMLHttpRequest();
http.open("GET", "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users", true);
http.onreadystatechange = function() {
    if(this.readyState === 4) {
        try{
            
            var userData = JSON.parse(this.responseText);
            console.log(userData[0]);    
            for(i=0;i<userData.length;i++)
            {
                let a = userData[i];
                infoObject[i] = { 'id': a.id,
                           'user-img': a.profilePic,
                           'name': a.fullName,                        
                           'dob': a.dob,
                           'gender': a.gender,
                           'location' : a.currentCity + ', ' + a.currentCountry
                        } 
                                  
            infoObjectkeys[i] = Object.values(infoObject[i]); 
            }
           
            for(i=0;i<userData.length;i++)
            {
                userDataRender(infoObjectkeys);
            }
                

            }
            
         catch(e) {
            console.log(e);
        }
    }
}
http.send();


function userDataRender() {

    tableRow = document.createElement('tr');
        tableRow.className = "table-row"; 
        
        for(j=1;j<7;j++)
        {
            tableData = document.createElement('td');
            tableData.className = "column" + j;
            if(j == 2)
            {
                let userImg = document.createElement('img');
                userImg.className = "user-pic";
                userImg.src =  (infoObjectkeys[i][j-1]); 
                tableData.append(userImg);
            }
            else
            {
                tableData.innerHTML = (infoObjectkeys[i][j-1]);   
            }
            tableRow.appendChild(tableData); 

        }
        tableDetails[0].append(tableRow);  
}


searchSec = document.getElementById('search-elem');
tableInfo = document.getElementsByTagName('table');
 tr = tableInfo[1].getElementsByTagName('tr');

    try{
          
           searchSec.onkeyup = function(e) {
            
            if(e.keyCode === 13)
            {
                searchInput = searchSec.value.toUpperCase();
                console.log(searchInput);
                
   
                for(i=0;i<tr.length;i++) {
                   
                    let data = tr[i].getElementsByTagName('td')[2];
                    if(data && searchInput.length>=2) {
                        userName = data.textContent;
                        if(userName.toUpperCase().indexOf(searchInput) > -1) {
                            
                        }
                        else{
                            tr[i].classList.add('search-display')
                        }
                    }
                   
                 }        
            }
               
         }
    }
        catch(e){
                console.log(e);
        }


let resetSearch = document.getElementById('Reset');
resetSearch.onclick = ()=>{
    
    for(i=0;i<tr.length;i++)
    {
        tr[i].classList.remove('search-display'); 
    }
    searchSec.value='';
}