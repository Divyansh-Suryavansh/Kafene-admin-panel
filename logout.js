let currentPage = (location.href.split('/')[3]).split('.')[0];

$('#logout').removeClass('active');

let logout = document.getElementById('logout');
logout.onclick = ()=>{
    localStorage.setItem('login-status', false);
    location.assign('./login.html');
    $('#logout').addClass('active');
} 

let anchors = document.getElementsByTagName('a');
for(i=0;i<anchors.length;i++)
{
    if(anchors[i].id === currentPage)
        anchors[i].classList.add('active-effect');
}