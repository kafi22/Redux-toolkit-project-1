import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import datafetchSlice from "./datafetchSlice";

const store = configureStore({
    reducer : {
        product : productSlice,
        fetchData : datafetchSlice
    }
})

export default store