

let input = document.getElementById('inputA');
let input2 = document.getElementById('inputB');
let div = document.getElementById('elem');
function setInnerText(input, input2) {
  switch (input.value) {
    case 'elem':
      div.innerText = input2.value;
      break;
    default:
      div.innerText = 'false';
      break;
  }
}