import React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import { useNavigate } from "react-router-dom";
import moment, { Moment } from 'moment';

import { Box, TextField, MenuItem, Stack, Button, Grid } from "@mui/material";

// Icons
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PaidIcon from '@mui/icons-material/Paid';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Category } from '@mui/icons-material';

type CategoryObj = {
  label: string,
  icon: React.ReactNode
}

interface ICategories {
  [key: string]: CategoryObj;
}

interface ITypedCategories {
  [key: number]: ICategories;
}

const categories: ITypedCategories = {
  0: {
      0: {
          label: "Gaji Bulanan",
          icon: <PaidIcon />
      },
      1: {
          label: "Others",
          icon: <CardGiftcardIcon />
      }
  },
  1: {
      0: {
          label: "Transportation",
          icon: <DirectionsBusFilledIcon />
      },
      1: {
          label: "Snack",
          icon: <FastfoodIcon />
      },
      2: {
          label: "Grocery",
          icon: <LocalGroceryStoreIcon />
      },
      3: {
          label: "Others",
          icon: <LocalMallIcon />
      },  
  }
}

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

interface IProps {
  submitData: (expense: IExpense | any) => void
}

export default function NewExpForm({ submitData } : IProps) {
  
  const [type, setType] = React.useState<number>(0);
  const [category, setCategory] = React.useState<number>(0);
  const [listCategory, setListCategory] = React.useState<ICategories>(categories[0])
  const [price, setPrice] = React.useState<number>(0);
  const [description, setDescription] = React.useState('');
  const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));

  const navigate = useNavigate();

  const typeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(Number(event.target.value));
    setListCategory(categories[Number(event.target.value)]);
  }

  const categoryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(Number(event.target.value));
  }

  const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  }

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const priceValue = type === 0 ? price : -price;
    const expenseObj : IExpense | {} = {
      date,
      type,
      category,
      price: priceValue,
      description
    };
    console.log(expenseObj);
    submitData(expenseObj);
    navigateHandler('/history');
  }

  const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value as string);
  }

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  }

  const navigateHandler = (url: string) => {
    navigate(url);
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2}>
        <TextField
          fullWidth
          required
          id="outlined-select-currency"
          select
          label="Report Category"
          value={type}
          onChange={typeChangeHandler}
          helperText="Please select your report category"
        >
          <MenuItem key="income-0" value={0}>Income</MenuItem>
          <MenuItem key="income-1" value={1}>Expense</MenuItem>
        </TextField>
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
          label={`${category === 0 ? 'Income' : 'Expense'} Category`}
          value={category}
          onChange={categoryChangeHandler}
        >
          {Object.keys(listCategory).map((option) => (
            <MenuItem key={option} value={option}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>{listCategory[option].icon} {listCategory[option].label}</Box>
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
          helperText="Ex: 10,000"
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
          helperText="Type a short description about the income/expense"
          value={description}
        />
      </Stack>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2}}>
          <Button sx={{ width:'100%' }} variant='contained' onClick={submitFormHandler}>Submit</Button>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1}}>
          <Button sx={{ width:'100%' }} variant='outlined' onClick={() => navigateHandler('/')}>Cancel</Button>
        </Grid>
      </Grid>
    </Box>
  );
}