import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../page/login/LoginSlice';

//配置store中的变量类型
export const store = configureStore({
    reducer: {
        username: loginReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

