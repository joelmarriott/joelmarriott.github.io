var squares = document.querySelectorAll('td')
var restart = document.querySelector('#restart')

// Clear playing board
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

// Restart button
restart.addEventListener("click",clearBoard)

// Check/Change the square marker
function changeMarker() {
  if(this.textContent === '') {
    this.textContent = 'X';
    this.style.color = 'blue';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
    this.style.color = 'red';
  }else {
    this.textContent = '';
  }
}

// Each square needs to check
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}
