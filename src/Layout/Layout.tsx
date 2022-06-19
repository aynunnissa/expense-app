import React from 'react';
import { CssBaseline, Container, Box } from "@mui/material";

import BottomNav from "./BottomNav";

type Props = {
    children?: React.ReactNode;
};

const Layout = (props: Props) => {
    return(
        <>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ position: "relative"}}>
                <Box sx={{ bgcolor: '#F0F1F5', minHeight: '100vh' }}>
                    {props.children}
                </Box>
                <BottomNav />
            </Container>
        </>
    );
};

export default Layout;