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

class MobileMenu extends React.Component
{
    render()
    {
        const mobileSections = this.props.headerSections.map((section) =>
            <MobileHeaderSection {...section} />
        );

        return (
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
                                        onClick={this.props.onClose}
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                        aria-label="Close menu">
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
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
        );
    }
}


export default class Header extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {isMobileMenuOpen: false};
        this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
        this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    }

    handleMobileMenuOpen(e)
    {
        this.setState({isMobileMenuOpen: true});
        this.props.onMenuStateChange(true);
    }

    handleMobileMenuClose(e)
    {
        this.setState({isMobileMenuOpen: false});
        this.props.onMenuStateChange(false);
    }

    render()
    {
        const desktopSections = this.props.headerSections.map((section) =>
            <DesktopHeaderSection {...section} />
        );
        return (
            <div>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="/" aria-label="Home">
                                    <img className="h-10 w-auto"
                                         src={this.props.logoSource}
                                         alt="Logo"/>
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <button type="button"
                                            onClick={this.handleMobileMenuOpen}
                                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                            id="main-menu" aria-label="Main menu" aria-haspopup="true">
                                        <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
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

                {this.state.isMobileMenuOpen && <MobileMenu onClose={this.handleMobileMenuClose} {...this.props} />}
            </div>
        );
    }
}