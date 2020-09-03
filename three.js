const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

// app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.open('GET', 'https://api.covid19india.org/data.json', true);
request.onload = function () {
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(statewise => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const h1 = document.createElement('h1');
//       h1.textContent = statewise.title;

//       const p = document.createElement('p');
//       statewise.description = statewise.description.substring(0, 300);
//       p.textContent = `${statewise.description}...`;

//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(p);
//     });
if (request.status >= 200 && request.status < 400) {
    data.statewise.forEach(statewise => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      //h1.textContent = statewise.title;

    //   const activeTitle = document.createElement('h1');
    //   activeTitle.textContent = "active";

    //   const confirmedTitle = document.createElement('h1');
    //   confirmedTitle.textContent = 'confirmed';

      const state = document.createElement('h1');
      state.textContent = statewise.state

      // const p = document.createElement('p');

      const confirmed = document.createElement('p')
      statewise.confirmed = statewise.confirmed;
      confirmed.textContent = `CONFIRMED : ${statewise.confirmed}`;

      const active = document.createElement('p')
      statewise.active = statewise.active;
      active.textContent = `ACTIVE : ${statewise.active}`;

      const recovered = document.createElement('p')
      statewise.recovered = statewise.recovered;
      recovered.textContent = `RECOVERED : ${statewise.recovered}`;


      const deaths = document.createElement('p')
      statewise.deaths = statewise.deaths;
      deaths.textContent = `DEATHS : ${statewise.deaths}`;

      container.appendChild(card);
      // card.appendChild(h1);
      // card.appendChild(p);
      // TITLE
    //   card.appendChild(activeTitle)
    //   card.appendChild(confirmedTitle)
      card.appendChild(state)

      // CONTENT
      card.appendChild(confirmed)
      card.appendChild(active)
      card.appendChild(recovered)
      card.appendChild(deaths)

    });
  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
