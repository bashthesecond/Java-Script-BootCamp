let myAccount = {
    name: 'Olawale',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
} 

addExpense(myAccount, 2.50)
console.log(myAccount) 

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
} 

// let accountSummary = getAccountSummary(myAccount)


addIncome(myAccount, 5.25)
addExpense(myAccount, 1.5)
addExpense(myAccount, 0.25)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
