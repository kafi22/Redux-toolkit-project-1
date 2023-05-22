import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({

    name : 'Product',
    initialState : {
        Product : []
    },
    reducers : {
        add : (state, action) => {
            state.Product.push(action.payload);
            console.log(action.payload);
        },

        remove : (state, action) => {

          
            const filterItems = state.Product.filter(state => state.id !== action.payload);
            state.Product = filterItems
        }
    }
})

export const {add, remove} = productSlice.actions

export default productSlice.reducer
