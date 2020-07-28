import React from "react";
import {FeatureItem} from "./Features";
import BackgroundPattern from "./BackgroundPattern";


export function RightFeatureContent(props)
{
    const features = (props.features ?? []).map((feature) =>
        <FeatureItem {...feature} />
    );

    return (
        <div className="relative mt-8 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-32 lg:items-center bg-gray-100 p-12">
            <div className="mt-4 -mx-4 relative lg:col-start-1">
                <img className="relative mx-auto" width="490"
                     src={props.srcImage} alt="" />
            </div>
            <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                    {props.title}
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                    {props.description}
                </p>

                <ul className="mt-10">
                    {features}
                </ul>
            </div>
        </div>
    );
}

export default function LeftFeatureContent(props)
{
    const features = (props.features ?? []).map((feature) =>
        <FeatureItem {...feature} />
    );

    return (
        <div className="relative mt-8 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-32 lg:items-center p-12">
            <div className="lg:col-start-1">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                    {props.title}
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                    {props.description}
                </p>

                <ul className="mt-10">
                    {features}
                </ul>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0">
                <img className="relative mx-auto" width="490"
                     src={props.srcImage} alt="" />
            </div>
        </div>
    );
}
