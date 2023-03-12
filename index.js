import dogs from "./data.js"
import Dogs from "./Dog.js"

const imgContainer = document.querySelector(".img-container")
const nopeBtn = document.querySelector(".nope-btn")
const likeBtn = document.querySelector(".like-btn")
const likeStatus = document.querySelector(".like-status")
const nopeStatus = document.querySelector(".nope-status")


//Get next Dog Func
function getNextDog() {
  let nextDog = dogs.shift()
  let getNextDog = new Dogs(nextDog)
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
    setTimeout(() => {
      if (dogs.length > 0) {
        getDogs = getNextDog()
        render()
        likeStatus.classList.remove("status-active")
      } else {
        imgContainer.classList.add("display-none")
      }
    }, 500) 
  
}

// Nope
function gotNope() {
  getDogs.hasBeenSwiped = true
  nopeStatus.classList.add("status-active")
  likeStatus.classList.remove("status-active")

  setTimeout(() => {
    if (dogs.length > 0) {
      getDogs = getNextDog()
      render()
      nopeStatus.classList.remove("status-active")
    } else {
      imgContainer.classList.add("display-none")
      }
     }, 500)
    
  
}

likeBtn.addEventListener("click", gotLiked)
nopeBtn.addEventListener("click", gotNope)


