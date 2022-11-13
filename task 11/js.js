

let input1 = document.getElementById('inputA');
let p = document.getElementById('p');
function randomIntFromInterval(mymin, mymax) {
  return Math.floor(Math.random() * (mymax - mymin + 1) + mymin);
}
function getRandomColor(inputA) {
  switch (inputA.value) {
    case 'rgb':
      let a = randomIntFromInterval(0, 255);
      let b = randomIntFromInterval(0, 255);
      let c = randomIntFromInterval(0, 255);
      return "rgb(" + a + ", " + b + ", " + c + ")";

    case 'hex':
      let str = '#';
      for (let i = 0; i < 6; i++) {
        let h_3 = randomIntFromInterval(0, 15);
        str = str + ten_to_hex(h_3);
      }
      return str;

    default:
      return -1;
  }
}
function myColor() {
  p.innerHTML = getRandomColor(inputA);
  p.style.color = p.innerHTML;
}
function ten_to_hex(myten) {
  switch (myten) {
    case 1:
      return 'A';
    case 2:
      return 'B';
    case 3:
      return 'C';
    case 4:
      return 'D';
    case 5:
      return 'E';
    case 6:
      return 'F';
    default:
      return myten;
  }
}