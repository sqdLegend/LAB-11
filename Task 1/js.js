

let input1 = document.getElementById('inputA');
let input2 = document.getElementById('inputB');
let result = document.getElementById('result');
function sumOfTwo(input1, input2){
  result.innerHTML=Math.pow((Number(input1.value) + Number(input2.value)), 2);
}
