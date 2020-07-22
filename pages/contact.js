import React from 'react';
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import {AppHeader, AppFooter} from "../components/App";

export default function Contact()
{
    return (
        <div>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-screen-xl mx-auto">
                    <AppHeader />
                </div>
            </div>
            <ContactForm/>
            <AppFooter />
        </div>
    );
}