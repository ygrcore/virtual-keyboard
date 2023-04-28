let lang = true; // English language default
const keyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
const keyboardRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
const simpleBtnsEn = ['~', '!', '@','#','$','%','^', '&', '*', '(', ')', '_', '+', 'q', 'w','e','r','t','y','u','i','o','p','{','}','|','a','s','d','f','g','h','j','k','l',':','"','z','x','c','v','b','n','m','<','>','?','↑', 'Win', '←', '↓', '→'];
const simpleBtnsEnUsual = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w','e','r','t','y','u','i','o','p', '[', ']', '\\','a','s','d','f','g','h','j','k','l', ';', "'",'z','x','c','v','b','n','m', ',', '.', '/', '↑', 'Win', '←', '↓', '→'];
const simpleBtnsRu = ['ё', '!', '"','№',';','%',':', '?', '*', '(', ')', '_', '+', 'й', 'ц','у','к','е','н','г','ш','щ','з','х','ъ','/','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю',',','↑', 'Win', '←', '↓', '→'];
const simpleBtnsRuUsual = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.','↑', 'Win', '←', '↓', '→'];

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
// document.onkeydown = function(e) {
//   arrtutu.push(e.code);
  // console.log(keyCodes.length, keyboardEn.length)
// }

const numberOfButtonsInARow = [14, 15, 13, 13, 9];

function createKeyboardRows() {
  let arrayOfRows = [];
  let start = 0;
  let end = numberOfButtonsInARow[0]
  for (let i=0;i<numberOfButtonsInARow.length;i++) {
    let row = lang? keyboardEn.slice(start, end) : keyboardRu.slice(start, end);
    arrayOfRows.push(row)
    start = end;
    end = i === 0 ? start + numberOfButtonsInARow[i+1] - 1 : start + numberOfButtonsInARow[i+1];
  }
  return arrayOfRows;
}

// console.log(keyboardEn.slice(14,14+15-1))
// console.log(keyboardEn.slice(14+15-1,14+15-1+13))
// console.log(keyboardEn.slice(14+15-1+13,14+15-1+13+13))
// console.log(keyboardEn.slice(14+15-1+13+13,14+15-1+13+13+9))

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
  let keyboardRows = createKeyboardRows();
  for (let i=0;i<keyboardRows.length;i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    let rowInner = '';
    for (let j=0;j<keyboardRows[i].length;j++) {
      let btnClass;
      if (keyboardRows[i][j] === 'Backspace') btnClass = 'backspace';
      else if (keyboardRows[i][j] === 'Tab') btnClass = 'tab';
      else if (keyboardRows[i][j] === 'Shift') btnClass = 'shift';
      else if (keyboardRows[i][j] === 'CapsLock') btnClass = 'capslock';
      else if (keyboardRows[i][j] === 'Enter') btnClass = 'enter';
      else if (keyboardRows[i][j] === 'Ctrl') btnClass = 'control';
      else if (keyboardRows[i][j] === 'Alt') btnClass = 'alt';
      else if (keyboardRows[i][j] === ' ') btnClass = 'space';
      else if (keyboardRows[i][j] === '↑') btnClass = 'key arrow';
      else if (keyboardRows[i][j] === '←') btnClass = 'key arrow';
      else if (keyboardRows[i][j] === '↓') btnClass = 'key arrow';
      else if (keyboardRows[i][j] === '→') btnClass = 'key arrow';
      else btnClass = 'key';
      rowInner += `<button class="${btnClass}">${keyboardRows[i][j]}</button>`
    }

    row.innerHTML = rowInner;
    keyboardBlock.append(row)
  }
}
// function init() {
//   for (let i=0;i<keyboardEn.length;i++) {
//     let button = document.createElement('button');
//     button.textContent = `${keyboardEn[i]}`
//     if (keyboardEn[i] === 'Backspace') button.classList.add('backspace');
//     else if (keyboardEn[i] === 'Tab') button.classList.add('tab');
//     else if (keyboardEn[i] === 'CapsLock') button.classList.add('capslock');
//     else if (keyboardEn[i] === 'Enter') button.classList.add('enter');
//     else if (keyboardEn[i] === 'Control') button.classList.add('control');
//     else if (keyboardEn[i] === 'Alt') button.classList.add('alt');
//     else if (keyboardEn[i] === ' ') button.classList.add('space');
//     else button.classList.add('key');
//     keyboardBlock.append(button)

