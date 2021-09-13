import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './pages/Login/loginSlice';
import { usersListReducer } from './pages/Users-List/userSlice'
 

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    userList: usersListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
