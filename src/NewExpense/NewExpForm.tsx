import React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import { useNavigate } from "react-router-dom";
import moment, { Moment } from 'moment';

import { Box, TextField, MenuItem, Stack, Button, Grid } from "@mui/material";

// Icons
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

const CATEGORIES = [
    {
        value: 0,
        label: "Transportation",
        icon: <DirectionsBusFilledIcon />
    },
    {
        value: 1,
        label: "Snack",
        icon: <FastfoodIcon />
    },
    {
        value: 2,
        label: "Grocery",
        icon: <LocalGroceryStoreIcon />
    },
    {
        value: 3,
        label: "Clothes",
        icon: <DryCleaningIcon />
    },
]

const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="Rp"
    />
  );
});

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

export default function NewExpForm() {

    const [category, setCategory] = React.useState<number>(0);
    const [price, setPrice] = React.useState<number>(0);
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));

    const navigate = useNavigate();

    const categoryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(Number(event.target.value));
    }

    const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    }

    const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value as string);
    }

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDate(event.target.value);
    }

    const submitFormHandler = () => {
      alert('submited');
    }

    const navigateHandler = (url: string) => {
      navigate(url);
    }

    return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      p={4}
    >
      <Stack spacing={2}>
        <TextField 
          fullWidth
          required
          label="Date"
          type="date"
          value={date}
          onChange={dateChangeHandler}
        />
        <TextField
          fullWidth
          required
          id="outlined-select-currency"
          select
          label="Expense Category"
          value={category}
          onChange={categoryChangeHandler}
          helperText="Please select your currency"
        >
          {CATEGORIES.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>{option.icon} {option.label}</Box>
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          required
          id="outlined-helperText"
          label="Price"
          value={price}
          onChange={priceChangeHandler}
          helperText="Some important text"
          InputProps={{
            inputComponent: NumberFormatCustom as any,
          }}
        />
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Expense Description"
          multiline
          maxRows={4}
          onChange={descriptionChangeHandler}
          value={description}
        />
      </Stack>
      <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Button sx={{ width:'100%' }} variant='outlined' onClick={() => navigateHandler('/')}>Cancel</Button>
          </Grid>
          <Grid item xs={6}>
            <Button sx={{ width:'100%' }} variant='contained' onClick={submitFormHandler}>Add Expense</Button>
          </Grid>
        </Grid>
    </Box>
    );
}