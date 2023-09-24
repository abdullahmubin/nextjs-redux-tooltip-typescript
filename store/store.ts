import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../userSlice'

export function makeStore() {
    return configureStore({
        reducer: userReducer,
    })
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;