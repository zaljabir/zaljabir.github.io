import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../states/apiSlice';
import { RootState } from '../states/store';


export const SalesGraph = () => {
    const dispatch = useDispatch();
    const apiData = useSelector((state: RootState) => state.api.data);

    React.useEffect(() => {
        dispatch(fetchApiData() as any);
    }, [dispatch]);

    return (
        <Paper sx={{ width: '98%', bgcolor: 'background.paper' }}> 
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left" style={{ marginLeft: 20, marginTop: 15, color: 'grey'}}>
                Retail Sales
            </Typography>
            <LineChart
            series={[
                {
                dataKey: 'retailSales',
                showMark: false,
                color: 'lightblue',
                },
            ]}
            leftAxis={null}
            height={400}
            dataset={apiData?.[0].sales || []}
            />
        </Paper>
    );
}