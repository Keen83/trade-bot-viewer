import { PayloadAction } from '@reduxjs/toolkit';
import React from "react";
import { AuthState } from '../../../redux/storeTypes';
import { SET_USER_DATA } from "./authReducers";



export function setAuthUserData(isAuthenticated:boolean, firstName: string,secondName: string,email: string): PayloadAction<AuthState> {
    return {
        type: SET_USER_DATA,
        payload:  {isAuthenticated,firstName,secondName,email},
    }
}

export const authThunkCreator = (firstName:string, secondName:string, email:string) => {
    return(dispatch:any) => {
        dispatch(setAuthUserData(true, firstName, secondName,email))
    }
}