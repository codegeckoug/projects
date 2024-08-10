let count = 0;

let countEl = document.getElementById("count-el");


function increment(){
  count  += 1;
  countEl.textContent=count;

}

let saveBl = document.getElementById("save-btn");
let saveEl =document.getElementById("save-el");

function save(){
  let countNumber = count + " - ";
saveEl.textContent += countNumber;
countEl.textContent=0;
count=0;
  console.log(count);
}
