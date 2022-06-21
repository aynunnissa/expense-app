import React from 'react';
import { CssBaseline, Container, Box } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

import BottomNav from "./BottomNav";

type Props = {
    children?: React.ReactNode;
};

const Layout = (props: Props) => {
    
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ position: "relative", padding: 0 }}>
                <Box sx={{ bgcolor: '#F2F2FD', minHeight: '100vh' }} pb={7}>
                    {props.children}
                </Box>
                <BottomNav />
            </Container>
        </ThemeProvider>
    );
};

export default Layout;