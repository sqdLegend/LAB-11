

let mytitle = document.getElementById('inputA');
let imageUrl = document.getElementById('inputB');
let description = document.getElementById('inputC');


function generateCard(mytitle, imageUrl, description) {
    let h4 = document.createElement('h4');
    h4.innerHTML = mytitle.value;
    document.getElementById('result').appendChild(h4);
    let img = document.createElement('img');
    img.src = imageUrl.value;
    document.getElementById('result').appendChild(img);
    let p = document.createElement('p');
    p.innerHTML = description.value;
    document.getElementById('result').appendChild(p);
}