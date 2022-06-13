import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type AuthState = {
    isAuthenticated: boolean,
    firstName: string,
    secondName: string,
    email: string,
    credential: string
}

export type State = {
    auth: AuthState
}

export type AppDispatch = ThunkDispatch<State, any, AnyAction>; 