import {AppHeader, AppFooter} from "../components/App";
import React from "react";
import BackgroundWithText from "../components/BackgroundWithText";

export default function Blog()
{
    return (
        <div>
            <AppHeader/>
            <BackgroundWithText
                title="Our Blog"
                description="Coming Soon"
                element={<div/>}
            />
            <AppFooter/>
        </div>
    );
}