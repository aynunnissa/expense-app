import React from 'react';
import { Box, Typography, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Icons
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PaidIcon from '@mui/icons-material/Paid';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

type Props = {
    exp: IExpense
}

type CategoryObj = {
    label: string,
    icon: React.ReactNode
}

interface ICategories {
    [key: number]: CategoryObj;
}

interface ITypedCategories {
    [key: number]: ICategories;
}

const categories: ITypedCategories = {
    0: {
        0: {
            label: "Gaji Bulanan",
            icon: <PaidIcon />
        },
        1: {
            label: "Others",
            icon: <CardGiftcardIcon />
        }
    },
    1: {
        0: {
            label: "Transportation",
            icon: <DirectionsBusFilledIcon />
        },
        1: {
            label: "Snack",
            icon: <FastfoodIcon />
        },
        2: {
            label: "Grocery",
            icon: <LocalGroceryStoreIcon />
        },
        3: {
            label: "Others",
            icon: <LocalMallIcon />
        },  
    }
}

const HistoryItem = ({ exp }: Props) => {

    const theme = createTheme();

    const customTheme = createTheme({
        typography: {
            subtitle1: {
                [theme.breakpoints.down('sm')]: {
                    fontSize: '0.85rem',
                },
            }
        }
    })

    return(
        <ThemeProvider theme={customTheme}>
            <Paper sx={{ borderRadius: "15px", boxShadow: '-5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(70, 70, 70, 0.12)' }} elevation={0}>
                <Box mt={2} p={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex",  alignItems: "center" }} gap={1}>
                        <Box bgcolor='#C0BEF4' p={1} sx={{ display: "flex", alignItems: "center", borderRadius: '10px' }}>
                            {categories[exp.type][exp.category]?.icon}
                        </Box>
                        <Box>
                            <Typography component="p" variant="subtitle1" fontWeight={500}>{categories[exp.type][exp.category]?.label}</Typography>
                            <Typography component="p" variant="caption" fontWeight={500} color="#949BB7">{exp.date}</Typography>
                        </Box>
                    </Box>
                    <Typography component="p" variant="subtitle1" fontWeight={700} color={exp.price >= 0 ? '#67A0AB' : '#F54740'}>{exp.price < 0 ? '' : '+'} {exp.price.toLocaleString()}</Typography>
                </Box>
            </Paper>
        </ThemeProvider>
    );
}

export default HistoryItem;