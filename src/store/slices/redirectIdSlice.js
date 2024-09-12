import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    value: '',
};

const redirectIdSlice = createSlice({
    name: 'redirect_id',
    initialState,
    reducers: {
        redirectIdHandler: (state,action) => {
            state.value = action.payload
        }
    }
});

export const { redirectIdHandler } = redirectIdSlice.actions;
export default redirectIdSlice.reducer;