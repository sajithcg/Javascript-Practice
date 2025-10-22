// 1 this is manual twice the output
const adding = function() {
  console.log(2+3);
};
adding();
adding();

// 2
function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
});
runTwice(adding);


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


// 6
// setInterval(function() {
//     if(document.title === 'App') {
//       document.title = '(2) New messages';
//     } else {
//       document.title = 'App';
//     }
//   }, 1000);


// 7
// let messages = 2;

// setInterval(function() {
//     if(document.title === 'App') {
//         document.title = `(${messages}) New messages`;
//     } else {
//       document.title = 'App';
//     }
//   }, 1000);

// function add() {
//     messages++;
//     document.title = `(${messages}) New messages`;
// }

// function remove() {
//   if (messages > 0) {
//     messages--;
//   } else {
//     alert('Ellam oru alavu thaan!!!');
//   } 
//   document.title = `(${messages}) New messages`;
// }



// 8
let messages = 2;

let intervalId;

let isDisplay;

display();

function display() {
  if(isDisplay) {
    return;
  }

isDisplay = true;

intervalId = setInterval(() => {
    if(document.title === 'App') {
        document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);

}

function stopNotify() {
  isDisplay = false;

  clearInterval(intervalId);
  document.title = 'App';
}

function remove() {
  if (messages > 0) {
    messages--;
    if(messages === 0) {
      stopNotify();
    }
  } else {
    alert('Ellam oru alavu thaan!!!');
  } 
  document.title = `(${messages}) New messages`;
}

function add() {
    messages++;
    document.title = `(${messages}) New messages`;
}