//   }
// }

init();

const buttons = document.querySelectorAll('button'),
      simpleBtns = document.querySelectorAll('.key'),
      textarea = document.querySelector('textarea'),
      backspaceBtn = document.querySelector('.backspace'),
      spaceBtn = document.querySelector('.space'),
      capslockBtn = document.querySelector('.capslock'),
      tabBtn = document.querySelector('.tab'),
      enterBtn = document.querySelector('.enter'),
      shiftBtn = document.querySelectorAll('.shift');

let textareaChars = [];

buttons.forEach((btn, i)=> {
  btn.setAttribute('keyCode', keyCodes[i])
})

simpleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    textarea.value += btn.innerText
    textareaChars = textarea.value.split('');
    console.log(textareaChars)
  })
})

backspaceBtn.addEventListener('click', () => {
  textareaChars.pop();
  textarea.value = textareaChars.join('');
})

spaceBtn.addEventListener('click', () => {
  textareaChars.push(' ');
  textarea.value = textareaChars.join('');
})

tabBtn.addEventListener('click', () => {
  textareaChars.push('  ');
  textarea.value = textareaChars.join('');
})

capslockBtn.addEventListener('click', () => {
  simpleBtns.forEach(btn => {
    btn.classList.toggle('upper-case')
  })
})

enterBtn.addEventListener('click', () => {
  textarea.value = textarea.value + "\n";
})


function changeLang(event) {
  if (event.ctrlKey && event.altKey) {
    for (let i=0;i<buttons.length;i++) {
      buttons[i].innerHTML = lang? keyboardRu[i] : keyboardEn[i]
    }
    lang = !lang;
  }
}

function shiftHandlerDown() {
  if (lang) {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsEn[i];
      btn.classList.toggle('upper-case');
    })
  } else {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsRu[i];
      btn.classList.toggle('upper-case');
    })
  }
}
function shiftHandlerUp() {
  if (lang) {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsEnUsual[i];
      btn.classList.toggle('upper-case');
    })
  } else {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsRuUsual[i];
      btn.classList.toggle('upper-case');
    })
  }
}

document.addEventListener('keydown', (event) => changeLang(event));

shiftBtn.forEach(btn => {
  btn.addEventListener('mousedown', shiftHandlerDown);
});

shiftBtn.forEach(btn => {
  btn.addEventListener('mouseup', shiftHandlerUp)
});

document.addEventListener('keydown', event => {
  event.preventDefault();
  for (let i=0;i<simpleBtns.length;i++) {
    if (event.code == simpleBtns[i].getAttribute('keyCode')) {
      simpleBtns[i].classList.add('key-active')
      textarea.value += simpleBtns[i].innerText
      textareaChars = textarea.value.split('');
    }
  }

  if (event.code == 'Space') {
    textareaChars.push(' ');
    textarea.value = textareaChars.join('');
  }
  if (event.code == 'Tab') {
    textareaChars.push('  ');
    textarea.value = textareaChars.join('');
  }
  if (event.code == 'CapsLock') {
    simpleBtns.forEach(btn => {
      btn.classList.toggle('upper-case')
    })
  }
  if (event.code == 'Enter') {
    textarea.value = textarea.value + "\n";
    textareaChars = textarea.value.split('');
  }
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    shiftHandlerDown()
  }
  console.log(textareaChars)
})

