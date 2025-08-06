import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    addLoading: false
}

const utilsSlice = createSlice({
    name: "utilities",
    initialState,
    reducers: {
        setAddLoading: (state,action: PayloadAction<boolean>) => {
            state.addLoading = action.payload;
        }
    }
})

export const { setAddLoading } = utilsSlice.actions;
export default utilsSlice.reducer;