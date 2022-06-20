interface IExpense {
    id: number
    date: string
    category: number
    price: number
    description: string
}

type ExpenseState = {
    expenses: IExpense[]
}

type ExpenseAction = {
    type: string
    expense: IExpense
}

type DispatchType = (args: ExpenseAction) => ExpenseAction