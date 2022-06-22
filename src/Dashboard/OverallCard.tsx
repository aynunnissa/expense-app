import { Typography, Box } from "@mui/material";
import React from "react";
import OverallChart from "./OverallChart";

interface IProps {
    data: IExpense[],
    type: string,
    color: string
}

interface IData {
    name: string
    value: number
}

interface IDataObj {
    [key: string]: number
}

interface ICategory {
    [key: number] : string
}

interface ICategories {
    [key: number]: ICategory
}

const categories : ICategories = {
    0: {
        0: "Gaji Bulanan",
        1: "Others",
    },
    1: {
        0: "Transportation",
        1: "Snack",
        2: "Grocery",
        3: "Others",  
    }
}

const OverallCard = ({ data : masterData, type, color } : IProps) => {

    const [data, setData] = React.useState<IData[]>([]);
    const [totalPrice, setTotalPrice] = React.useState<number>(0);

    React.useEffect(() => {
        const dataObj: IDataObj = {};
        let sumPrice = 0;
        for (let d of masterData) {
        const price = Math.abs(d.price);
        sumPrice += price;
        if (dataObj[categories[d.type][d.category]]) {
            dataObj[categories[d.type][d.category]] += price;
        } else {
            dataObj[categories[d.type][d.category]] = price;
        }
        }

        setTotalPrice(sumPrice);

        const newData: IData[] = [];

        for (let cat of Object.keys(dataObj)) {
        newData.push({
            name: cat,
            value: dataObj[cat]
        })
        }
        setData(newData);
    }, [masterData]);

    return(
        <Box>
            <Typography variant="subtitle2" component="p" color="#1F2169" textAlign='center'>{type}</Typography>
            <Typography variant="body1" component="p" fontWeight={600} textAlign='center' color={color}>Rp{totalPrice.toLocaleString()}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
                <OverallChart data={data} />
            </Box>
        </Box>
    );
}

export default OverallCard;