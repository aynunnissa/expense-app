import { Box, Typography, Paper, Grid } from "@mui/material";
import { Notifications, ArrowDownward, ArrowUpward } from "@mui/icons-material";

const History = () => {

    const HistoryItem = () => {
        return(
            <Box mt={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex",  alignItems: "center" }}>
                    <Notifications />
                    <Box>
                        <Typography component="p" fontWeight={500}>Donation</Typography>
                        <Typography component="p" fontWeight={500} color="secondary">4 April 2022</Typography>
                    </Box>
                </Box>
                <Typography component="p" fontWeight={500} sx={{ color: "red"}}>- 20.000</Typography>
            </Box>
        );
    }

    return(
        <>
            <Box px={2} pt={4} sx={{ backgroundColor: "#F5F5F5"}}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6" component="h1">Expense History</Typography>
                    <Notifications />
                </Box>
                <Box my={3} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Typography variant="subtitle2" component="h3">Last Month</Typography>
                    <Typography variant="subtitle2" component="h3">This Month</Typography>
                </Box>
                <Paper elevation={0}>
                    <Box textAlign="center" p={4} fontWeight="bold">
                        <Typography component="p">Total Balance</Typography>
                        <Typography variant="body2" component="p">Rp500.000</Typography>
                    </Box>
                </Paper>
                <Box mt={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                    <Paper sx={{ width: "50%"}}>
                        <Box textAlign="center" p={4} fontWeight="bold">
                            <ArrowDownward />
                            <Typography component="p" color="secondary">Income</Typography>
                            <Typography variant="body2" component="p" fontWeight={700}>Rp1.500.000</Typography>
                        </Box>
                    </Paper>
                    <Paper sx={{ width: "50%"}}>
                        <Box textAlign="center" p={4} fontWeight="bold">
                            <ArrowUpward />
                            <Typography component="p" color="secondary">Expense</Typography>
                            <Typography variant="body2" component="p" fontWeight={700}>Rp1.000.000</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>
            <Box mt={4}>
                <Paper sx={{ borderRadius: "50px 50px 0px 0px", padding: "30px 20px 100px 20px" }}>
                    <Typography component="h2" variant="h5" fontWeight={700}>Transaction</Typography>
                    <HistoryItem />
                    <HistoryItem />
                    <HistoryItem />
                </Paper>
            </Box>
        </>
    );
}

export default History;