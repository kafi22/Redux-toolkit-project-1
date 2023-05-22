import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = 'https://fakestoreapi.com/products'
 
export const fetchData = createAsyncThunk('fetch/data', async () => {

    const res = await fetch(url)
    const data = await res.json();
    return data
})

const datafetchSlice = createSlice({
    name : 'data',
    initialState : {
        IsLoading : true,
        Data : [],
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.IsLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.isError = false;
            state.Data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.IsLoading = false;
            state.isError = action.error.message;
            state.Data = []
        } )
    }
})

export default datafetchSlice.reducer