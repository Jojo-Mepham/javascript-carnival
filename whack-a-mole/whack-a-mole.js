// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
let moleTable = document.getElementsByTagName('TD') // get table array
let moleTableArr = Array.from(moleTable) // turn table into js array so I can access index
let randomMole = moleTableArr[Math.floor(Math.random() * moleTableArr.length)] // generate random index selector from array
console.log(randomMole)
