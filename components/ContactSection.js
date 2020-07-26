import React from 'react'
import BackgroundWithText from "./BackgroundWithText";
import ContactForm from "./ContactForm";

export default class ContactSection extends React.Component
{
    render()
    {
        return (
            <BackgroundWithText
                title="Let’s build something great together"
                description="Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one."
                element={
                    <ContactForm />
                }
            />
        );
    }
}