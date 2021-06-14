let tableDetails = document.getElementsByTagName('tbody');
let infoObject=[];
let infoObjectkeys=[];


var http = new XMLHttpRequest();
http.open("GET", "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders", true);
http.onreadystatechange = function() {
    if(this.readyState === 4) {
        try{
            
            var orderData = JSON.parse(this.responseText);
     
            for(i=0;i<orderData.length;i++)
            {
                let a = orderData[i];
                infoObject[i] = { 'id': a.id,
                           'name': a.customerName,
                           'orderDate': a.orderDate+'<br>'+a.orderTime,                          
                           'amount': a.amount,
                           'status': a.orderStatus
                        } 
                        
                        
            infoObjectkeys[i] = Object.values(infoObject[i]); 
            }
            for(i=0;i<orderData.length;i++)
            {
                orderDataRender(infoObjectkeys);
            }
                
            }
            
         catch(e) {
            console.log(e);
        }
    }
}
http.send();

function orderDataRender() {

    tableRow = document.createElement('tr');
        tableRow.className = "table-row"; 
        
        for(j=1;j<6;j++)
        {
            tableData = document.createElement('td');
            tableData.className = "column" + j;
            tableData.innerHTML = (infoObjectkeys[i][j-1]);   
            tableRow.appendChild(tableData); 
        }
        tableDetails[0].append(tableRow);  


}

let orderStatusFilter1 = document.getElementById('new');
let orderStatusFilter2 = document.getElementById('packed');
let orderStatusFilter3 = document.getElementById('in-transit');
let orderStatusFilter4 = document.getElementById('delivered');
tableInfo = document.getElementsByTagName('table');
tr = tableInfo[1].getElementsByTagName('tr');
let filterItem = document.getElementById('filtered-elem');


    orderStatusFilter1.addEventListener('change', ()=> {

        if(orderStatusFilter1.checked === true)
        {
            
            for(i=0;i<tr.length;i++)
        {
            data = tr[i].getElementsByTagName('td')[4].innerHTML;
            if(orderStatusFilter1.value === data)
                  {
                    tr[i].classList.remove('search-display');
                  }
             else
             {
                tr[i].classList.add('search-display');
             }     
        }
         let count = dataCount();
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


    orderStatusFilter2.addEventListener('change', ()=> {

        if(orderStatusFilter2.checked === true)
        {
    
            for(i=0;i<tr.length;i++)
        {
            data = tr[i].getElementsByTagName('td')[4].innerHTML;
            if(orderStatusFilter2.value === data)
                  {
                    tr[i].classList.remove('search-display');
                  }
             else
             {
                tr[i].classList.add('search-display');
             }     
        }
         let count = dataCount();
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

    orderStatusFilter3.addEventListener('change', ()=> {

        if(orderStatusFilter3.checked === true)
        {
    
            for(i=0;i<tr.length;i++)
        {
            data = tr[i].getElementsByTagName('td')[4].innerHTML;
            if(orderStatusFilter3.value === data)
                  {
                    tr[i].classList.remove('search-display');
                  }
             else
             {
                tr[i].classList.add('search-display');
             }     
        }
         let count = dataCount();
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

    orderStatusFilter4.addEventListener('change', ()=> {

        if(orderStatusFilter4.checked === true)
        {
  
            for(i=0;i<tr.length;i++)
        {
            data = tr[i].getElementsByTagName('td')[4].innerHTML;
            if(orderStatusFilter4.value === data)
                  {
                    tr[i].classList.remove('search-display');
                  }
             else
             {
                tr[i].classList.add('search-display');
             }     
        }
         let count = dataCount();
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




function dataCount() {
     
    let elemCount = 100;
    let hiddenEntries = document.getElementsByClassName('search-display').length;
    elemCount = (tr.length - hiddenEntries);
    filterItem.innerHTML = elemCount;

}