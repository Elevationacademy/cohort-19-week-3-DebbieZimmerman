// const list = document.getElementById("myList")
// let x = 2
// const addItem = function () {
//     const newItem = document.createElement("li")
//     x = x + 1
//     newItem.innerHTML = "Item" + (x)
//     list.appendChild(newItem)
// }
// const box = document.getElementById("box")
// box.onclick = function () {
//     box.innerHTML = "clicked"
// }
// box.onmouseenter = function () {
//     box.innerHTML = "ooh, that tickles!"
// }
  
// const box = document.getElementById("box")
// box.onclick = function () {
//     box.innerHTML = "clicked"
// }
// box.onmouseenter = function () {
//     box.innerHTML = "OOh that tickles"
// }
// const box = document.createElement("div") // dynamically creating an element

// box.setAttribute("class", "box")
// box.innerHTML =  "click me"

// box.onclick = function(){       // adding an event to the new element
//     box.innerHTML = "I'm alive!"
// }
// document.getElementById("box2").appendChild(box) // now the box will be on the page, and will react to a click!

//exercise 2
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }

    
//     const checkReservation = function() { 
//     let name = document.getElementById("name").value
//     name = name.toLowerCase()
//     name = name[0].toUpperCase() + name.substring(1)
//     if(reservations[name]) {
//       if(!(reservations[name].claimed)) {
//           console.log("Welcome " + name + ". I see you have a reservation.")
//       } else {
//         console.log("Hmm, someone already claimed this reservation.")
//        } 
//     } else {
//        console.log("I am sorry, there is no reservation under the name " + name + ".")
//    }
// }

//exercise 3
// const getRandomColor = function() {
//     const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
//     const randomPosition = Math.floor(Math.random() * niceColors.length);
//     return niceColors[randomPosition];
//   }
// x = 0
// while(x < 6) {
//   x ++
//   let box = document.createElement("span")
//   box.setAttribute("class","box")
//   container.appendChild(box)
//   box.style.backgroundColor = getRandomColor()
//   box.onmouseenter = function () {
//     this.style.backgroundColor = getRandomColor()
//   }
// }

//exercise 4