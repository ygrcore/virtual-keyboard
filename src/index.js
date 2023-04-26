// let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
let keyboard2 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '←', '↓', '→'];
// document.onkeydown = function(e) {
// console.log(e.key)
//   keyboard.push(e.key);
// console.log(keyboard)
// }

const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'RSS Virtual Keyboard';
container.append(title);

const textarea = document.createElement('div');
textarea.classList.add('textarea');
textarea.innerHTML = '<textarea></textarea>';
container.append(textarea);

const keyboardBlock = document.createElement('div');
keyboardBlock.classList.add('keyboard');
container.append(keyboardBlock);


function init() {
  for (let i=0;i<keyboard2.length;i++) {
    let button = document.createElement('button');
    button.classList.add('key');
    button.textContent = `${keyboard2[i]}`
    keyboardBlock.append(button)

  }
}

init();