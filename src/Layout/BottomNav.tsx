import React, { useEffect, useRef } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Container, Box } from "@mui/material";
import { LineAxis as LineAxisIcon, History as HistoryIcon, StickyNote2 as StickyNote2Icon, Add as AddIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {

    const navigate = useNavigate();

    interface Nav {
        [key: string]: number;
    };

    const navValue = useRef<Nav>({
        "": 0,
        "history": 1,
        "plan": 2
    });

    const changeUrlHandler = (url:string) => {
        navigate(url);
    }

    const [value, setValue] = React.useState(0);
    const path = window?.location?.href.split("/");
    
    useEffect(() => {
        const currPath = path[3];
        setValue(currPath ? navValue.current[currPath] : navValue.current[""]);  
    }, [path, navValue]);

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
                    sx={{ borderRadius: "20px 20px 0px 0px" }}
                    >
                    <BottomNavigationAction onClick={() => changeUrlHandler("")} label="Home" icon={<LineAxisIcon />} />
                    <Paper elevation={5} onClick={() => changeUrlHandler("/new")} sx={{ backgroundColor: "#1F2169", color: "#FFFFFF", width: "70px", height: "70px", borderRadius: "35px", bottom: "20px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
                        <AddIcon />
                    </Paper>
                    <BottomNavigationAction />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/history")} label="History" icon={<HistoryIcon />} />
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default BottomNav;