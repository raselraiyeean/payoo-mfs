// showing add money form after clicking add money button
document.getElementById('add-money-button').addEventListener('click', function() {
    document.getElementById('add-money-form').style.display = 'block';
})
// Showing cash money form and hiding add money form
document.getElementById('cash-out-money-money').addEventListener('click', function() {
    document.getElementById('add-money-form').style.display = 'hidden';
    document.getElementById('cash-out-form').style.display = 'block';
    

})


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
   
    // step-4: get the current balance
    const currentBalance = document.getElementById('account-balance').innerText;
    // step-5: add the addMoney with currentBalance
    const updatedBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);
    // step -6: UPdate the balance in the ui/dom
    document.getElementById('account-balance').innerText = updatedBalance;
}
else {
    alert('Wrong pin! Try again later');
}

})

// js for cash out

document.getElementById('btn-cashout-money').addEventListener('click', function(event) {
    event.preventDefault();
    const cashOutMoneyAmount = document.getElementById('cashout-money-input').value;
    const pinNumberInput = document.getElementById('cashout-pin').value;
    if(pinNumberInput === '1234') {
        const currentBalance = document.getElementById('account-balance').innerText;
        const updatedBalance = parseFloat(currentBalance) - parseFloat(cashOutMoneyAmount);
        document.getElementById('account-balance').innerText = updatedBalance;
    }
    else {
        alert('Wrong pin! Try again later');
    }
})