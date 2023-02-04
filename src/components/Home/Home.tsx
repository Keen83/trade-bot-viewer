import React, { useEffect } from "react";
import { useStore } from "react-redux";
// import { useStore } from "react-redux";
import { useDispatch } from "react-redux";
import { loadInstruments } from "../../data/instruments";
import { instrumentsThunkCreator } from "../../data/instrumentsAction";
import { AppDispatch } from "../../redux/storeTypes";
import classes from "./home.module.css"



export default function Home() {
    let store = useStore()
    let state: any = store.getState()

    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            let instruments = await loadInstruments()
            dispatch(instrumentsThunkCreator(instruments))
        }
        fetchData();
    }, []);
    // useEffect(async () => {
    //             console.log("useEffect")
    //             }, []);

    // if(!state.auth.isAuthenticated.isAuthenticated) return
    return (
        <div >
            {state.instruments.usedInstruments.map((mi: any, i: any) => {
                return (
                    <div className={classes.instrumentPanel}  >
                        <div>
                        {mi.name}
                        </div>
                        <div className={classes.instrumentPanel}>
                            <div>
                                Last order: 0.000026 * 57682.874857 = 1,499754746282
                            </div>
                            New orders to create:
                            <div >
                                buy: 0.000026 * 57682.874857 = 1,499754746282
                            </div>
                            <div >
                                sell: 0.000026 * 57682.874857 = 1,499754746282
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}
