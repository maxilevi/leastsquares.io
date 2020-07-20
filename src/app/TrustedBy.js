import React from "react";
//Trusted by over 5 very average small businesses
export default class TrustedBy extends React.Component
{
    render()
    {
        return (<div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">

                </p>
                <div className="bg-white">
                    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg"
                                     alt="Mirage"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg"
                                     alt="StaticKit"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg"
                                     alt="Transistor"/>
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo.svg"
                                     alt="Workcation"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}