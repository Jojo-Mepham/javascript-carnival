// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
let moleTable = document.getElementsByTagName('TD') // get the TD elements in a variable
let moleTableArr = Array.from(moleTable) // turn the DOM array into a JS array
let randomMoleArr = [Math.floor(Math.random() * moleTableArr.length)] // get a random number which is the index of each cell
let randomMole = moleTable[randomMoleArr] // assign the random number to a variable
let moleImage = document.createElement('IMG') // create a new image element
moleImage.src = 'mole.png' // assig an image source to the image element
moleImage.classList.add('mole') // assig a class style to the image element so it fits in the cell
document.getElementsByTagName('TD')[randomMoleArr].appendChild(moleImage) // assign my mole image to a cell in the table

let whackMole = () => {
  randomMoleArr = [Math.floor(Math.random() * moleTableArr.length)]
  randomMole = moleTable[randomMoleArr]
  randomMole.appendChild(moleImage)
}
moleImage.onclick = whackMole //onclick functions
