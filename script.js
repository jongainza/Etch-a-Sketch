
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
  space.appendChild(grid)
 }
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