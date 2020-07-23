import React from "react";
import BackgroundWithText from "../components/BackgroundWithText";
import BaseApp from "../components/BaseApp";

export default function Blog()
{
    return (
        <BaseApp
            main={
                <BackgroundWithText
                    title="About us"
                    description="Coming Soon"
                    element={<div/>}
                />
            }
        />
    );
}