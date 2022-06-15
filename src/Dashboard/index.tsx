import { Typography, Box, Paper } from "@mui/material";
import ReportChart from "./ReportChart";

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
    return (
        <>
            <Box p={4}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6" component="h1" fontWeight={700}>Report</Typography>
                </Box>
                <Box my={1} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Typography variant="subtitle2" component="h3">Last Month</Typography>
                    <Typography variant="subtitle2" component="h3">This Month</Typography>
                </Box>
                <Paper sx={{ backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "20px" }}>
                    <Typography variant="subtitle1" component="p" fontWeight={600} color="secondary">Net Income</Typography>
                    <Typography variant="body1" component="p" fontWeight={700}>Rp1.000.000,00</Typography>
                    <ReportChart data={data} />
                </Paper>
            </Box>
            <Box>
                <Paper sx={{ borderRadius: "50px 50px 0px 0px", padding: "30px 20px 100px 20px", backgroundColor: "#FFFFFF" }}>
                    <Typography component="h2" variant="h5" fontWeight={700}>Transaction</Typography>
                    
                </Paper>
            </Box>
        </>
    );
}

export default Dashboard;