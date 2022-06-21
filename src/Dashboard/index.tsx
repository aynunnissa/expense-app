import React from "react";
import moment from "moment";

import { Typography, Box, MenuItem, Grid, Divider, Select, Paper, SelectChangeEvent, FormControl, Stack } from "@mui/material";
// import { PieChart } from "recharts";
import ReportChart from "./ReportChart";
import OverallChart from "./OverallChart";
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

const MONTHS = ["Jan 2022", "Feb 2022", "Mar 2022", "Apr 2022", "Mei 2022"];

const Dashboard = () => {
  
  const [month, setMonth] = React.useState(MONTHS[MONTHS.length - 1]);

  const monthChangeHandler = (event: SelectChangeEvent) => {
    setMonth(event.target.value);
  }

  return (
        <>
          <Box sx={{ backgroundColor: "#1F2169" }} minHeight="100vh">
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
                      {MONTHS.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={11}>
                <DailyChart />
              </Grid>
            </Grid>
            <Box sx={{ backgroundColor: "#F2F2FD", borderRadius: "30px 30px 0px 0px" }}>
              <Grid container spacing={2} justifyContent="center" pt={2} pb={4}>
                <Grid item xs={11}>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    justifyContent="space-around"
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p" color="#1F2169" textAlign='center'>Income</Typography>
                      <Typography variant="body1" component="p" fontWeight={600} textAlign='center' color='#67A0AB'>Rp500,000</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
                        <OverallChart />
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" component="p" color="#1F2169" textAlign='center'>Expense</Typography>
                      <Typography variant="body1" component="p" fontWeight={600} textAlign='center' color='#F54740'>Rp500,000</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
                        <OverallChart />
                      </Box>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </>
    );
}

export default Dashboard;