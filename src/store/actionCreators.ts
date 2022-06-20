import * as actionTypes from "./actionTypes";

export function addExpense(expense: IExpense) {
    const action: ExpenseAction = {
        type: actionTypes.ADD_EXPENSE,
        expense,
    }

    return (dispatch: DispatchType) => dispatch(action);
}