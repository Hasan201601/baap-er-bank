document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (userEmail == 'sontan@baap.com' && password == 'secret') {
        window.location.href = 'banking.html'
    }
    else {
        const warning = document.getElementById('warning');
        warning.innerText = 'Sorry!!You have no account';
        warning.style.display = 'block';
    }
})