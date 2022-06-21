import React from 'react';

import { useSelector, shallowEqual } from "react-redux";
import { Box, Typography, Paper, Grid, Chip, Stack } from "@mui/material";
import { Notifications, ArrowDownward, ArrowUpward } from "@mui/icons-material";

import HistoryItem from "./HistoryItem";
import Card from '../UI/Card';

const History = () => {

    const [type, setType] = React.useState<number>(0);
    const expenses: readonly IExpense[] = useSelector((state: ExpenseState) => state.expenses, shallowEqual);

    const handleTypeChange = (code: number) => {
        setType(code);
    }

    return(
        <>
            <Grid container justifyContent="center" p={4} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h1">Transactions History</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="All" variant={type === 0 ? "filled" : "outlined"} color="primary" onClick={() => handleTypeChange(0)} />
                        <Chip label="Income" variant={type === 1 ? "filled" : "outlined"} color="success" onClick={() => handleTypeChange(1)} />
                        <Chip label="Expense" variant={type === 2 ? "filled" : "outlined"} color="error" onClick={() => handleTypeChange(2)} />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" component="p" color="#949BB7" sx={{ paddingBottom: '5px' }}>TODAY</Typography>
                    <Card><Typography variant="body2" component="p">No transactions</Typography></Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2" component="p" color="#949BB7">YESTERDAY</Typography>
                    {expenses.map((exp: IExpense) => (
                        <HistoryItem 
                            key={exp.id}
                            exp={exp}
                        />
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default History;