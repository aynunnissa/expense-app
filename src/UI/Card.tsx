import React from "react";
import { Paper, Stack } from "@mui/material";

interface IProps {
    children?: React.ReactNode;
    color? : string;
}

const Card = (props: IProps) => {
    return(
        <Paper elevation={0} sx={{ backgroundColor: props.color, boxShadow: '-5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(70, 70, 70, 0.12)', borderRadius: '15px' }}>
            <Stack
                direction="column"
                alignItems="center"
                spacing={0.5}
                p={2}
            >
                {props.children}
            </Stack>
        </Paper>
    );
}

export default Card;