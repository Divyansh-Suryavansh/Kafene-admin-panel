let infoObject=[];
let infoObjectkeys = [];
let tableDetails = document.getElementsByTagName('tbody');
let count;

var http = new XMLHttpRequest();
http.open("GET", "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products", true);
http.onreadystatechange = function() {
    if(this.readyState === 4) {
        try{
            
            var productData = JSON.parse(this.responseText);
            
            for(i=0;i<productData.length;i++)
            {
                let a = productData[i];
                infoObject[i] = { 'id': a.id,
                           'name': a.medicineName,
                           'brand': a.medicineBrand,                          
                           'expDate': a.expiryDate,
                           'price': a.unitPrice,
                           'stock' : a.stock
                        } 
                                  
            infoObjectkeys[i] = Object.values(infoObject[i]); 
            }
           
            for(i=0;i<productData.length;i++)
            {
                productDataRender(infoObjectkeys);
            }
                

            }
            
         catch(e) {
            console.log(e);
        }
    }
}
http.send();


function productDataRender() {

    tableRow = document.createElement('tr');
        tableRow.className = "table-row"; 
        
        for(j=1;j<7;j++)
        {
            tableData = document.createElement('td');
            tableData.className = "column" + j;
            tableData.innerHTML = (infoObjectkeys[i][j-1]);   
            tableRow.appendChild(tableData); 
        }
        tableDetails[0].append(tableRow);  
}

let checkedFilter = document.getElementById('expired');
tableInfo = document.getElementsByTagName('table');
tr = tableInfo[1].getElementsByTagName('tr');
let filterItem = document.getElementById('filtered-elem');


checkedFilter.addEventListener('change', ()=>{

    if(checkedFilter.checked === true)
    {
        let currDate = getCurrentDate();
        for(i=0;i<tr.length;i++){
            
            data = tr[i].getElementsByTagName('td')[3].innerHTML.split('-');
            let monthNum = getMonthInNum(data[1])
                
            if(currDate[2] < Number(data[2]))
               {
                tr[i].classList.add('search-display');
               }
             else if(currDate[2] === Number(data[2]))  
             {
                 if(currDate[1]<monthNum)
                   tr[i].classList.add('search-display');
                 else if(currDate[1]=== monthNum)
                 {
                     if(currDate[0] > Number(data[0]))
                        tr[i].classList.add('search-display');
                        
                        
                 }
                     
             }      
        }  
       count = dataCount();
    }
    else
    {
        for(i=0;i<tr.length;i++)
        {
            tr[i].classList.remove('search-display');
        }
        dataCount();
    }
   
})


let checkStock = document.getElementById('low-stock');

checkStock.addEventListener('change', ()=>{

    if(checkStock.checked === true)
    {
        for(i=0;i<tr.length;i++){
            
            data = tr[i].getElementsByTagName('td')[5].innerHTML;
              if(Number(data) >100)
                 tr[i].classList.add('search-display');                 
        }
       count = dataCount();
       
    }  
   
 
    else
    {
        for(i=0;i<tr.length;i++)
    {
        tr[i].classList.remove('search-display');
    }
    dataCount();
    }
    
})



function getCurrentDate() {

    let a = new Date();
    let x = [a.getDate(), a.getMonth(), a.getFullYear()];
    return x;
}

function getMonthInNum(x) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months.indexOf(x);
}

function dataCount() {
     
    let elemCount = 100;
    let hiddenEntries = document.getElementsByClassName('search-display').length;
    elemCount = (tr.length - hiddenEntries);
    filterItem.innerHTML = elemCount;

}