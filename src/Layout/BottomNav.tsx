import React, { useEffect } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Container, Box } from "@mui/material";
import { LineAxis as LineAxisIcon, History as HistoryIcon, StickyNote2 as StickyNote2Icon, Add as AddIcon, Home as HomeIcon, Person as PersonIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Nav {
    [key: string]: number;
};

const navValue: Nav = {
    "": 0,
    "statistic": 1,
    "history": 4,
    "profile": 5
};

const BottomNav = () => {

    const navigate = useNavigate();

    const changeUrlHandler = (url:string) => {
        navigate(url);
    }

    const [value, setValue] = React.useState(0);
    const path = window?.location?.href.split("/");
    
    useEffect(() => {
        const currPath = path[3] as string;
        setValue(currPath ? navValue[currPath] : navValue[""]);  
    }, [path]);

    return(
        <Container maxWidth="sm" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <Paper elevation={1} sx={{ borderRadius: "30px 30px 0px 0px", padding: '5px 0px' }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log(newValue);
                    }}
                    sx={{ borderRadius: "20px 20px 0px 0px", position: 'relative' }}
                    >
                    <BottomNavigationAction onClick={() => changeUrlHandler("")} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/statistic")} label="Statistics" icon={<LineAxisIcon />} />
                    <Paper elevation={5} onClick={() => changeUrlHandler("/new")} sx={{ backgroundColor: "#1F2169", color: "#FFFFFF", width: "70px", height: "70px", borderRadius: "35px", bottom: "20px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                        <AddIcon />
                    </Paper>
                    <BottomNavigationAction disabled />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/history")} label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/profile")} label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default BottomNav;