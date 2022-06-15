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
        <Container maxWidth="sm" sx={{ position: 'fixed', bottom: "20px", left: 0, right: 0, display: "flex", justifyContent: "center" }}>
            <Paper elevation={4} sx={{ borderRadius: "20px", width: "95%" }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log(newValue);
                    }}
                    sx={{ borderRadius: "20px", backgroundColor: "#1F2169" }}
                    >
                    <BottomNavigationAction sx={{ color: "white" }} onClick={() => changeUrlHandler("")} label="Home" icon={<LineAxisIcon />} />
                    <Box sx={{ backgroundColor: "#FFFFFF", width: "80px", height: "80px", borderRadius: "40px", bottom: "20px", position: "absolute"}} />
                    <Paper elevation={5} sx={{ backgroundColor: "#1F2169", color: "white", width: "60px", height: "60px", borderRadius: "30px", bottom: "30px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <AddIcon />
                    </Paper>
                    <BottomNavigationAction />
                    {/* <BottomNavigationAction 
                        onClick={() => changeUrlHandler("/plan")} 
                        icon={<AddIcon sx={{ color: "red", backgroundColor: "yellow", padding: "20px" }} />} 
                        sx={{ zIndex: 2, backgroundColor: "pink" }}
                    /> */}
                    <BottomNavigationAction sx={{ color: "white" }} onClick={() => changeUrlHandler("/history")} label="History" icon={<HistoryIcon />} />
                </BottomNavigation>
            </Paper>
        </Container>
        
    );
}

export default BottomNav;