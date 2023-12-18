function registerUser() {
    // You can add validation logic here before submitting the form
    // For simplicity, let's assume the form is valid for now

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // You can perform additional validation here if needed

    // Create an object with user data (for demonstration purposes)
    const userData = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    // For a real-world scenario, you would send this data to a server using AJAX/fetch
    // For simplicity, we'll just log the data to the console here
    console.log('User Registration Data:', userData);

    const registrationSuccess = true;

    if (registrationSuccess) {
        // Redirect to the login page after successful registration
        window.location.href = 'login.html';
    }
}