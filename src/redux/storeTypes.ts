import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type AuthState = {
    isAuthenticated: boolean
}

export type State = {
    auth: AuthState
}

export type AppDispatch = ThunkDispatch<State, any, AnyAction>; 