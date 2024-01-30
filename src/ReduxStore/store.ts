import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/TodoList/ui/slice/TodoSlice";
import { useDispatch } from "react-redux";
import modal from './slices/ModalSlice'

const store = configureStore({
    reducer: {
        todo,
        modal
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;