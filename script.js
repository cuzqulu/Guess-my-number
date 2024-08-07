;`use strict`

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
let displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message
}
let displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number
}
let displayScore = function (score) {
  document.querySelector(`.score`).textContent = score
}
let displayBackgroundColor = function (color) {
  document.querySelector(`body`).style.backgroundColor = color
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value)

  //no input
  if (!guess) {
    displayMessage('⛔️ No Number')
  }
  //player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 You Win!')
    displayNumber(secretNumber)
    displayBackgroundColor('#60b347')
    displayNumber('30rem')
    if (score > highscore) {
      highscore = score
      document.querySelector(`.highscore`).textContent = highscore
    }
  } else if (guess !== secretNumber) {
    if (score > -1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low')
      displayScore(score--)
    } else {
      displayNumber(secretNumber)
    }
  } else {
    displayMessage('💥 You lost')
    displayNumber(secretNumber)
  }
})

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  displayScore(score)
  displayNumber('?')
  displayBackgroundColor('#222')
  document.querySelector(`.guess`).value = ''
  displayNumber('15rem')
})
