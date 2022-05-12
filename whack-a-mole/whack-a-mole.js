// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
let moleTable = document.getElementsByTagName('TD')
let moleTableArr = Array.from(moleTable)
let randomMoleArr = [Math.floor(Math.random() * moleTableArr.length)]

// for (i = 0; i < moleTableArr.length; i++) {
//   moleTableArr[i] = randomMoleArr
// }

let moleImage = document.createElement('IMG')
moleImage.src = 'mole.png'
moleImage.classList.add('mole')
moleElement = document
  .getElementsByTagName('TD')
  [randomMoleArr].appendChild(moleImage)

let moleWhacked = () => {}
console.log(moleImage)
console.log(randomMoleArr)
