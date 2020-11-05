


// //exercise 1

// $('button').click(function () {
//     $("ul").append(`<li>${$("#my-input").val()}</li>`)
//     $("#my-input").val("")
// })

// // exercise 2
// $('ul').on("click", "li", function () {
//     $(this).remove()
// })


// exercise 4
$(".item").click(function () {
    if ($(this).data().instock) {
    $("#cart").append(`<div class="cart-item">${$(this).text()}</div>`)
}})

// Data Flow Exercise
// const posts = [
//     {name: "Debbie", text: "You're the best!"},
//     {name: "Aliza", text: "No, you're the best!"}
// ]

// const render = function () {
//     $('#posts-display').empty()

//     for (let post of posts) {
//         const postElement = $(`<div>${post.name}: ${post.text}</div>`)
//         $('#posts-display').append(postElement)
//     }
// }

// $("button").click(function () {
//     const n = ($("#inputname").val())
//     const t = ($("#inputtext").val())
//     posts.push({name: n, text: t}) 
//     render()
// })

// render()




































// //spot check 2
// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("ul li:first").css("color", "green")
// $("ul li:last").css("color", "pink")
// $("#brown-div").css("color", "brown")

// // spot check 3
// $("div").addClass("box")

// spot check 4
// $("#my-input").val('Terbyte')

// //spot check 5
// const barcode = $("div").data().barcode
// const expiryDate = $("div").data().expirationdate
// console.log(`The item with barcode ${barcode} will expire on ${expiryDate}`)    

//spot check 7 
// $('button').click(function () {
//     alert($("#my-input").val())
//   })
  
//spot check 8
// $('.box').hover(function () {
//     $(this).css("background-color", "blue")
// })

//spot check 9
// $(".feedme").on("click", function(){
//     let divCopy = `<div class=feedme> ${$(this).text()} </div>`
 
//     $("body").append(divCopy)
//   })

// spot check 10
// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

//   for(let name of names){
//         $("body").append(`<div class='human'>${name.first} - ${name.last}</div>`)
//   }

//spot check 11
// $(".disappearing").click(function () {
//     $("div").remove(".disappearing")
// })

// spot check 12
// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>I am a blog</div>")
//   })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(this).text("blargh") 
//   })

