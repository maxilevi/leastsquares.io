import React from 'react';
import {AppHeader, AppFooter} from "../components/App";
import FullPortfolio from "../components/Portfolio";

export default function Contact()
{
    return (
        <div>
            <AppHeader />
            <FullPortfolio
                title="Our Work"
                description="We take pride in the work we do. That's why we want to show you some samples of our previous jobs."
            />
            <AppFooter />
        </div>
    );
}