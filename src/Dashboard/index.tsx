import React from "react";
import moment from "moment";
import { useSelector, shallowEqual } from "react-redux";

import { Typography, Box, MenuItem, Grid, Divider, Select, Paper, SelectChangeEvent, FormControl, Stack } from "@mui/material";
// import { PieChart } from "recharts";
import OverallCard from "./OverallCard";
import { color } from "@mui/system";
import DailyChart from "./DailyChart";

const data = [
  {
    name: 'Day 1',
    expense: 24,
    income: 40,
  },
  {
    name: 'Day 2',
    expense: 13,
    income: 30,
  },
  {
    name: 'Day 3',
    expense: 48,
    income: 20,
  },
  {
    name: 'Day 4',
    expense: 30,
    income: 27,
  },
  {
    name: 'Day 5',
    expense: 30,
    income: 27,
  },
  {
    name: 'Day 6',
    expense: 30,
    income: 27,
  },
  {
    name: 'Day 7',
    expense: 30,
    income: 27,
  },
];

const Dashboard = () => {
  
  const listMonth: string[] = useSelector((state: ExpenseState) => state.months, shallowEqual);
  const expenses: IExpense[] = useSelector((state: ExpenseState) => state.expenses, shallowEqual);

  const [month, setMonth] = React.useState(listMonth[listMonth.length - 1]);
  const [filteredExpense, setFilteredExpense] = React.useState<IExpense[]>(expenses.filter((exp) => moment(exp.date).format("YYYY-MM") === month));
  const [incomeData, setIncomeData] = React.useState<IExpense[]>(filteredExpense.filter((exp) => exp.type === 0));
  const [expenseData, setExpenseData] = React.useState<IExpense[]>(filteredExpense.filter((exp) => exp.type === 1));

  const monthChangeHandler = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
    const filteredData: IExpense[] = expenses.filter((exp) => moment(exp.date).format("YYYY-MM") === event.target.value);
    setFilteredExpense(filteredData);
    setIncomeData(filteredData.filter((exp) => exp.type === 0));
    setExpenseData(filteredData.filter((exp) => exp.type === 1));
  }

  return (
        <>
          <Box sx={{ backgroundColor: "#1F2169" }}>
            <Grid container spacing={2} justifyContent="center" py={4}>
              <Grid item xs={11}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography variant='h5' component='h1' color="white" fontWeight={700}>Dashboard</Typography>
                  <FormControl size="small">
                    <Select
                      value={month}
                      onChange={monthChangeHandler}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label', style: { backgroundColor: "white" } }}
                      sx={{ backgroundColor: "white" }}
                    >
                      {listMonth.map((option) => (
                        <MenuItem key={option} value={option}>
                            {moment(option).format('MMM YYYY')}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={11} sx={{ overflowX: 'auto', overflowY: 'hidden' }}>
                <DailyChart expense={filteredExpense} />
              </Grid>
            </Grid>
            <Box sx={{ backgroundColor: "#F2F2FD", borderRadius: "30px 30px 0px 0px" }}>
              <Grid container spacing={2} justifyContent="center" pt={2} pb={4} columns={21}>
                <Grid item sm={10} xs={21}>
                  <OverallCard 
                    type="Income"
                    data={incomeData}
                    color='#67A0AB'
                  />
                </Grid>
                <Grid item sm={1} xs={0}>
                  <Divider orientation="vertical" variant="middle" sx={{ height: '100%' }}  flexItem />
                </Grid>
                <Grid item sm={10} xs={21}>
                  <OverallCard 
                    type="Expense"
                    data={expenseData}
                    color='#F54740'
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </>
    );
}

export default Dashboard;