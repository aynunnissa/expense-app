import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface IProps {
    data: Array<Object>
}

const ReportChart = ({ data }: IProps) => {
    return (
        <ResponsiveContainer width={"100%"} height={"auto"} aspect={2.5}>
            <BarChart
                data={data}
                style={{ fontSize: "0.75rem"}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width={25} />
                <Tooltip />
                <Legend />
                <Bar dataKey="expense" fill="red" barSize={12} radius={[5, 5, 0, 0]} />
                <Bar dataKey="income" fill="green" barSize={12} radius={[5, 5, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ReportChart;