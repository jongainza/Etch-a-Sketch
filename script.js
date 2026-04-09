
console.log('hello world');

let space = document.querySelector('.div')
let gridsNumber=16



function createGrid(gridsNumber){
 let gridsFlex = (100/gridsNumber).toFixed(4)
 let gridsHeigth = gridsFlex
 for (let i=1 ;  i<= gridsNumber * gridsNumber ; i++){
  let grid = document.createElement('div')
  
  grid.textContent=`${i}`
  grid.classList.add('grid')
  grid.style.flex= `1 0 ${gridsFlex}%`
  grid.style.height=`${gridsHeigth
  }%`
  grid.addEventListener("mouseenter", () => {
   console.log("hover");
   
   grid.classList.add("hover");
  });
  grid.addEventListener("mouseleave", () => {
   grid.classList.remove("hover");
  });
  grid.addEventListener('click',gridClick)
  space.appendChild(grid)
 }
}
function getRandomValue(){
 return Math.floor(Math.random() * 255 + 1);
}
//  let initialValue = 0;
// function getDarkening(){

//  console.log(initialValue);
 
//  if(initialValue<100)initialValue+=10;
//  console.log(initialValue);
//  return initialValue
// }
function gridClick(e){
 console.log(e.target);
 e.target.style.background = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
 console.log(e.target);
 
}
let btn = document.querySelector(".btn-add");
btn.addEventListener("click", () => {
  gridsNumber = prompt("Enter a number of grid no higher than 100",'enter grid number');
  if (gridsNumber>100){
   alert("grid should be no higher than 100");
     gridsNumber = prompt("Enter a number of grid no higher than 100",'enter grid number');
    space.innerHTML = "";
    createGrid(gridsNumber);
  }else{
   space.innerHTML = "";
   createGrid(gridsNumber);
  }
  
});

createGrid(gridsNumber)