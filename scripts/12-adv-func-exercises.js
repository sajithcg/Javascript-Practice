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


// 3 and 4
const startButton = () => {
  const button = document.querySelector('.js-button');
    
  button.addEventListener('click', () => {
      return startButton();
    });

    document.querySelector('.js-button').innerHTML = 'loading...';

    setTimeout(function() {
      document.querySelector('.js-button').innerHTML = 'finished!';
  }, 1000);
}


// 5
let timeoutId;

const cartButton = () => {
  const cartButton = document.querySelector('.js-cartButton');
  
  cartButton.addEventListener('click', () => {
    cartButton();
  });

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

const display = () => {
  if(isDisplay) {
    return;
  }

isDisplay = true;

intervalId = setInterval(() => {
    document.title = document.title === 'App' 
      ? `(${messages}) New messages` 
      : 'App';
  }, 1000);
};

const stopNotify = () => {
  isDisplay = false;

  clearInterval(intervalId);
  document.title = 'App';
};

const remove = () => {
  if (messages > 0) {
    messages--;
    if(messages === 0) {
      stopNotify();
    } else {
      document.title = `(${messages}) New messages`;
  } 
  } else {
    alert('Ellam oru alavu thaan!!!');
  }
};

const add = () => {
    messages++;
    document.title = `(${messages}) New messages`;
};

const addButton = document.querySelector('.js-addButton')
  .addEventListener('click', add);

const removeButton = document.querySelector('.js-removeButton')
  .addEventListener('click', remove);

display();


// Adv Function Exercises Pt. 2

// 9
// const multiply = (num1, num2) => {
//   return num1 * num2;
// }
// console.log(multiply(2, 3));
// console.log(multiply(7, 10));


// 10 is writing in one line
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));


// 11
function countPositive(nums) {
  let positiveNum = 0;

  nums.forEach((num) => {
    if(num > 0) {
      positiveNum++;
    }
  });

  return positiveNum;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));



// 12
function addNum(array, num) {
  return array.map((value) => value + num );
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));


// 13
// function removeEgg(foods) {
//   // return foods.filter((food) => {
//   //   food !== 'egg';
//   // })

//   // writing on one line
//   return foods.filter((food) => food !== 'egg')
// }
// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


// 14
function removeEgg(foods) {
  let eggs = 0;

  return foods.filter((food) => {
    if(food === 'egg' && eggs < 2) {
      eggs++;
      return false;
    }
    return true;
  });
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


// 15
