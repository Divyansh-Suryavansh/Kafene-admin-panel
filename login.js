
let loginForm = document.getElementById('form');


try{
    loginForm.onsubmit =  function(e) {

            e.preventDefault();
            let username = document.getElementById('username');
            let userpass = document.getElementById('password');

            if(username.value === userpass.value)
            {
                localStorage.setItem('login-status', true);
                location.assign('./orders.html');
                $('#logout').removeClass('active');
                
            }
            else
            {
                localStorage.setItem('login-status', false);
                $('#warning').css('display','flex');
                $('#warning').delay(800).fadeOut(1000);
               
            }
            loginForm.reset();
     }
}
catch(e){
    console.log(e);
}

 



