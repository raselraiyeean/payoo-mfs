// add money to a account
// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event) {
    // prevent reload after form submit
event.preventDefault();
// step-2: get money to be added to an account
const addMoneyInput = document.getElementById('add-money-input').value;
// get the pin number provided
const pinNumberInput = document.getElementById('secret-pin').value;

})