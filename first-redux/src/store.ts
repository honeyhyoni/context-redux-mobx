import {configureStore} from "@reduxjs/toolkit";
import checkToolkitSlice from "./reducer/checkToolkit";

const store = configureStore({
    reducer: {
        check: checkToolkitSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
