import React from "react";

export default class ContactForm extends React.Component
{
    render()
    {
        return (
            <div className="mt-12">
                <form name="contact2" action="/success" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Your Role: <select name="role[]" multiple>
                            <option value="leader">Leader</option>
                            <option value="follower">Follower</option>
                        </select></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
                <form name="contact" action="/success" method="POST" data-netlify="true"
                      enctype="application/x-www-form-urlencoded"
                      className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First
                            name</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input id="first_name" name="first_name" required="true"
                                   className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last
                            name</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input id="last_name" name="last_name" required="true"
                                   className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company"
                               className="block text-sm font-medium leading-5 text-gray-700">Company (Optional)</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input id="company"  name="company"
                                   className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email"
                               className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input id="email" type="email" required="true" name="email"
                                   className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block text-sm font-medium leading-5 text-gray-700">Message</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea id="message" required="true" rows="4" name="message"
                                              className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                                <span className="w-full inline-flex rounded-md shadow-sm">
                                    <button type="submit"
                                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                      Let's talk
                                    </button>
                                </span>
                    </div>
                </form>
            </div>
        );
    }
}