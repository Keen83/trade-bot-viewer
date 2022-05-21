import React from "react";
import { Outlet } from "react-router-dom";

export function Instruments() {
    return(
        <div>
            Instruments
            <Outlet/>
        </div>
    )
}
