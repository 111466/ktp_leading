import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// 为 slice state 定义一个类型
interface LoginState {
    value: string
}

// 使用该类型定义初始 state
const initialState: LoginState = {
    value: ""
}

export const loginSlice = createSlice({
    name: 'username',
    // `createSlice` 将从 `initialState` 参数推断 state 类型
    initialState,
    reducers: {
        updateUsername:(state,action:PayloadAction<string>) => {
            state.value = action.payload
        },
    }
})

export const { updateUsername } = loginSlice.actions
// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectUsername = (state: RootState) => state.username.value

export default loginSlice.reducer