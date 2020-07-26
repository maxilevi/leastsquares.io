import BackgroundPattern from "./BackgroundPattern";
import React from "react";

export default class SmallHero extends React.Component
{
    render()
    {
        return (
            <main className="lg:relative">
                <BackgroundPattern />
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                            {this.props.title}
                        </h2>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            {this.props.description}
                        </p>
                    </div>
                </div>
                <div
                    className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                    <img className="absolute inset-0 w-full h-full object-cover small-hero-mask"
                         src={this.props.sourceImage}
                    />
                </div>
            </main>
        );
    }
}