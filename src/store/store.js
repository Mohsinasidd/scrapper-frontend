import { configureStore } from '@reduxjs/toolkit'
import scrapeDataReducer from "./scrapeSlice"
export const store  = configureStore({
    reducer:{
        scrapeData :scrapeDataReducer
    }
})