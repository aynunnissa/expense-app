import React, { useEffect, useRef } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Container } from "@mui/material";
import { LineAxis as LineAxisIcon, History as HistoryIcon, StickyNote2 as StickyNote2Icon } from "@mui/icons-material";
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
            <Paper elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log(newValue);
                    }}
                    >
                    <BottomNavigationAction onClick={() => changeUrlHandler("")} label="Home" icon={<LineAxisIcon />} />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/history")} label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/plan")} label="Planning" icon={<StickyNote2Icon />} />
                </BottomNavigation>
            </Paper>
        </Container>
        
    );
}

export default BottomNav;