import React from 'react';
import ContactForm from "../components/ContactForm";
import BaseApp from "../components/BaseApp";

export default function Contact()
{
    return (
        <BaseApp
            main={
                <ContactForm/>
            }
        />
    );
}