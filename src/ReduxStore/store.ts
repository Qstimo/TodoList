import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/TodoList/ui/slice/TodoSlice";

const store = configureStore({
    reducer: {
        todo
    }
})
export default store;