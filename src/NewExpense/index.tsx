import { Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux"
import { Dispatch } from "redux";
import { addExpense } from "../store/actionCreators";

import NewExpForm from "./NewExpForm";

export default function NewExp() {

    const dispatch: Dispatch<any> = useDispatch();

    const submitData = React.useCallback(
        (expense: IExpense) => dispatch(addExpense(expense)),
        [dispatch]
    )

    return(
        <Grid container justifyContent="center" p={4} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" component="h1" color="#1F2169" fontWeight={700}>Add a New Report</Typography>
            </Grid>
            <Grid item xs={12}>
                <NewExpForm submitData={submitData} />
            </Grid>
        </Grid>
    );
}