import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        header: 'E-commerce',
    },
    reducers: {
        setHeader: (state, action) => {
            state.header = action.payload;
        },
    },
});

// export actions
export const { setHeader } = appSlice.actions;

// store
const store = configureStore({
    reducer: {
        header: appSlice.reducer,
    },
});

export default store;
