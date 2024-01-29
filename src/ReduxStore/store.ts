import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/TodoList/ui/slice/TodoSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        todo
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;