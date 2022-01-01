var squareOne = document.querySelector('#one')
var squareTwo = document.querySelector('#two')
var squareThree = document.querySelector('#three')
var squareFour = document.querySelector('#four')
var squareFive = document.querySelector('#five')
var squareSix = document.querySelector('#six')
var squareSeven = document.querySelector('#seven')
var squareEight = document.querySelector('#eight')
var squareNine = document.querySelector('#nine')
var restart = document.querySelector('#restart')

function makeX(square) {
  square.textContent = "X";
  square.style.color = 'blue';
}

function makeO(square) {
  square.textContent = "O";
  square.style.color = 'red';
}

// On Click
restart.addEventListener("click",function(){
  squareOne.textContent = "";
  squareTwo.textContent = "";
  squareThree.textContent = "";
  squareFour.textContent = "";
  squareFive.textContent = "";
  squareSix.textContent = "";
  squareSeven.textContent = "";
  squareEight.textContent = "";
  squareNine.textContent = "";
})

squareOne.addEventListener("click",function(){
  makeX(squareOne)
})

squareTwo.addEventListener("click",function(){
  makeX(squareTwo)
})

squareThree.addEventListener("click",function(){
  makeX(squareThree)
})

squareFour.addEventListener("click",function(){
  makeX(squareFour)
})

squareFive.addEventListener("click",function(){
  makeX(squareFive)
})

squareSix.addEventListener("click",function(){
  makeX(squareSix)
})

squareSeven.addEventListener("click",function(){
  makeX(squareSeven)
})

squareEight.addEventListener("click",function(){
  makeX(squareEight)
})

squareNine.addEventListener("click",function(){
  makeX(squareNine)
})

// Double Click
squareOne.addEventListener("dblclick",function(){
  makeO(squareOne)
})

squareTwo.addEventListener("dblclick",function(){
  makeO(squareTwo)
})

squareThree.addEventListener("dblclick",function(){
  makeO(squareThree)
})

squareFour.addEventListener("dblclick",function(){
  makeO(squareFour)
})

squareFive.addEventListener("dblclick",function(){
  makeO(squareFive)
})

squareSix.addEventListener("dblclick",function(){
  makeO(squareSix)
})

squareSeven.addEventListener("dblclick",function(){
  makeO(squareSeven)
})

squareEight.addEventListener("dblclick",function(){
  makeO(squareEight)
})

squareNine.addEventListener("dblclick",function(){
  makeO(squareNine)
})
