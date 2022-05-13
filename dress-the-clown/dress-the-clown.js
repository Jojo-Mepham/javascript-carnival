// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let clownHead = document.getElementById('head')
let clownHeadFileName = './images/head'
let clownHeadIndex = 0
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

console.log(changeClownHead())
console.log(clownHead)
