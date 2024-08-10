/*function validateEmail(inputText){
  var mail =document.getElementById('text').value;
  var regx =/^([a-zA-Z0-9\._]+)@([a-a-zA-Z0-9])+.([a-z])+)(.[a-z]+)?$/;
  if(inputText.value.match(regx)){
    alert("you have provided a valid email address");
    return true;
  } else {
    alert("sorry incorrect email address");
    return false;
  }
};*/


/*var email= document.forms['form'];
var email_error= document.getElementById('email_error');

email.addEventListener('textInput', email_verify);
function validated(){
  if (email.value.length<9) {
    email.focus();
    return false;
  }

}
function email_verify(){
  if (email.value.length>=8) {
    return true;
}
}*/

//let input=[];
var regx =/^([a-zA-Z0-9\._]+)@([a-a-zA-Z0-9])+.([a-z])+)(.[a-z]+)?$/;

let buttonElement = document.getElementById('js-submit');
let inputElement = document.getElementById('text');

let emailLength = 10;

function validateEmail(){
  if (emailLength === 15){
    let setEmail = ""
    for(let i =0; i < emailLength; i++){
    let randomEmail =   Math.floor(Math.random() * regx.length)
    setEmail += regx[randomEmail]
    }
    inputElement.textContent = setEmail
  }
});
