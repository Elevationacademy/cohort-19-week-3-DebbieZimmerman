//exercise 1
// const StringFormatter = function (word) {
//     const capitalize = function (word) {
//         word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//         console.log(word)
//     }
//     const skewer = function (word) {
//         word = word.split(' ').join('-')
//         console.log(word)
//     }
//     return {
//         capitalizeFirst: capitalize,
//         skewerCase: skewer,
//     }
// }

// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box

//exercise 2
// const Bank = function () {
//     let money = 500
//     const depositMoney = function (x) {
//         money += x
//     }
//     const checkBalance = function () {
//         console.log(money)
//     }
//     return {
//         deposit: depositMoney,
//         showBalance: checkBalance,
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

//exercise 3
const SongsManager = function () {
    let songs = {}
    const add = function (name, url) {
        url = url.replace("https://www.youtube.com/watch?v=", "")
        songs[name] = url
    }
    const get = function (name){
        console.log("https://www.youtube.com/watch?v=" + songs[name])
    }
    return {
        addSong: add,
        getSong: get,
    }
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long")

//spot check 2
// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//   return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
//   }
// }
// const m = mathOperations()
// console.log(m.add(13, 29))
// console.log(m.mult(1.75, 24))
// console.log(m.mult(7, m.div(36, 6)))



//spot check 1
// const family = function () {
//     const members = []
//     const birth = function (name) {
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// const giveBirth = family()
// giveBirth("Avi")
// giveBirth("Benji")
// giveBirth("Debbie")