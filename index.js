let lang = localStorage.getItem('lang') || 'en'; // English language default
const keyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
const keyboardRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
const simpleBtnsEn = ['~', '!', '@','#','$','%','^', '&', '*', '(', ')', '_', '+', 'q', 'w','e','r','t','y','u','i','o','p','{','}','|','a','s','d','f','g','h','j','k','l',':','"','z','x','c','v','b','n','m','<','>','?','↑', 'Win', '←', '↓', '→'];
const simpleBtnsEnUsual = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w','e','r','t','y','u','i','o','p', '[', ']', '\\','a','s','d','f','g','h','j','k','l', ';', "'",'z','x','c','v','b','n','m', ',', '.', '/', '↑', 'Win', '←', '↓', '→'];
const simpleBtnsRu = ['ё', '!', '"','№',';','%',':', '?', '*', '(', ')', '_', '+', 'й', 'ц','у','к','е','н','г','ш','щ','з','х','ъ','/','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю',',','↑', 'Win', '←', '↓', '→'];
const simpleBtnsRuUsual = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','.','↑', 'Win', '←', '↓', '→'];

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const numberOfButtonsInARow = [14, 15, 13, 13, 9];

function createKeyboardRows() {
  let arr;
  if (lang == 'en') {
    arr = keyboardEn;
  } else {
    arr = keyboardRu;
  }
  let arrayOfRows = [];
  let start = 0;
  let end = numberOfButtonsInARow[0]
  for (let i=0;i<numberOfButtonsInARow.length;i++) {
    let row = arr.slice(start, end);
    arrayOfRows.push(row)
    start = end;
    end = i === 0 ? start + numberOfButtonsInARow[i+1] - 1 : start + numberOfButtonsInARow[i+1];
  }
  return arrayOfRows;
}

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

const infoDiv = document.createElement('div');
infoDiv.classList.add('info');
const systemInfo = document.createElement('p');
systemInfo.classList.add('info__para');
systemInfo.textContent = 'Клавиатура создана в операционной системе Windows'
const langInfo = document.createElement('p');
langInfo.classList.add('info__para');
langInfo.textContent = 'Для переключения языка комбинация: левыe/правый ctrl + alt'
infoDiv.append(systemInfo, langInfo);
container.append(infoDiv);


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

init();

const buttons = document.querySelectorAll('button'),
      simpleBtns = document.querySelectorAll('.key'),
      textarea = document.querySelector('textarea'),
      backspaceBtn = document.querySelector('.backspace'),
      spaceBtn = document.querySelector('.space'),
      capslockBtn = document.querySelector('.capslock'),
      tabBtn = document.querySelector('.tab'),
      enterBtn = document.querySelector('.enter'),
      shiftBtn = document.querySelectorAll('.shift'),
      ctrlBtn = document.querySelectorAll('.control'),
      altBtn = document.querySelectorAll('.alt');

let textareaChars = [];

buttons.forEach((btn, i)=> {
  btn.setAttribute('keyCode', keyCodes[i])
})

simpleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('end');
    textarea.value += btn.innerText
    textareaChars = textarea.value.split('');
    console.log(textareaChars)
    setTimeout(()=> {
      buttons.forEach(btn => btn.classList.remove('end'))
    },200)
  })
})

backspaceBtn.addEventListener('click', () => {
  backspaceBtn.classList.add('end');
  textareaChars.pop();
  textarea.value = textareaChars.join('');
  setTimeout(()=> {
    backspaceBtn.classList.remove('end')
  },200)
})

spaceBtn.addEventListener('click', () => {
  spaceBtn.classList.add('end');
  textareaChars.push(' ');
  textarea.value = textareaChars.join('');
  setTimeout(()=> {
    spaceBtn.classList.remove('end')
  },200)
})

tabBtn.addEventListener('click', () => {
  tabBtn.classList.add('end');
  textareaChars.push('  ');
  textarea.value = textareaChars.join('');
  setTimeout(()=> {
    tabBtn.classList.remove('end')
  },200)
})

capslockBtn.addEventListener('mousedown', () => {
  capslockBtn.classList.toggle('key-active');
  capslockBtn.classList.add('end');
  simpleBtns.forEach(btn => {
    btn.classList.toggle('upper-case')
  })
  setTimeout(()=> {
    capslockBtn.classList.remove('end')
  },200)
})

