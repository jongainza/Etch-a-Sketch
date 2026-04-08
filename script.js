
console.log('hello world');
let gridsNumber=16
let space = document.querySelector('.div')

let gridsFlex = (100/gridsNumber).toFixed(4)
let gridsHeigth = gridsFlex

function createGrid(gridsNumber){
 for (let i=1 ;  i<= gridsNumber * gridsNumber ; i++){
  let grid = document.createElement('div')
  grid.classList.add('grid')
  grid.style.flex= `1 0 ${gridsFlex}%`
  grid.style.height=`${gridsHeigth
  }%`
  space.appendChild(grid)

 }
}

createGrid(gridsNumber)