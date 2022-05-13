// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
let changeClownHead = () => {
  let clownHead = document.getElementById('head')
  return (clownHead.src = './images/head1.png')
}
console.log(changeClownHead(clownHead))
