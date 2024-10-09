import { createSlice } from "@reduxjs/toolkit";

interface initialStateInt{
    id: string,
}

const initialState: initialStateInt = {
    id: '',
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
    }
})

export default shopSlice.reducer;