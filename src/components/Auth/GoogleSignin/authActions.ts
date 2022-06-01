import { PayloadAction } from '@reduxjs/toolkit';
import React from "react";
import { SET_USER_DATA } from "./authRedusers";



export function setAuthUserData(isAuthenticated:boolean): PayloadAction<boolean> {
    return {
        type: SET_USER_DATA,
        payload: isAuthenticated
    }
}

export const authThunkCreator = () => {
    return(dispatch:any) => {
        dispatch(setAuthUserData(true))
    }
}