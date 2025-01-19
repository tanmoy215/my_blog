document.querySelector('#tom').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form inputs
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    // Check if any required field is empty
    if (!username || !password || !confirmPassword) {
        // Show alert if any field is empty
        showAlert('Please fill in all required fields.', 'error');
        return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
        // Show custom alert with red background for error
        showAlert('Passwords do not match. Please try again.', 'error');
        return;
    }

    // Save username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Show success alert with green background
    showAlert('Sign-up successful! Redirecting to login...', 'success');
    setTimeout(function() {
        window.location.href = './index.html';
    }, 2000); // Delay of 2 seconds before redirect
});

// Function to show the custom alert with dynamic background color
function showAlert(message, type) {
    document.querySelector('#alert-message').textContent = message;

    // Set background color based on the alert type
    const alertBox = document.querySelector('.alert-box');
    if (type === 'error') {
        alertBox.style.backgroundColor = '#f44336';  // Red for error
    } else if (type === 'success') {
        alertBox.style.backgroundColor = '#4CAF50';  // Green for success
    }

    document.querySelector('#customAlert').style.display = 'flex';
}

// Function to close the alert when the cross button is clicked
function closeAlert() {
    document.querySelector('#customAlert').style.display = 'none';
}



