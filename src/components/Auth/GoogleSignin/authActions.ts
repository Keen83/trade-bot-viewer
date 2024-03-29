import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../../redux/storeTypes';
import { SET_USER_DATA } from "./authReducers";



export function setAuthUserData(isAuthenticated:boolean, firstName: string,secondName: string,email: string,credential: string): PayloadAction<AuthState> {
    return {
        type: SET_USER_DATA,
        payload:  {isAuthenticated,firstName,secondName,email,credential},
    }
}

export const authThunkCreator = (firstName:string, secondName:string, email:string, credential:string) => {
    return(dispatch:any) => {
        dispatch(setAuthUserData(true, firstName, secondName,email,credential))
    }
}