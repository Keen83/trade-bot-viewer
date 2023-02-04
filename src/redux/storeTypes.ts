import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type Instrument = {
    id: number,
    name: string
}

export type AuthState = {
    isAuthenticated: boolean,
    firstName: string,
    secondName: string,
    email: string,
    credential: string
}

export type InstrumentsState = {
    usedInstruments: Instrument[]
};

export type State = {
    auth: AuthState,
    instruments: InstrumentsState
}

export type AppDispatch = ThunkDispatch<State, any, AnyAction>; 