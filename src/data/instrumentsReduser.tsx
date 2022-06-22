import { PayloadAction } from "@reduxjs/toolkit";

import { InstrumentsState } from "../redux/storeTypes";


export const SET_INSTRUMENTS = "SET_INSTRUMENTS"

let initialState: InstrumentsState = {
    usedInstruments: []
}
export function instrumentsReduser(state = initialState, action: PayloadAction<InstrumentsState>) {
    switch (action.type) {
        case SET_INSTRUMENTS:
            console.log("yes")
            return {
                ...state,
                ...action.payload
            }       
        default:
            return state
    };
}

