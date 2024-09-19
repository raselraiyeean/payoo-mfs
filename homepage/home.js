// add money to a account
// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event) {
    // prevent reload after form submit
event.preventDefault();
// step-2: get money to be added to an account
const addMoneyInput = document.getElementById('add-money-input').value;
// get the pin number provided
const pinNumberInput = document.getElementById('secret-pin').value;
// step-3: verify the pin
if(pinNumberInput === '1234') {
    console.log('Money added');
    // step-4: get the current balance
    const currentBalance = document.getElementById('account-balance').innerText;
    // step-5: add the addMoney with currentBalance
    const updatedBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);
    // step -6: UPdate the balance in the ui/dom
    document.getElementById('account-balance').innerText = updatedBalance;
}
else {
    alert('Wrong pin! Try again later')
}

})