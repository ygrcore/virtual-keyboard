// let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
let keyboard2 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '←', '↓', '→'];
// document.onkeydown = function(e) {
// console.log(e.key)
//   keyboard.push(e.key);
// console.log(keyboard)
// }

const numberOfButtonsInARow = [14, 15, 13, 13, 9];

function createKeyboardRows() {
  let arrayOfRows = [];
  let start = 0;
  let end = numberOfButtonsInARow[0]
  for (let i=0;i<numberOfButtonsInARow.length;i++) {
    let row = keyboard2.slice(start, end);
    arrayOfRows.push(row)
    start = end;
    end = i === 0 ? start + numberOfButtonsInARow[i+1] - 1 : start + numberOfButtonsInARow[i+1];
  }
  console.log(arrayOfRows)
  return arrayOfRows;
}
createKeyboardRows()

console.log(keyboard2.slice(0,14))
console.log(keyboard2.slice(14,14+15-1))
console.log(keyboard2.slice(14+15-1,14+15-1+13))
console.log(keyboard2.slice(14+15-1+13,14+15-1+13+13))
console.log(keyboard2.slice(14+15-1+13+13,14+15-1+13+13+9))

const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'RSS Virtual Keyboard';
container.append(title);

const textBox = document.createElement('div');
textBox.classList.add('textarea');
textBox.innerHTML = '<textarea></textarea>';
container.append(textBox);

const keyboardBlock = document.createElement('div');
keyboardBlock.classList.add('keyboard');
container.append(keyboardBlock);


function init() {
  for (let i=0;i<keyboard2.length;i++) {
    let button = document.createElement('button');
    button.textContent = `${keyboard2[i]}`
    if (keyboard2[i] === 'Backspace') button.classList.add('backspace');
    else if (keyboard2[i] === 'Tab') button.classList.add('tab');
    else if (keyboard2[i] === 'CapsLock') button.classList.add('capslock');
    else if (keyboard2[i] === 'Enter') button.classList.add('enter');
    else if (keyboard2[i] === 'Control') button.classList.add('control');
    else if (keyboard2[i] === 'Alt') button.classList.add('alt');
    else if (keyboard2[i] === ' ') button.classList.add('space');
    else button.classList.add('key');
    keyboardBlock.append(button)

  }
}

init();

const buttons = document.querySelectorAll('button');
const textarea = document.querySelector('textarea');

// function activeBtn(btn, e) {
//   btn.classList.remove('key-active');
//   if (e.target.innerHTML === btn.innerHTML) {
//     btn.classList.add('key-active');
//   }
// }

// buttons.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     btn.classList.remove('key-active');
//     if (e.target.innerHTML === btn.innerHTML) {
//       btn.classList.add('key-active');
//     }
//   })
// })

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    textarea.value += btn.innerText
  })
})

