import React from "react";
import {FeatureItem} from "./Features";

function BaseFeatureContent(props)
{
    const features = (props.features ?? []).map((feature) =>
        <FeatureItem {...feature} />
    );

    return (
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className={props.columnType}>
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
                <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                     width="784" height="404" fill="none" viewBox="0 0 784 404">
                    <defs>
                        <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20"
                                 height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                                  fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"/>
                </svg>
                <img className="relative mx-auto" width="490"
                     src={props.srcImage} alt="" />
            </div>
        </div>
    );
}


export function RightFeatureContent(props)
{
    return (
        <BaseFeatureContent
            {...props}
            columnType="relative"
        />
    );
}

export default function LeftFeatureContent(props)
{
    return (
        <BaseFeatureContent
            {...props}
            columnType="lg:col-start-2"
        />
    );
}
