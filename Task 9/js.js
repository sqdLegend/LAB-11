

const cards = [
    { title: 'Name 1', imageUrl: 'https://4.bp.blogspot.com/-732yTkbJIE0/T3Lq6JUPn-I/AAAAAAAAB8I/ig1y_ZS3yUI/s1600/mountains.jpg', description: 'description - 1' },
    { title: 'Name 2', imageUrl: 'https://th.bing.com/th/id/R.028fa3cd19d7f7c7ddc2c9c486580ab3?rik=9tDF24RRWbg1dA&riu=http%3a%2f%2fcdn.thinglink.me%2fapi%2fimage%2f586043796358168579%2f1024%2f10%2fscaletowidth%2f0%2f0%2f1%2f1%2ffalse%2ftrue%3fwait%3dtrue&ehk=rSJ6Mhy0FKaKr%2flWEMdvZsRoBsOYzZQG4RTdy1wGiIY%3d&risl=&pid=ImgRaw&r=0', description: 'description - 2' },
    { title: 'Name 3', imageUrl: 'https://th.bing.com/th/id/R.b1b655e08b48eb8aedc023d9c77f73c7?rik=8eOOXemN3Psn5A&pid=ImgRaw&r=0', description: 'description - 3' },
   ];
  function generateCard(mytitle, imageUrl, description) {
      let h4 = document.createElement('h4');
      h4.innerHTML = mytitle;
      document.getElementById('result').appendChild(h4);
      let img = document.createElement('img');
      img.src = imageUrl;
      document.getElementById('result').appendChild(img);
      let p = document.createElement('p');
      p.innerHTML = description;
      document.getElementById('result').appendChild(p);
  }
  for(let i = 0; i < cards.length; i++){
    generateCard(cards[i].title, cards[i].imageUrl, cards[i].description);
  }
  