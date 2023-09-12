

const secretNumber = Math.trunc(Math.random()*20) +1

let score = 19

document.querySelector('.check'). addEventListener('click', function() {

  const guess = Number(document.querySelector('.guess').value)

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!'
    document.querySelector('.number').textContent = secretNumber

  } else if (guess > secretNumber) {
    if (score >= 0) {
      document.querySelector('.message').textContent = 'Too high!'
      document.querySelector('.score').textContent = score--
    } else {
      document.querySelector('.score').textContent = 0
      document.querySelector('.message').textContent = 'You lost the game!'
    }

  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!'
      document.querySelector('.score').textContent = score--
    } else {
      document.querySelector('.score').textContent = 0
      document.querySelector('.message').textContent = 'You lost the game!'
    }

  }
})
