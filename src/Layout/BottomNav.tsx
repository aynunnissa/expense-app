import React, { useEffect } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Container } from "@mui/material";
import { LineAxis as LineAxisIcon, History as HistoryIcon, Add as AddIcon, Home as HomeIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

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

    const theme = createTheme();

    const AddPaper = styled(Paper)(() => ({
        width: '70px',
        height: '70px',
        borderRadius: '35px',
        backgroundColor: "#1F2169",
        color: "#FFFFFF",
        bottom: "20px",
        right: "10%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        
        [theme.breakpoints.down('sm')]: {
            width: '50px',
            height: '50px',
            borderRadius: '25px',
            bottom: "30px"
        },
    }))    

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
        <Container maxWidth="sm" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: 0 }}>
            <Paper elevation={1} sx={{ borderRadius: "30px 30px 0px 0px", padding: '5px 0px' }}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ borderRadius: "20px 20px 0px 0px", position: 'relative' }}
                    showLabels={true}
                    >
                    <BottomNavigationAction onClick={() => changeUrlHandler("")} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/statistic")} label="Statistics" icon={<LineAxisIcon />} />
                    <BottomNavigationAction onClick={() => changeUrlHandler("/history")} label="History" icon={<HistoryIcon />} />
                    <BottomNavigationAction disabled />
                    <AddPaper elevation={5} onClick={() => changeUrlHandler("/new")}>
                        <AddIcon />
                    </AddPaper>
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default BottomNav;