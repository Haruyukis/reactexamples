import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserStateValue{
    username: string;
}

export interface UserState{
    value: UserStateValue;
}


const initialState = {value : {username: ""}} as UserState;

const userSlice = createSlice({
    /* ⚠️ A slice always contains a name and an initialState.
    Remark: Reducers are functions that interract with the current state and do action on it.
    */
    name:"user",
    initialState,
    reducers: {
        // Remark: ? in PayloadAction<?> is the type of the thing given to modify the state.
        login: (state: UserState, action: PayloadAction<UserStateValue>) => { 
            state.value = action.payload;
        },

        logout: (state: UserState) => {
            state.value = initialState.value;
        }
    }
})

export const { login, logout } = userSlice.actions

export const store = configureStore({
    reducer:{
        user: userSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>; // Type of a State from the store.
