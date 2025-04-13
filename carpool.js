// script.js

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Your Ride Details:</h3>
                           <p>Pickup: ${pickup}</p>
                           <p>Destination: ${destination}</p>
                           <p>Date: ${date}</p>
                           <p>Time: ${time}</p>`;
});
