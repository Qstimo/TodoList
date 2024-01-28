import { Todo } from "../../../../pages/MainPage/types";
import { createSlice } from "@reduxjs/toolkit";

interface TTodo {
    item: Todo[]
}
const initialState: TTodo = {
    item: [],
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
})
export default todoSlice.reducer;