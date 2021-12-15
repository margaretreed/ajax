'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
    .then(response => response.text())
    .then(serverData => {
      document.querySelector('#fortune-text').innerHTML = serverData;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;
  const newURL = `${url}?zipcode=${zipcode}`;

  fetch(newURL)
    .then(response => response.json())
    .then(serverData => {
      document.querySelector('#weather-info').innerHTML= serverData['forecast'];
  });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form 
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  const formInputs = {
    qty: document.querySelector('#qty-field').value,
    melon_type: document.querySelector('#melon-type-field').value,
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      document.querySelector('#order-status').innerHTML= responseJson['msg'];
    });
}

document.querySelector('#order-form').addEventListener('submit', orderMelons);


// There is already a route in the Flask server, /order-melons, to handle processing the data. 
// It returns a JSON object with a status code and a text message.

// Fill in the missing parts of the JavaScript file. You can use fetch() to make a request to that route, 
// using the data from the form. Then, take the returned result object and extract the status code and message.

// Make sure you make the right type of request (if you aren’t sure, look at the server – 
// is it expecting a GET or a POST?).

// Show the result’s message text in the #order-status div.

// If the order status is ERROR, then the user ordered an inappropriate number of melons, 
// and we want the message to appear in red. Look in the CSS file and you’ll see we have a CSS class intended for this.

// Write the JavaScript code to add this class so that error messages (and only error messages) appear in red. 
// You’ll want to use the HTML element method .classList.add() to add the right class onto the #order-status div.

