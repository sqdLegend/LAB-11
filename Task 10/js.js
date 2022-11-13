

const fontFamilies = [
    'Serif', 'Georgia, serif',

    'system-ui', 'cursive',

    'sans-serif', 'Garamond'
    
  ];
  const elements = document.getElementsByClassName('random-font');
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (event) {
      let random = Math.floor(Math.random() * fontFamilies.length)
      elements[i].style.fontFamily = fontFamilies[random];
    })
  }