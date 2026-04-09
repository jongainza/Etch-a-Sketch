
console.log('hello world');
let gridsNumber=25

let space = document.querySelector('.div')

let gridsFlex = (100/gridsNumber).toFixed(4)
let gridsHeigth = gridsFlex

function createGrid(gridsNumber){
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


createGrid(gridsNumber)