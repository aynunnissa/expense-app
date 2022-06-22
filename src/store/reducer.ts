import moment from "moment";
import * as actionTypes from "./actionTypes";

const initialState = {
    expenses: [
        {
            id: 1,
            date: "2022-02-11",
            type: 0,
            category: 0,
            price: 5000000,
            description: "Gaji Bulanan"
        },
        {
            id: 2,
            date: "2022-02-11",
            type: 1,
            category: 1,
            price: -28000,
            description: "Beli kopi kenangan"
        },
        {
            id: 3,
            date: "2022-02-16",
            type: 1,
            category: 2,
            price: -325000,
            description: "Belanja mingguan"
        },
        {
            id: 4,
            date: "2022-02-16",
            type: 1,
            category: 3,
            price: -2025000,
            description: "Beli baju baru"
        },
        {
            id: 5,
            date: "2022-04-11",
            type: 0,
            category: 0,
            price: 5000000,
            description: "Gaji Bulanan"
        },
        {
            id: 6,
            date: "2022-04-11",
            type: 1,
            category: 3,
            price: -2800000,
            description: "Beli lemari"
        },
        {
            id: 7,
            date: "2022-04-16",
            type: 1,
            category: 2,
            price: -750000,
            description: "Belanja bulanan"
        },
        {
            id: 8,
            date: "2022-04-16",
            type: 1,
            category: 0,
            price: -1025000,
            description: "Mobil masuk bengkel"
        },
        {
            id: 9,
            date: "2022-04-11",
            type: 0,
            category: 0,
            price: 1000000,
            description: "Temen bayar hutang"
        },
        {
            id: 10,
            date: "2022-05-01",
            type: 0,
            category: 0,
            price: 5000000,
            description: "Gaji bulanan"
        },
        {
            id: 11,
            date: "2022-05-03",
            type: 1,
            category: 0,
            price: -325000,
            description: "Beli bensin"
        },
        {
            id: 12,
            date: "2022-05-03",
            type: 1,
            category: 1,
            price: -600000,
            description: "Makan di steak 21"
        },
        {
            id: 13,
            date: "2022-05-08",
            type: 0,
            category: 1,
            price: 1500000,
            description: "Bonus dari kantor"
        },
    ],
    totalIncome: 17500000,
    totalExpense: -7878000,
    months: ["2022-02", "2022-04", "2022-05"]
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
                type: action.expense.type,
                category: action.expense.category,
                price: action.expense.price,
                description: action.expense.description
            }
            const income = newExpense.type === 0 ? state.totalIncome + newExpense.price : state.totalIncome;
            const expense = newExpense.type === 0 ? state.totalExpense + newExpense.price : state.totalExpense;
            const listMonth = [];
            const date = moment(action.expense.date).format("YYYY-MM");
            if (state.months.indexOf(date) < 0) {
                listMonth.push(action.expense.date);
            }

            return {
                ...state,
                expenses: state.expenses.concat(newExpense),
                totalIncome: income,
                totalExpense: expense,
                months: state.months.concat(listMonth)
            }
    }
    return state;
}

export default reducer;