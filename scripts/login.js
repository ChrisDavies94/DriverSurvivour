// Get references to the DOM elements
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

// Add an event listener to the form submit button
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the email and password values from the form inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    // Make a request to the server to log in the user
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (response.ok) {
                // Redirect the user to the calendar page if login was successful
                window.location.href = '/calendar.html';
            } else {
                // Display an error message if login was unsuccessful
                errorMessage.textContent = 'Invalid email or password';
                errorMessage.style.display = 'block';
            }
        })
        .catch((error) => {
            console.error(error);
        });
});
