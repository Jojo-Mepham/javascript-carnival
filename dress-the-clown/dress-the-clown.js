// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let clownHead = document.getElementById('head')
let clownHeadFileName = './images/head'
let clownHeadIndex = 3
let clownHeadFileType = '.png'

let changeClownHead = () => {
  let clownHeadSrc = clownHeadFileName.concat(
    '',
    clownHeadIndex,
    '',
    clownHeadFileType
  )
  return clownHeadSrc
}
let increaseClownHeadIndex = () => {
  if (clownHeadIndex <= 0) {
    clownHeadIndex = 1
  } else if (clownHeadIndex <= 1) {
    clownHeadIndex = 2
  } else if (clownHeadIndex <= 2) {
    clownHeadIndex = 3
  } else if (clownHeadIndex <= 3) {
    clownHeadIndex = 4
  } else if (clownHeadIndex <= 4) {
    clownHeadIndex = 5
  } else {
    clownHeadIndex = 0
  }
  return clownHeadIndex
}

console.log(changeClownHead())
console.log(clownHead)
console.log(clownHeadIndex)
console.log(increaseClownHeadIndex())
