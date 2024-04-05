// Write your code here!
// Remove the <main> element with id 'main'
document.getElementById('main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute of the new <h1> element to 'victory'
newHeader.setAttribute('id', 'victory');

// Set the text content of the new <h1> element
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the new <h1> element to the body of the document
document.body.appendChild(newHeader);
