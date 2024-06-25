import { configureStore } from  '@reduxjs/toolkit';
import { userSlice } from './reduceR'

const store = configureStore({
    reducer: userSlice.reducer
})

export default store;