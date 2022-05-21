import React from "react";
import { Outlet } from "react-router-dom";

export function Instrument() {
    return(
        <div>
            instrument
            <Outlet/>
        </div>
    )
}
