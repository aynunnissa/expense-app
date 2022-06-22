import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface IProps {
  expense: IExpense[]
}

interface IData {
  date: string
  inc: number
  exp: number
}

interface IDataObj {
  [key: string]: IData
}

const DailyChart = (props: IProps ) => {

  const [data, setData] = React.useState<IData[]>([]);

  React.useEffect(() => {
    const expensesData: IDataObj = {};
    for (let exp of props.expense) {
      if (expensesData[exp.date]) {
        if (exp.type === 0) {
          expensesData[exp.date].inc += exp.price;
        } else {
          expensesData[exp.date].exp += (-exp.price);
        }
      } else {
        if (exp.type === 0) {
          expensesData[exp.date] = {
            date: exp.date,
            inc: exp.price,
            exp: 0
          } as IData;
        } else {
          expensesData[exp.date] = {
            date: exp.date,
            inc: 0,
            exp: -exp.price
          } as IData;
        }
      }
    }
    const newData: IData[] = [];
    for (let date of Object.keys(expensesData)) {
      newData.push({
        date: date,
        inc: expensesData[date].inc,
        exp: expensesData[date].exp,
      })
    }
    setData(newData);
  }, [props.expense]);

  return (
    <ResponsiveContainer width={"100%"} height={"auto"} aspect={2}>
        <LineChart data={data} style={{ fontSize: "0.5rem", marginLeft: "-15px", paddingLeft: 0 }} >
            <XAxis dataKey="date" interval="preserveEnd" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
            <YAxis interval="preserveEnd" label={{ fill: 'white' }} tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
            <Legend />
            <Tooltip />
            <Line
            type="monotone"
            dataKey="inc"
            stroke="#67A0AB"
            />
            <Line type="monotone" dataKey="exp" stroke="#F54740" />
        </LineChart>
    </ResponsiveContainer>
  );
}

export default DailyChart;