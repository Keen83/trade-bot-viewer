import { PayloadAction } from "@reduxjs/toolkit";
import { Instrument, InstrumentsState } from "../redux/storeTypes";
import { SET_INSTRUMENTS } from "./instrumentsReduser";



export function setInstrumentsData(instruments:Instrument[]): PayloadAction<InstrumentsState> {
    return {
        type: SET_INSTRUMENTS,
        payload:  {usedInstruments: instruments},
    }
}


export const instrumentsThunkCreator = (instruments: Instrument[]) => {
    return(dispatch:any) => {
        dispatch(setInstrumentsData(instruments))
    }
}