
  class Dogs {
    constructor(data) {
      Object.assign(this, data)
    }

    displayData() {
      const {name, avatar, age, bio} = this
      return `
            <img class="dog-img" src=${avatar} alt="${name}">
            <h2 class="name">${name}, ${age}</h2>
            <p class="greeting">${bio}</p>
         `
    }
  } 

export default Dogs
  

