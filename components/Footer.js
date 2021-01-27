import React from 'react'
import Link from "next/link";

function FooterLink(props)
{
    return (
        <li className="mt-4">
            <a href={props.href} className="text-base leading-6 text-gray-500 hover:text-gray-900">
                {props.text}
            </a>
        </li>
    );
}


export default class Footer extends React.Component
{
    render()
    {
        return (
        <div className="bg-gray-800">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="xl:col-span-2">
                        <img className="h-10" src={this.props.logoSource}
                             alt={this.props.companyName}/>
                            <p className="mt-8 text-gray-500 text-base leading-6">
                                {this.props.companySlogan}
                            </p>
                            <div className="mt-8 flex">
                                <a href="https://github.com/leastsquares" className="ml-6 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </a>
                                <a href="mailto:hello@leastsquares.io" className="ml-6 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Email</span>
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-1">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Company
                                </h4>
                                <ul className="mt-4">
                                    <FooterLink href="/services" text="What we do" />
                                    <FooterLink href="/why-us" text="Why us" />
                                    <FooterLink href="/about" text="About" />
                                    <FooterLink href="/contact" text="Contact" />
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Legal
                                </h4>
                                <ul className="mt-4">
                                    <FooterLink href="/privacy" text="Privacy" />
                                    <FooterLink href="/terms" text="Terms" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base leading-6 text-gray-400 xl:text-center">
                        &copy; 2021 {this.props.companyCompleteName}. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
    }
}