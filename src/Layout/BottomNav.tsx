import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Container } from "@mui/material";
import { Restore as RestoreIcon, Favorite as FavoriteIcon, Archive as ArchiveIcon } from "@mui/icons-material";

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
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </Container>
        
    );
}

export default BottomNav;