import React from "react";
import BackgroundWithText from "../components/BackgroundWithText";
import BaseApp from "../components/BaseApp";

export default function Blog()
{
    return (
        <BaseApp
            main={
                <BackgroundWithText
                    title="Thank you for reaching out!"
                    description="We will carefully read your message and contact you soon."
                />
            }
        />
    );
}