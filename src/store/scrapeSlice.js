import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postScrapeData =createAsyncThunk('scrapeData/postScrapeData',async (url)=>{
    const response = await axios.post('http://localhost:8000/scrape',{url})
    console.log(response);
    return response.data
})
export const fetchScrapeData =createAsyncThunk('scrapeData/fetchScrapeData',async (url)=>{
    const response = await axios.get('http://localhost:8000/scrape-data')
    console.log(response);
    return response.data
})


const scrapeDataSlice = createSlice({
    name: 'scrapeData',
    initialState: {
      data: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(postScrapeData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(postScrapeData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data.push(action.payload);
        })
        .addCase(postScrapeData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(fetchScrapeData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchScrapeData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchScrapeData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export default scrapeDataSlice.reducers