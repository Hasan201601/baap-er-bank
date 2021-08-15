// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // get the total deposit amount 
    const depositTotal = document.getElementById('deposit-amount');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    // pass the deposited amount to deposit 
    const newDepositTotal = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field 
    depositInput.value = '';

})