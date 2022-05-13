// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let clownHead = document.getElementById('head')
let clownHeadFileName = './images/head'
let clownHeadIndex = 0
let clownHeadFileType = '.png'

let changeClownHead = () => {
  let clownHead = document.getElementById('head')
  let clownHeadSrc = clownHeadFileName.concat(
    '',
    clownHeadIndex,
    '',
    clownHeadFileType
  )
  clownHead.src = clownHeadSrc
}

window.addEventListener('keydown', function (event) {
  let key = event.code
  switch (event.code) {
    case 'ArrowRight':
      console.log('pressing right arrow')
      changeClownHead()
      if (clownHeadIndex === 5) {
        clownHeadIndex = 0
      } else {
        clownHeadIndex++
      }
      break
    case 'ArrowLeft':
      console.log('pressing left arrow')
      changeClownHead()
      if (clownHeadIndex === 0) {
        clownHeadIndex = 5
      } else {
        clownHeadIndex--
      }
  }
})
