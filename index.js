// DOM maninpulation using js file.


// Select the div element with 'app' id
const app = document.getElementById('app');

// create a new H1 element

const header = document.createElement('h1');

// create a new text node for the H1 element

const headerContent = document.createTextNode(
    'Develop. Preview. Ship.'
);

// append the text to the H1 element

header.appendChild(headerContent);

// place the H1 element inside the div

app.appendChild(header);