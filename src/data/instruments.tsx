

import {  Instrument } from "../redux/storeTypes";



export function loadInstruments(): Promise<Instrument[]> {
  
    let resolveResult = [{
        id: 1,
        name: "BTCUSDT"
    }, {
        id: 2,
        name: "BTCUAH"
    }, {
        id: 4,
        name: "ETHUSDT"
    }, {
        id: 5,
        name: "XRPUAH"
    }];
    const promise1 = new Promise((resolve: (value: Instrument[]) => void, reject) => {
        setTimeout(() => {
            resolve(resolveResult);
        }, 300);
    });

    return promise1
}