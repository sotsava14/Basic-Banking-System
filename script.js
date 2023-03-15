const myAccountBalanceEl = document.querySelector("#myAccountBalance");
let myAccountBalance = parseInt(myAccountBalanceEl.textContent);

function sendMoney() {
  const enterName = document.querySelector("#enterName").value;
  const enterAmount = parseInt(document.querySelector("#enterAmount").value);

  if (enterAmount > 8000) {
    alert("Insufficient Funds");
    return;
  }

  const findUserBankAccountEl = document.querySelector(`#${enterName}BankBalance`);
  const finalAmount = parseInt(findUserBankAccountEl.textContent) + enterAmount;
  const newBalance = myAccountBalance - enterAmount;

  myAccountBalanceEl.textContent = newBalance;
  findUserBankAccountEl.textContent = finalAmount;

  const transactionHistoryEl = document.querySelector("#transaction-history-body");
  const transactionMessage = `Sent Rupees ${enterAmount} to ${enterName}@email.com on ${new Date()}.`;
  const newTransactionEl = document.createElement("li");
  newTransactionEl.textContent = transactionMessage;
  transactionHistoryEl.prepend(newTransactionEl);

  alert(`Transaction Successful\n${transactionMessage}`);
}

