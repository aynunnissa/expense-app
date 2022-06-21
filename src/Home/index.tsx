import { useSelector, shallowEqual } from "react-redux";
import { Typography, Grid, Avatar, Box, Stack } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Card from "../UI/Card";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import HistoryItem from "../History/HistoryItem";

const Home = () => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const expenses: readonly IExpense[] = useSelector((state: ExpenseState) => state.expenses, shallowEqual);

    return(
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center" p={4} spacing={2}>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Avatar sx={{ bgcolor: '#1F2169', height: '40px', width: '40px' }}>AN</Avatar>
                        <Stack>
                            <Typography variant="caption" component="p" lineHeight={1.2} color="#949BB7">Hello,</Typography>
                            <Typography variant="subtitle2" component="p" fontWeight={600} lineHeight={1.2}>Aynun Nissa</Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Card color="#1F2169">
                        <Typography variant="subtitle1" component="p" color="#949BB7">Total Balance</Typography>
                        <Typography variant="h6" component="p" color="#FFFFFF">Rp500,000</Typography>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <ArrowUpwardIcon sx={{ backgroundColor: '#67A0AB', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <Typography variant="subtitle2" component="p" color="#949BB7">Income</Typography>
                        <Typography variant="body1" component="p" fontWeight={600}>Rp500,000</Typography>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <ArrowDownwardIcon sx={{ backgroundColor: '#F54740', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <Typography variant="subtitle2" component="p" color="#949BB7">Income</Typography>
                        <Typography variant="body1" component="p" fontWeight={600}>Rp500,000</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <>
                        <Typography component="h6" variant="h6" fontWeight={600}>Recent Transactions</Typography>
                        {expenses.slice(0, 7).map((exp) => (
                            <HistoryItem 
                                key={exp.id}
                                exp={exp}
                            />
                        ))}
                    </>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Home;