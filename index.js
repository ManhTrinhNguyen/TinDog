import dogs from "./data.js"
import Dogs from "./Dog.js"


const imgSection = document.getElementById("img-section")


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function render() {
  imgSection.innerHTML += randomDogs.displayData()
}

const randomDogs = new Dogs(dogs[getRandomInt(dogs.length)])
render()

