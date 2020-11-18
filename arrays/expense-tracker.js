const account = {
    name: 'Olawale Bashiru',
    expenses : [],
    income: [],
    addExpenses: function (description, amount) {
        const newExpense = {description: description, amount: amount}
        this.expenses.unshift(newExpense)
    },
    addIncome: function (description, amount) {
        const totalIncome = {description: description, amount: amount}
        this.income.unshift(totalIncome)
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        this.expenses.forEach (function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach (function (income) {
            totalIncome = totalIncome + income.amount
        })
        accountBalance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }

}


account.addExpenses('Rent', 950)
account.addExpenses('Coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())