let n;
function randomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
}

function user(){
  n = parseInt(prompt("Enter grid size:"), 10);
 makegrid(n);

}



document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.getElementById("inputBtn");
    inputBtn.addEventListener("click",user);
});

function makegrid(n){
const container =document.getElementById("container");
container.innerHTML = "";

const cell = (600/n);
for(let i=0; i<n*n ;i++){
    let newDiv = document.createElement("div");
    newDiv.addEventListener("mouseover", () => {
  newDiv.style.backgroundColor = randomColor();
});
    newDiv.style.width = cell + "px";
    newDiv.style.height = cell + "px";
    newDiv.className="box";
    container.appendChild(newDiv);
    

}
}