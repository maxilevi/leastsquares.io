import React from "react";
import SectionSeparator from "./SectionSeparator";
import BackgroundPattern from "./BackgroundPattern";


export default function BackgroundWithText(props)
{
    const element = props.element ?? <SectionSeparator size={15} />
    const padding = props.padding ?? 16;
    return (
        <div className={"bg-white py-" + padding + " px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-" + padding}>
            <div className="relative max-w-xl mx-auto">
                {!props.hidePattern && <BackgroundPattern /> }
                <div className="text-center">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        {props.title}
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        {props.description}
                    </p>
                </div>
                {element}
            </div>
        </div>
    );
}