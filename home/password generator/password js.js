const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

//let passwordEl= document.getElementById("password-el")
let oneEl= document.getElementById("one-el")
let twoEl= document.getElementById("two-el")


function getPassword() {
  if(passwordLength ===15){
        let passwordOne = ""
        let passwordTwo = ""
        for (let i = 0; i < passwordLength; i++) {
          let randomPasswordOne = Math.floor(Math.random() * characters.length)
          let randomPasswordTwo = Math.floor(Math.random() * characters.length)
          passwordOne +=characters[randomPasswordOne]
          passwordTwo +=characters[randomPasswordTwo]
    }
    oneEl.textContent = passwordOne
    twoEl.textContent = passwordTwo
}
}
