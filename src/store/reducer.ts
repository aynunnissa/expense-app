import * as actionTypes from "./actionTypes";

const initialState: ExpenseState = {
    expenses: [
        {
            id: 1,
            date: "2022-04-11",
            category: 0,
            price: 5000,
            description: "Parkir kendaraan"
        },
        {
            id: 2,
            date: "2022-04-11",
            category: 1,
            price: 28000,
            description: "Beli kopi kenangan"
        },
        {
            id: 3,
            date: "2022-04-16",
            category: 2,
            price: 325000,
            description: "Belanja mingguan"
        },
        {
            id: 4,
            date: "2022-04-16",
            category: 3,
            price: 1025000,
            description: "Beli baju baru"
        },
    ]
}

const reducer = (
    state: ExpenseState = initialState,
    action: ExpenseAction
): ExpenseState => {
    switch (action.type) {
        case actionTypes.ADD_EXPENSE:
            const newExpense: IExpense = {
                id: state.expenses.length,
                date: action.expense.date,
                category: action.expense.category,
                price: action.expense.price,
                description: action.expense.description
            }
            return {
                ...state,
                expenses: state.expenses.concat(newExpense),
            }
    }
    return state;
}

export default reducer;