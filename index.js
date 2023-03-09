import dogs from "./data.js"
import Dogs from "./Dog.js"

const dogImg = document.querySelector(".dog-img")
const name = document.querySelector(".name")
const greeting = document.querySelector(".greeting")
let numArr = [0, 1 ,2]

function getNewDog() {
  const nextDog = dogs[numArr.shift()]
  return nextDog ? new Dogs(nextDog) : []
}
console.log(getNewDog())
function displayData(data) {
  dogImg.setAttribute("src", data.avatar)
  name.textContent = data.name
  greeting.textContent = data.bio
}


