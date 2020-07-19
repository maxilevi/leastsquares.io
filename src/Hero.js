import * as React from "react";

class HeaderSection  extends React.Component
{
    getJSX(isFirst, color, href, name){}

    render() {
        const color = this.props.color ?? 'gray';
        const isFirst = this.props.isFirst ?? false;
        return this.getJSX(isFirst, color, this.props.href, this.props.name);
    }
}

class DesktopHeaderSection extends HeaderSection
{

    getJSX(isFirst, color, href, name)
    {
        return <a href={this.props.href}
           className={(isFirst ? '' : 'ml-8') + " font-medium text-" + color + "-600 hover:text-" + color + "-900 transition duration-150 ease-in-out"}>{this.props.name}
        </a>;
    }
}

class MobileHeaderSection extends HeaderSection
{
    getJSX(isFirst, color, href, name)
    {
        return <a href={href}
                  className={"block px-3 py-2 rounded-md text-base font-medium text--700 hover:text-" + color + "-900 hover:bg-" + color + "-50 focus:outline-none focus:text-" + color + "-900 focus:bg-" + color + "-50 transition duration-150 ease-in-out"} role="menuitem">{name}
        </a>;
    }
}


export default class Hero extends React.Component
{

    constructor(props) {
        super(props);
    }

    render() {
        const desktopSections = this.props.headerSections.map((section) =>
            <DesktopHeaderSection {...section} />
        );
        const mobileSections = this.props.headerSections.map((section) =>
            <MobileHeaderSection {...section} />
        );

        return (
            <div className="relative bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100"/>
                    </svg>

                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="#" aria-label="Home">
                                        <img className="h-8 w-auto sm:h-10"
                                             src={this.props.logoSource}
                                             alt="Logo"></img>
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <button type="button"
                                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                                id="main-menu" aria-label="Main menu" aria-haspopup="true">
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M4 6h16M4 12h16M4 18h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4">
                                { desktopSections }
                            </div>
                        </nav>
                    </div>

                    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-md">
                            <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu"
                                 aria-orientation="vertical" aria-labelledby="main-menu">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto"
                                             src={this.props.logoSource} alt="">
                                        </img>
                                    </div>
                                    <div className="-mr-2">
                                        <button type="button"
                                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                                aria-label="Close menu">
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    { mobileSections }
                                </div>
                            </div>
                        </div>
                    </div>

                    <main
                        className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                High quality software development for your
                                <br className="xl:hidden"></br>
                                    <span className="text-indigo-600">business</span>
                            </h2>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                { this.props.mainDescription }
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="#portfolio"
                                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        View Portfolio
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#contact"
                                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                     src={this.props.sideImageSource}
                     alt=""></img>
            </div>
        </div>
    );
    }
}