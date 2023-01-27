let border=document.querySelector(".border");
const moon=document.querySelector(".moon");
let number=document.getElementById("number");
let submit=document.getElementById("submit").addEventListener("click",game);

function game(){
  erase();
let num=number.value;
for(let i=0;i<num;i++){
let row=document.createElement('div');
 row.classList.add('row');
 border.appendChild(row);
for(let z=0;z<num;z++){
let column=document.createElement('div');
 column.classList.add('column');
 row.appendChild(column);
}
}
}

border.addEventListener("mouseover",function(event){
  if( event.target.classList.contains('column')){
    event.target.style.backgroundColor='black';
  }
});

const input=document.querySelector("#color");
input.addEventListener('input', function(){
  let newColor=document.getElementById("color").value;
  border.addEventListener("mouseover",function(event){
    
  if( event.target.classList.contains('column')){
    event.target.style.backgroundColor=newColor;
  }
})
});

function erase(){
border.innerHTML="";
}

