import { configureStore } from '@reduxjs/toolkit';
import { parentApiSlice } from './slices/parentApiSlice';

const store = configureStore({
    reducer: {
        [parentApiSlice.reducerPath]: parentApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(parentApiSlice.middleware),
    devTools: true
});

export default store;