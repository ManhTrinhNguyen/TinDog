import dogs from "./data.js"
import Dogs from "./Dog.js"

const imgContainer = document.querySelector(".img-container")
const nopeBtn = document.querySelector(".nope-btn")
const likeBtn = document.querySelector(".like-btn")
const likeStatus = document.querySelector(".like-status")
const nopeStatus = document.querySelector(".nope-status")


let arrNum = [0, 1, 2]

//Get next Dog Func
function getNextDog() {
  let nextNumber = arrNum.shift()
  let getNextDog = new Dogs(dogs[nextNumber])
  return getNextDog ? getNextDog : {}
}
// 

// Display data
let getDogs = getNextDog()
function render() {
  imgContainer.innerHTML = getDogs.displayData()
}
render()
// 

// Click Status

// Like
function gotLiked() {
  getDogs.hasBeenLiked = true
  getDogs.hasBeenSwiped = true
  likeStatus.classList.add("status-active")
  nopeStatus.classList.remove("status-active")
  if (getDogs.hasBeenLiked && getDogs.hasBeenSwiped) {
    if (arrNum.length > 0) {
      setTimeout(() => {
        getDogs = getNextDog()
        render()
        likeStatus.classList.remove("status-active")
      }, 2000)
    } else {
      setTimeout(() => {
        imgContainer.classList.add("display-none")
      }, 3000)
    }
  }
}

// Nope
function gotNope() {
  getDogs.hasBeenSwiped = true
  nopeStatus.classList.add("status-active")
  likeStatus.classList.remove("status-active")

  if (getDogs.hasBeenSwiped) {
    if (arrNum.length > 0) {
      setTimeout(() => {
        getDogs = getNextDog()
        render()
        nopeStatus.classList.remove("status-active")
      }, 2000)
    } else {
      setTimeout(() => {
        imgContainer.classList.add("display-none")
      }, 2000)
    }
    
  }
}

likeBtn.addEventListener("click", gotLiked)
nopeBtn.addEventListener("click", gotNope)


