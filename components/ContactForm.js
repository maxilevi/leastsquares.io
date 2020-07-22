import React from 'react'
import BackgroundWithText from "./BackgroundWithText";

export default class ContactForm extends React.Component
{
    render()
    {
        return (
            <BackgroundWithText
                title="Let’s build something great together"
                description="Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one."
                element={
                    <div className="mt-12">
                        <form action="/contactSuccess" method="POST" netlify-data="true" className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First
                                    name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="first_name"
                                           className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last
                                    name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="last_name"
                                           className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company"
                                       className="block text-sm font-medium leading-5 text-gray-700">Company</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="company"
                                           className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email"
                                       className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" type="email"
                                           className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block text-sm font-medium leading-5 text-gray-700">Message</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea id="message" rows="4"
                                              className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <span className="w-full inline-flex rounded-md shadow-sm">
                                    <button type="button"
                                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                      Let's talk
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                }
            />
        );
    }
}