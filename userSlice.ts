import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/getAllUsers", async (thunkApi) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
    const data = await response.json();

    return data;
})

const initialState = {
    entities: [],
    loading: false,
    incrementVal: 0
} as any

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        increment: (state) => {
            console.log('state');
            console.log(state)
            state.incrementVal++
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.entities.push(...action.payload);
        });

        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        });
    }
})

export const { increment } = userSlice.actions;

export default userSlice.reducer;
