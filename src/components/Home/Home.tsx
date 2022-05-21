import React from "react";
import { Outlet } from "react-router-dom";

export function Home() {
    return (
        <>
            <header className='header' />
            <nav className='nav' />
            <main className='content'>
                <Outlet/>
            </main>
        </>
    )
}
