import React from "react";
import BackgroundWithText from "../components/BackgroundWithText";
import BaseApp from "../components/BaseApp";

export default function Blog()
{
    return (
        <BaseApp
            title="Our Blog"
            main={
                <BackgroundWithText
                    title="Our Blog"
                    description="Coming Soon"
                />
            }
        />
    );
}