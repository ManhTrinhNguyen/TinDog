


  class Dogs {
    constructor(data) {
      Object.assign(this, data)
    }

    displayData() {
      const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
      return `
          <div class="img-container">
            <img class="dog-img" src=${avatar} alt="teddy">
            <h2 class="name">${name}, ${age}</h2>
            <p class="greeting">${bio}</p>
            <img class="like-status" src="./images/badge-like.png" alt="like-img">
            <img class="nope-status" src="./images/badge-nope.png" alt="like-img">
         </div>
         <div class="btn-container">
                  <button class="nope-btn">
                      <img src="./images/icon-cross.png" alt="nope-btn">
                  </button>
                  <button class="like-btn">
                      <img src="./images/icon-heart.png" alt="like-btn">
                  </button>
              </div>
         `
    }
  } 

export default Dogs
  

