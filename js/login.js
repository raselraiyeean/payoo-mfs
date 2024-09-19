// step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event) {
    //  step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
    // step-3: get the phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pineNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pineNumber);
    // step - 4: validation and pin  
    if(phoneNumber === '10' && pineNumber === '1234') {
        console.log('You are logged in.');
        window.location.href = '../homepage/index.html';
    }
    else {
        alert('Wrong phone number or pin.');
    }
});