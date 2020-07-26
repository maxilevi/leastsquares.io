import React from "react";
import BackgroundWithText from "../components/BackgroundWithText";
import BaseApp from "../components/BaseApp";
import SmallHero from "../components/SmallHero";
import BackgroundPattern from "../components/BackgroundPattern";
import SectionSeparator from "../components/SectionSeparator";

export default function Blog()
{
    return (
        <BaseApp
            title="Thank you for reaching out!"
            main={
                <BackgroundWithText
                    title="Thank you for reaching out!"
                    description="We will carefully read your message and contact you soon."
                    element={
                        <div>
                            <SectionSeparator size={4} />
                            <figure>
                                <center>
                                    <img className="w-64 rounded-lg"  src="assets/illustrations/contact_success.svg" />
                                </center>
                            </figure>
                        </div>
                    }
                />
            }
        />
    );
}