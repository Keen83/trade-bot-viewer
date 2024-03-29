import { PayloadAction } from "@reduxjs/toolkit"
import { AuthState } from "../../../redux/storeTypes"


export const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    firstName: undefined,
    secondName: undefined,
    email: undefined,
    credential:undefined,
    isAuthenticated: false,
}

export function authReducer(state = initialState, action: PayloadAction<AuthState>) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                firstName: action.payload,
                secondName: action.payload,
                email: action.payload,
                isAuthenticated: action.payload,
                credential: action.payload,
            }       
        default:
            return state
    };
}

