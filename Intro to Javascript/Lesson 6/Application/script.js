
function validate(e) {  
    e.preventDefault();
    const email= document.getElementById('email').value ;
    const pass= document.getElementById('password').value ;
    const age= document.getElementById('age').value ;
    const msgBox= document.getElementById('message');

    let message = 'hi';

    if (email === '') {
        message= 'Enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'Enter a password.';
        msgBox.style.color='red';
    } else if (age === '') {
        message = 'Enter a password.';
        msgBox.style.color = 'red';
    } else {
        message = 'Login Successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message; 
}

document.getElementById('loginForm' ).addEventListener("submit", validate);