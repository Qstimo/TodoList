import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface TModal {
    isOpenModal: boolean,
    toggle: boolean
}

const initialState: TModal = {
    isOpenModal: false,
    toggle: false
}

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalIsOpenSet: (state) => {
            state.isOpenModal = !state.isOpenModal
        },
        toggleSet: (state) => {
            state.toggle = !state.toggle
        }
    }

})
export const selectIsOpenModal = (state: RootState) => state.modal
export const { modalIsOpenSet, toggleSet } = ModalSlice.actions;
export default ModalSlice.reducer