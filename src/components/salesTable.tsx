import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchApiData } from '../states/apiSlice';
import { RootState } from '../states/store';


let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const columns = [
  {
    headerName: "WEEK ENDING",
    field: "weekEnding",
    flex: 1,
    valueGetter: (rows: any) => rows.row.weekEnding,
  },
  {
    headerName: "RETAIL SALES",
    field: "retailSales",
    flex: 1,
    valueGetter: (rows: any) => `${USDollar.format(rows.row.retailSales)}`,
    sortComparator: (a: string, b: string) => Number(a.slice(1).replaceAll(",", "")) - Number(b.slice(1).replaceAll(",", "")),
  },
  {
    headerName: "WHOLESALE SALES",
    field: "wholesaleSales",
    flex: 1,
    valueGetter: (rows: any) => `${USDollar.format(rows.row.wholesaleSales)}`,
    sortComparator: (a: string, b: string) => {
      return Number(a.slice(1).replaceAll(",", "")) - Number(b.slice(1).replaceAll(",", ""))
    } ,
  },
  {
    headerName: "UNITS SOLD",
    field: "unitsSold",
    flex: 1,
    valueGetter: (rows: any) => rows.row.unitsSold,
  },
  {
    headerName: "RETAILER MARGIN",
    field: "retailerMargin",
    flex: 1,
    valueGetter: (rows: any) => `${USDollar.format(rows.row.retailerMargin)}`,
    sortComparator: (a: string, b: string) => Number(a.slice(1).replaceAll(",", "")) - Number(b.slice(1).replaceAll(",", "")),
  },
];

export const SalesTable = () => {

  const dispatch = useDispatch();
    const apiData = useSelector((state: RootState) => state.api.data);

    useEffect(() => {
        dispatch(fetchApiData() as any);
    }, [dispatch]);

  return (
    <Paper sx={{ width: '98%', bgcolor: 'background.paper'}} style={{ marginBottom: 20 }}> 
      <DataGrid
        getRowId={(row) => row.weekEnding}
        rows={apiData?.[0]?.sales || []}
        sx={{color: "grey"}}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        disableColumnSelector
        disableRowSelectionOnClick
      />
    </Paper>
  );
};
