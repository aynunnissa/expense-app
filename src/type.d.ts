interface IExpense {
    id: number
    date: string
    type: number
    category: number
    price: number
    description: string
}

type ExpenseState = {
    expenses: IExpense[],
    totalIncome: number,
    totalExpense: number
}

type ExpenseAction = {
    type: string
    expense: IExpense
}

type DispatchType = (args: ExpenseAction) => ExpenseAction