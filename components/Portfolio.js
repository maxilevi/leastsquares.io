import React from 'react'
import Link from "next/link";

class PortfolioWork extends React.Component
{
    render()
    {
        return (<div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover"
                     src={ this.props.projectImage }
                     alt=""/>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <a href={this.props.projectUrl} className="block">
                        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                            { this.props.projectName }
                        </h3>
                        <p className="mt-3 text-base leading-6 text-gray-500">
                            { this.props.projectDescription }
                        </p>
                    </a>
                </div>
            </div>
        </div>);
    }
}


export default class Portfolio extends React.Component
{
    render()
    {
        const works = this.props.portfolioWorks.map((work) =>
            <PortfolioWork {...work} />
        );
        return (
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" id={this.props.id}>
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                            {this.props.title}
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                            {this.props.description}
                        </p>
                    </div>
                    <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                        { works }
                    </div>
                </div>
                <div className="mt-12">
                    <div className="sm:col-span-2 relative max-w-xl mx-auto">
                        <Link href="/portfolio">
                            <a
                               className="w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                View Entire Portfolio
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}