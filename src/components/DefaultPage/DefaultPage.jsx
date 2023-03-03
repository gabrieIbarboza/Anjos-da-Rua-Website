import React from "react";
import { AppMenu } from "../Menu/Menu";
import { AppFooter } from "../Footer/Footer";
import "./DefaultPage.scss";

export default function DefaultPage( {children} ) {
    return (
        <>
            <AppMenu />
                <main>
                    {children}
                </main>
            <AppFooter />
        </>
    )
}
