import React from 'react';
import Hero from './Hero'
import Features from './Features'
import SectionSeparator from "./SectionSeparator";
import {FeaturedPortfolio} from "./Portfolio";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import TrustedBy from "./TrustedBy";
import ContactSection from "./ContactSection";
import CallToAction from "./CallToAction";
import Header from "./Header";
import Head from "next/head";

const companyName = 'LeastSquares';
const companyCompleteName = companyName + ', Inc';
const companySlogan = 'We find the solution that best minimizes all your problems.';
const logoSourceVertical = "/assets/logo_vertical.svg";//"https://tailwindui.com/img/logos/workflow-mark-on-white.svg";
const logoSourceHorizontal = "/assets/logo_white_horizontal.svg";

const headerSections = [
    {isFirst: true, name: 'What we do', href: '/services'},
    {name: 'Our work', href: '/portfolio'},
    {name: 'Why us', href: '/why-us'},
    //{name: 'Blog', href: '/blog'},
    {name: 'Contact', href: '/contact', color: 'indigo'}
];

const featureItems = [
    {id:'full-stack-service', isFirst: true, title: 'Full-stack web development', icon:'/assets/icons/desktop.svg', description: 'Leverage modern front-end and back-end frameworks to create a unique experience for your users. We can build together a new webapp from scratch or work on an existing codebase.'},
    {id:'desktop-service', title: 'Mobile & Desktop applications', icon:'/assets/icons/mobile.svg', description: 'Provide the best user experience and accessibility to your customers and users with Android, iPhone and Tablets applications that integrate with your existing systems.'},
    {id:'low-level-service', title: 'Low-level applications', icon:'/assets/icons/lowlevel.svg', description: 'Need blazing fast, memory safe software? Our team can develop in C, C++, NASM and Rust.'},
    {id:'game-service', title: 'Game Development', icon:'/assets/icons/game.svg', description: 'We are knowledgeable in Unity, UE4 and Graphics Programming. We can help you create your own engine from scratch or use an existing engine to build the game.'},
    {id:'ml-service', title: 'Machine Learning', icon:'/assets/icons/machinelearning.svg', description: 'Looking to solve a regression or a classification problem? Our team can leverage it\'s knowledge in Data Science to find a solution to your problem.'},
    {id:'process-service', title: 'Process Automation', icon:'/assets/icons/process.svg', description: 'We can help you automate your business processes so you focus on the product and enjoy increased productivity.'},
];

export function AppFooter()
{
    return <Footer
        logoSource={logoSourceHorizontal}
        services={featureItems}
        companyName={companyName}
        companyCompleteName={companyCompleteName}
        companySlogan={companySlogan}
    />;
}

function AppHead(props)
{
    return <Head>
        <title>{props.title}</title>
        <link rel="icon" href="favicon.svg" />
        <meta charSet="utf-8" />
        <meta name="description" content={props.description ?? companySlogan} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>;
}

export function FullAppHeader(props)
{
    return(
        <div>
            <AppHead {...props} />
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-screen-xl mx-auto">
                    <AppHeader {...props} content={<></>} />
                </div>
                {props.content}
            </div>
        </div>
    );
}

export function AppHeader(props)
{
    var sections = headerSections.slice();
    for (var i = 0; i < sections.length; ++i)
    {
        sections[i].color = 'gray';
        if(props.title === sections[i].name)
            sections[i].color = 'indigo';
    }

    return <Header
        onMenuStateChange={props.onMenuStateChange}
        headerSections={headerSections}
        logoSource={logoSourceVertical}
        content={props.content}
    />;
}

export default class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {isMobileMenuOpen: false};
        this.onMenuStateChanged = this.onMenuStateChanged.bind(this);
    }

    onMenuStateChanged(newState)
    {
        this.setState({isMobileMenuOpen: newState})
    }

    render()
    {
        return (
            <div>
                <AppHead
                    title={companyName + ": " + companySlogan}
                />
                <Hero
                    headerElement={<AppHeader onMenuStateChange={this.onMenuStateChanged} />}
                    isMobileMenuOpen={this.state.isMobileMenuOpen}
                    headerFirstLine="Software development for your"
                    headerSecondLineOptions={["business", "idea", "project", "game", "app"]}
                    mainDescription="LeastSquares is a professional software development company based in Buenos Aires, Argentina. We help customers focus on the idea while we focus on the execution."
                    sideImageSource={"assets/illustrations/header.svg"}
                />
                <TrustedBy/>
                <Features
                    id="services"
                    name="Services"
                    title="What we do"
                    description="We aren't bound to a single industry. We adapt and learn fast which allows us to work exceptionally well in a range of different fields."
                    features={featureItems}
                />
                <SectionSeparator />
                <FeaturedPortfolio
                    id="portfolio"
                    title="Featured Work"
                    description="We take pride in the work we do. That's why we want to show you some samples of our previous jobs."
                />
                <SectionSeparator />
                <CallToAction/>
                <SectionSeparator size={2} />
                {/*<Testimonials
              id="testimonials"
          />
          <SectionSeparator size={10} />
          */}
                <AppFooter/>
            </div>
        );
    }
}

