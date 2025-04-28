


window.onload = function () {

  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const randomIndex = Math.floor(Math.random() * numbers.length)
  const randomNumber = numbers[randomIndex]
  const suits = ["♦", "♥", "♠", "♣"]


  const randomSuit = suits[Math.floor(Math.random() * suits.length)]
  console.log(randomSuit)

  const number = document.querySelector("#number")
  number.innerHTML = randomNumber

  const suitElements = document.querySelectorAll(".suit")
  for (let i = 0; i < suitElements.length; i++) {
    suitElements[i].innerHTML = randomSuit
  }

  if (randomSuit === "♦" || randomSuit === "♥") {
    number.style.color = "red";
    for (let i = 0; i < suitElements.length; i++) {
      suitElements[i].style.color = "red";
    }
  }
  else {
    number.style.color = "black";
    for (let i = 0; i < suitElements.length; i++) {
      suitElements[i].style.color = "black";
    }
  }



}




