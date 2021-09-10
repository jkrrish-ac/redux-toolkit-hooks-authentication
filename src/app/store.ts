import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './pages/Login/loginSlice';
 

export const store = configureStore({
  reducer: {
    authentication : authenticationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
