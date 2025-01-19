// Function to show custom alert with a message
function showCustomAlert(message, success = false) {
    const alertContainer = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alert-message');
    const alertBox = document.querySelector('.alert-box');
    
    // Set message
    alertMessage.textContent = message;
    
    // Change background color based on success or failure
    alertBox.classList.remove('success', 'error'); // Remove any previous classes
    alertBox.classList.add(success ? 'success' : 'error'); // Add success or error class
    
    // Show the alert
    alertContainer.style.display = 'flex';
    
    // Hide the login form
    document.querySelector('.login').style.display = 'none';
}

// Function to close the alert
function closeAlert() {
    const alertContainer = document.getElementById('customAlert');
    alertContainer.style.display = 'none';
    
    // If the alert is for failure (Invalid credentials), redirect to login page
    const alertMessage = document.getElementById('alert-message');
    if (alertMessage.textContent.includes('Invalid username or password')) {
        window.location.href = './index.html';  // Redirect to login page
    }
    
    // Show the login form again after closing the alert
    document.querySelector('.login').style.display = 'block';
}

// Event listener for the login button
document.querySelector('#btn').addEventListener('click', function () {
    const enteredUsername = document.querySelector('#name').value;
    const enteredPassword = document.querySelector('#pass').value;

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if ((enteredUsername === storedUsername || enteredUsername === "tanmoy@215") && 
        (enteredPassword === storedPassword || enteredPassword === "12345")) {
        showCustomAlert('Login successful! Welcome back.', true);
        
        // Redirect after success (if desired)
        setTimeout(() => {
            window.location.href = "./tanmoy_main_file/index.html";
        }, 1000); 
    } else {
        showCustomAlert('Invalid username or password. Please try again.', false);
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 1000);
    }
});

/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up');

signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    // Add classes
    loginIn.classList.toggle('none');
    loginUp.classList.toggle('block');
});

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');

    // Add classes
    loginIn.classList.toggle('block');
    loginUp.classList.toggle('none');
});


