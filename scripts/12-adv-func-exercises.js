// 1 this is manual twice the output
const add = function() {
  console.log(2+3);
};
add();
add();

// 2
function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
});
runTwice(add);


// 3
// function startButton() {
//   const button = document.querySelector('.js-button');
  
//   setTimeout(function() {
//     button.innerHTML = 'finished!';
//   }, 1000);
// }


// 4
function startButton() {
  const button = document.querySelector('.js-button');

    document.querySelector('.js-button').innerHTML = 'loading...';

    setTimeout(function() {
      document.querySelector('.js-button').innerHTML = 'finished!';
  }, 1000);
}


// 5

let timeoutId;

function cartButton() {
  const cartButton = document.querySelector('.js-cartButton');
  cartButton.innerHTML = 'Added';
  
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    cartButton.innerText = '';
  }, 2000);
}
