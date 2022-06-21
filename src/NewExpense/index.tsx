import { Grid, Typography } from "@mui/material";

import NewExpForm from "./NewExpForm";

export default function NewExp() {
    return(
        <Grid container justifyContent="center" p={4} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" component="h1" color="#1F2169" fontWeight={700}>Add a New Report</Typography>
            </Grid>
            <Grid item xs={12}>
                <NewExpForm />
            </Grid>
        </Grid>
    );
}