enterBtn.addEventListener('click', () => {
  enterBtn.classList.add('end');
  textarea.value = textarea.value + "\n";
  setTimeout(()=> {
    enterBtn.classList.remove('end')
  },200)
})

ctrlBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('end');
    setTimeout(()=> {
      btn.classList.remove('end')
    },200)
  })
})

altBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('end');
    setTimeout(()=> {
      btn.classList.remove('end')
    },200)
  })
})

function changeLang(event) {
  if (event.ctrlKey && event.altKey) {
    for (let i=0;i<buttons.length;i++) {
      buttons[i].innerHTML = lang == 'en' ? keyboardRu[i] : keyboardEn[i]
    }
    lang = lang == 'en' ? 'ru' : 'en'
    localStorage.setItem('lang', lang)
  }
}

function shiftHandlerDown() {
  shiftBtn.forEach(btn => btn.classList.add('key-active'))
  if (lang == 'en') {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsEn[i];
      btn.classList.add('upper-case');
    })
  } else {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsRu[i];
      btn.classList.add('upper-case');
    })
  }
}
function shiftHandlerUp() {
  shiftBtn.forEach(btn => btn.classList.remove('key-active'));
  if (lang == 'en') {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsEnUsual[i];
      btn.classList.remove('upper-case');
    })
  } else {
    simpleBtns.forEach((btn, i) => {
      btn.innerHTML = simpleBtnsRuUsual[i];
      btn.classList.remove('upper-case');
    })
  }
}

document.addEventListener('keydown', (event) => changeLang(event));

shiftBtn.forEach(btn => {
  btn.addEventListener('mousedown', shiftHandlerDown);
});

shiftBtn.forEach(btn => {
  btn.addEventListener('mouseup', shiftHandlerUp);
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
    spaceBtn.classList.add('key-active')
    textareaChars.push(' ');
    textarea.value = textareaChars.join('');
  }
  if (event.code == 'Tab') {
    tabBtn.classList.add('key-active')
    textareaChars.push('  ');
    textarea.value = textareaChars.join('');
  }
  if (event.code == 'CapsLock') {
    capslockBtn.classList.toggle('key-active')
    capslockBtn.classList.add('end');
    simpleBtns.forEach(btn => {
      btn.classList.toggle('upper-case')
    })
  }
  if (event.code == 'Enter') {
    enterBtn.classList.add('key-active')
    textarea.value = textarea.value + "\n";
    textareaChars = textarea.value.split('');
  }
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    shiftBtn.forEach(btn => btn.classList.add('key-active'))
    shiftHandlerDown()
  }
  if (event.code == 'ControlLeft' || event.code == 'ControlRight') {
    ctrlBtn.forEach(btn => btn.classList.add('key-active'));
  }
  if (event.code == 'AltLeft' || event.code == 'AltRight') {
    altBtn.forEach(btn => btn.classList.add('key-active'));
  }
  if (event.code == 'Backspace') {
    backspaceBtn.classList.add('key-active')
    textareaChars.pop();
    textarea.value = textareaChars.join('');
  }
})

document.addEventListener('keyup', event => {
  // event.preventDefault();
  for (let i=0;i<simpleBtns.length;i++) {
    if (event.code == simpleBtns[i].getAttribute('keyCode')) {
      simpleBtns[i].classList.remove('key-active')
      simpleBtns[i].classList.add('end')
    }
  }

  if (event.code == 'Space') {
    spaceBtn.classList.remove('key-active');
    spaceBtn.classList.add('end');
  }
  if (event.code == 'Tab') {
    tabBtn.classList.remove('key-active');
    tabBtn.classList.add('end');
  }
  if (event.code == 'Enter') {
    enterBtn.classList.remove('key-active');
    enterBtn.classList.add('end');
  }
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
    shiftBtn.forEach(btn => btn.classList.remove('key-active'))
    shiftBtn.forEach(btn => btn.classList.add('end'))
    shiftHandlerUp()
  }
  if (event.code == 'ControlLeft' || event.code == 'ControlRight') {
    ctrlBtn.forEach(btn => btn.classList.remove('key-active'));
  }
  if (event.code == 'AltLeft' || event.code == 'AltRight') {
    altBtn.forEach(btn => btn.classList.remove('key-active'));
  }
  if (event.code == 'Backspace') {
    backspaceBtn.classList.remove('key-active');
  }
  setTimeout(()=> {
    buttons.forEach(btn => btn.classList.remove('end'))
  },200)
})

