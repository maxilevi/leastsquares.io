import React from 'react';
import ContactSection from "../components/ContactSection";
import BaseApp from "../components/BaseApp";
import ContactForm from "../components/ContactForm";
import BackgroundWithText from "../components/BackgroundWithText";
import SmallHero from "../components/SmallHero";

export default function Contact()
{
    return (
        <BaseApp
            title="Contact"
            main={
                <div>
                    <SmallHero
                        title="Let’s build something great together"
                        description="Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one."
                        sourceImage="assets/illustrations/contact.svg"
                    />
                    <BackgroundWithText
                        title="Tell us how we can help"
                        description="We will analyze your problem and propose you a solution."
                        element={
                            <ContactForm />
                        }
                    />
                </div>
            }
        />
    );
}