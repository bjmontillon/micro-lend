import { configureStore } from '@reduxjs/toolkit';
import clientSlice from '../Slice/client-slice'

export default configureStore({
    reducer: {
        clients: clientSlice
    }
});