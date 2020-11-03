// //exercise 1
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
//   const pushPull = function(action) {
//       action()
//   } 

//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"

  //exercise 2
//   const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
//   getTime = function (func) {
//       const time = new Date()
//       func(time)
//   }
//   getTime(returnTime)

//exercise 3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = function (data) {
//       console.log(data)
//   }
//   displayData(alert, logData, "I like to party")
  
// I don't fully understand why alert worked

//exercise 4
// const sum = (a , b , c) => a + b + c
// console.log(sum(1 , 2 , 3))

//exercise 5
// const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia

//exercise 6
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }
// commentOnWeather = temp => "It's " + determineWeather(temp)
// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"

//exercise 7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")































//spot check 5
// getFormalTitle = (title, name) => title + ' ' + name

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

//spot check 4
// const square = x => x * x
// console.log(square(4))
//spot check 3
// const timer = function(){
//     console.log(new Date())
//   }
  
//   setInterval(timer, 1000)
// do this instead:
//   setInterval(function (){
//       console.log(new Date())
//   }, 1000)

//spot check 1
// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);

// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

//spot check 2
// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument