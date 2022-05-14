// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let clownHead = document.getElementById('head')
let clownBody = document.getElementById('body')
let clownShoes = document.getElementById('shoes')

let clownHeadFileName = './images/head'
let clownBodyFileName = './images/body'
let clownShoesFileName = './images/shoes'

let allIndexes = [0, 0, 0] // this is my all clothes index array
let clownIndex = 0 // my what body part are we doing index
let bodyParts = [clownHead, clownBody, clownShoes] // my all clothes array which gets my html IDs
let bodyPartSrc = [clownHeadFileName, clownBodyFileName, clownShoesFileName] // this gets my file names to create my bodyPart.src

//watching the live workshop
// Key Codes (ArrowUp = 38; ArrowDown = 40; ArrowRight = 39; ArrowLeft)

let checkKey = (event) => {
  // this is setting our key functions, telling them to move + or - 1
  if (event.code === 'ArrowUp') {
    moveUpDown(-1)
  } else if (event.code === 'ArrowDown') {
    moveUpDown(1)
  } else if (event.code === 'ArrowRight') {
    moveLeftRight(1)
  } else if (event.code === 'ArrowLeft') {
    moveLeftRight(-1)
  }
}
window.onkeydown = checkKey // initialising event.code

let moveLeftRight = (move) => {
  // this is my function telling me what my bodyPart.src changes to when I tap the left or right arrows on my keyboard
  let clothesIndex = allIndexes[clownIndex] // telling me what clownIndex I'm on so the computer knows if we're changing head, body, or shoes
  let bodyPart = bodyParts[clownIndex] // this is telling me what HTML ID to get based on my clownIndex
  let bPSrc = bodyPartSrc[clownIndex] // this is telling me what the file name is I should get based on my ClownIndex
  clothesIndex += move
  if (clothesIndex > 5) {
    clothesIndex = 0
  } else if (clothesIndex < 0) {
    clothesIndex = 5
  }
  bodyPart.src = bPSrc.concat(clothesIndex, '.png')
  allIndexes[clownIndex] = clothesIndex
}

let moveUpDown = (move) => {
  clownIndex += move
  if (clownIndex > 2) {
    clownIndex = 0
  } else if (clownIndex < 0) {
    clownIndex = 2
  }
}
