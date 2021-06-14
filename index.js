let loginState = localStorage.getItem('login-status');
let val;
console.log(loginState);

if(loginState === "true")
{
    $('#logout').removeClass('active');
   window.location.assign("orders.html");
    
}
 else 
{
  location.assign('login.html');
}
    
let logout = document.getElementById('logout');
logout.onclick = ()=>{
    localStorage.setItem('login-status', false);
    location.assign('./login.html');
    $('#logout').addClass('active');
} 
