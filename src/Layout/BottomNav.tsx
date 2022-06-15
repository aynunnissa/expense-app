import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Container } from "@mui/material";
import { LineAxis as LineAxisIcon, History as HistoryIcon, StickyNote2 as StickyNote2Icon } from "@mui/icons-material";

const BottomNav = () => {
    const [value, setValue] = React.useState(0);
    return(
        <Container maxWidth="sm" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <Paper elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction label="Home" icon={<LineAxisIcon />} />
                    <BottomNavigationAction label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction label="Planning" icon={<StickyNote2Icon />} />
                </BottomNavigation>
            </Paper>
        </Container>
        
    );
}

export default BottomNav;