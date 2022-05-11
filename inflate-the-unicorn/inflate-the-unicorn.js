// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

let unicornClicked = (u) => {
  let newUnicorn = u.target
  if (newUnicorn.src.match('./images/unicorn-0.png')) {
    newUnicorn.src = './images/unicorn-1.png'
  } else if (newUnicorn.src.match('./images/unicorn-1.png')) {
    newUnicorn.src = './images/unicorn-2.png'
  } else if (newUnicorn.src.match('./images/unicorn-2.png')) {
    newUnicorn.src = './images/unicorn-3.png'
  } else if (newUnicorn.src.match('./images/unicorn-3.png')) {
    alert(`${u.target.id} Says Thank You!`)
  }
}

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}
