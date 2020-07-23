import React from 'react';
import FullPortfolio from "../components/Portfolio";
import BaseApp from "../components/BaseApp";

export default function Contact()
{
    return (
        <BaseApp
            main={
                <FullPortfolio
                    title="Our Work"
                    description="We take pride in the work we do. That's why we want to show you some samples of our previous jobs."
                />
            }
        />
    );
}