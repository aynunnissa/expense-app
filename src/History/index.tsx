import React from 'react';

import { useSelector, shallowEqual } from "react-redux";
import { Typography, Grid, Chip, Stack } from "@mui/material";

import HistoryItem from "./HistoryItem";
import Card from '../UI/Card';
import moment from 'moment';

const History = () => {

    const [type, setType] = React.useState<number>(2);
    const allExpenses: readonly IExpense[] = useSelector((state: ExpenseState) => state.expenses, shallowEqual);
    const expenses = allExpenses.slice(0).reverse().slice(0, 31);
    const todayTransactions = expenses.filter((transaction) => transaction.date === moment().format('YYYY-MM-DD'));
    const yesterdayTransactions = expenses.filter((transaction) => transaction.date === moment().subtract(1, 'days').format('YYYY-MM-DD'));
    const transactions = expenses.filter((transaction) => transaction.date !== moment().subtract(1, 'days').format('YYYY-MM-DD') && transaction.date !== moment().format('YYYY-MM-DD'));

    const [filteredTodayTrans, setFilteredTodayTrans] = React.useState(todayTransactions);
    const [filteredYestTrans, setFilteredYestTrans] = React.useState(yesterdayTransactions);
    const [filteredTrans, setFilteredTrans] = React.useState(transactions);

    const handleTypeChange = (code: number) => {
        setType(code);
        if (code === 2) {
            setFilteredTodayTrans(todayTransactions);
            setFilteredYestTrans(yesterdayTransactions);
            setFilteredTrans(transactions);
        } else if (code === 0 || code === 1) {
            setFilteredTodayTrans(todayTransactions.filter((tr) => tr.type === code))
            setFilteredYestTrans(yesterdayTransactions.filter((tr) => tr.type === code))
            setFilteredTrans(transactions.filter((tr) => tr.type === code))
        }
    }

    return(
        <>
            <Grid container justifyContent="center" p={4} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h1">Transactions History</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="All" variant={type === 2 ? "filled" : "outlined"} color="primary" onClick={() => handleTypeChange(2)} />
                        <Chip label="Income" variant={type === 0 ? "filled" : "outlined"} color="success" onClick={() => handleTypeChange(0)} />
                        <Chip label="Expense" variant={type === 1 ? "filled" : "outlined"} color="error" onClick={() => handleTypeChange(1)} />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" component="p" color="#949BB7" sx={{ paddingBottom: '5px' }}>TODAY</Typography>
                    {filteredTodayTrans.length <= 0 ? 
                        <Card><Typography variant="body2" component="p">No transactions</Typography></Card> 
                        : filteredTodayTrans.map((exp: IExpense) => (
                            <HistoryItem 
                                key={exp.id}
                                exp={exp}
                            />
                        ))
                    }
                    
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" component="p" color="#949BB7" sx={{ paddingBottom: '5px' }}>YESTERDAY</Typography>
                    {filteredYestTrans.length <= 0 ? 
                        <Card><Typography variant="body2" component="p">No transactions</Typography></Card> 
                        : filteredYestTrans.map((exp: IExpense) => (
                            <HistoryItem 
                                key={exp.id}
                                exp={exp}
                            />
                        ))
                    }
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" component="p" color="#949BB7" sx={{ paddingBottom: '5px' }}>TRANSACTIONS</Typography>
                    {filteredTrans.length <= 0 ? 
                        <Card><Typography variant="body2" component="p">No transactions</Typography></Card> 
                        : filteredTrans.map((exp: IExpense) => (
                            <HistoryItem 
                                key={exp.id}
                                exp={exp}
                            />
                        ))
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default History;