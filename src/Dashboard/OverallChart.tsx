import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Typography } from "@mui/material";
import React from 'react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface IData {
  name: string
  value: number
}

interface IProps {
  data: IData[]
}

const OverallChart = (props: IProps) => {
  return (
      <PieChart width={160} height={160}>
          <Pie
              dataKey="value"
              data={props.data}
              outerRadius={80}
              fill="#82ca9d"
              label={renderCustomizedLabel}
              labelLine={false}
          >
              {props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
          <Tooltip />
      </PieChart>
  );
}

export default OverallChart;