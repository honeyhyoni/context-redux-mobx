import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

interface IState {
    check: boolean;
    users: string[] | null;
    loading?: boolean;
}

const initialState: IState = {
    check: false,
    users: null,
    loading: false,
}

const getUsers = (): Promise<Array<Record<string, any>>> => axios.get('https://jsonplaceholder.typicode.com/users')

export const getUsersThunk = createAsyncThunk(
    '',
    async (): Promise<Array<Record<string, any>>> => {
        const result: any = await getUsers();
        console.log(result, 'result');
        return result.data;
    }
)

const checkToolkitSlice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        setBoolean: (
            state,
            action: PayloadAction<{check: boolean}>
        ) => {
            console.log(state, action)
            state.check = action.payload.check;
        },
        changeBoolean: (state) => {
            state.check = !state.check
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsersThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.map((ele) => ele.name)
            })
            .addCase(getUsersThunk.rejected, (state) => {
                state.loading = false;
            })
    }
})

export const { setBoolean, changeBoolean } = checkToolkitSlice.actions;

export default checkToolkitSlice;
