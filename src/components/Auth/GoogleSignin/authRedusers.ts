import { PayloadAction } from "@reduxjs/toolkit"
import React from "react"
import { Action, AnyAction } from "redux"


export const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    isAuthenticated: false
}

export function authReducer(state = initialState, action: PayloadAction<boolean>) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuthenticated: action.payload,
            }       
        default:
            return state
    };
}

