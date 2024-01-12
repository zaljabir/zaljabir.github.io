import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { data } from '../components/data';

export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  retailer: string;
  details: string[];
  tags: string[];
  sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }[];
}

interface ApiState {
  data: Product[] | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ApiState = {
  data: null,
  loading: 'idle',
  error: null,
};

export const fetchApiData = createAsyncThunk('api/fetchData', async () => {
  return data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default apiSlice.reducer;
