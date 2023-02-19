// select the form and inputs
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission

    // get input values
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // validate input values
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please enter a username, email, password, and confirm password');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // TODO: perform signup logic here (e.g. send data to server and handle response)

    // redirect to calendar page on successful signup
    window.location.href = 'calendar.html';
});
