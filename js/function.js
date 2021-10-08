// click on login
var logInText= document.querySelector("#logInText")
logInText.addEventListener('click',()=>{
    document.querySelector(".logInBox").classList.remove("box_hidden")
    document.querySelector(".signUpBox").classList.add("box_hidden")
})
// click on sign up 
var logInText= document.querySelector("#signUpText")    
logInText.addEventListener('click',()=>{
    document.querySelector(".logInBox").classList.add("box_hidden")
    document.querySelector(".signUpBox").classList.remove("box_hidden")
})
// click on close sign up
document.querySelectorAll(".Close")[0].addEventListener('click',(i)=>{
    window.open("./../index.html",target="_self");
})
// click on close log in   
document.querySelectorAll(".Close")[1].addEventListener('click',(i)=>{
    window.open("./../index.html",target="_self");
ad20dbce022fc4879fe39be31bd5f6270ea98918
})
// storing input from register-form

function store() {

var usrEmail = document.querySelector('.Email').value;
var usrName = document.querySelector('.Username').value;
var usrPw = document.querySelector('.Password').value;
var usrTel = document.querySelector('.Tel').value;
if(usrEmail&&usrName&&usrPw&&usrTel){
let stored_users = JSON.parse(localStorage.getItem('users'));
if(stored_users) {
    stored_users.push({email: usrEmail, name: usrName, password: usrPw, tel: usrTel});
    localStorage.setItem('users', JSON.stringify(stored_users));
} else {
    localStorage.setItem('users', JSON.stringify([{email: usrEmail, name: usrName, password: usrPw, tel: usrTel}]));
    alert("sign up success")
}
}
}
// check if stored data from register-form is equal to entered data in the login-form

function check() {
event.preventDefault()
var usrEmail = document.querySelector('.email').value;
var usrPw = document.querySelector('.password').value;

let stored_users = JSON.parse(localStorage.getItem('users'))
if(stored_users) {
    for (let u = 0; u < stored_users.length; u++){
        if (usrEmail == stored_users[u].email && usrPw == stored_users[u].password) {
            alert('You are logged in ');
            return location.replace("./alogin.html");

         }
    }
} else {
    localStorage.setItem('users', '[]');
}

return alert('Access denied. Valid username and password is required.');
}
