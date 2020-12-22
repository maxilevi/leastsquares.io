import React from 'react'
import Link from "next/link";
import ContactSection from "./ContactSection";
import SectionSeparator from "./SectionSeparator";
import BackgroundPattern from "./BackgroundPattern";
import SmallHero from "./SmallHero";
import InterestedInLearningMore from "./InterestedInLearningMore";


const featuredPortfolioWorks = [
    {
        projectName: 'Project Hedra',
        projectImage: '/assets/projecthedra.jpg',
        projectDescription: 'Project Hedra is an ambitious open-world, low-poly RPG released on Steam. We built the game and the engine from scratch using OpenGL as the graphics API and BulletPhysics for the physics.',
        projectUrl: 'https://store.steampowered.com/app/1009960/Project_Hedra/'
    },
    {
        projectName: 'Mercado Libre Synchronizer',
        projectImage: '/assets/meli-sync.jpg',
        projectDescription: 'Mercado Libre Synchronizer is a Shopify app that helps maintain your store in sync with your Mercado Libre listings. Built using NodeJS and React, currently deployed as a SaaS app in the Shopify app store.',
        projectUrl: 'https://apps.shopify.com/meli-sync'
    },
    {
        projectName: 'Farmtale',
        projectImage: '/assets/farmtale.jpg',
        projectDescription: 'Integration of the Steam C++ statistics and achievements API into the game. Worked around the clock together with the Farmtale team to bring the game into a releasable state before it\'s launch on Steam.',
        projectUrl: 'https://store.steampowered.com/app/1231520/Farmtale/'
    },
    {
        projectName: 'Hegemony',
        projectImage: '/assets/hegemony.jpg',
        projectDescription: 'Fullstack development for Hegemony\'s website. Improved & enhanced the existing Laravel codebase and added new features such as support for Stripe and PayPal subscriptions and purchases and a SSO integration with Hegemony\'s forum.',
        projectUrl: 'https://hegemony.xyz'
    },
    {
        projectName: 'Unity BreakableWallsFX',
        projectImage: '/assets/breakablewallsfx.jpg',
        projectDescription: 'Unity C# plugin that utilizes Delaunay triangulation in order to allow walls to be broken in pieces in realtime. It\'s currently published on the Unity Asset Store.',
        projectUrl: 'https://assetstore.unity.com/packages/tools/particles-effects/breakable-walls-fx-148289'
    },
    /*
    {
        projectName: 'isosurface',
        projectImage: '/assets/isosurface.jpg',
        projectDescription: 'Academic web application that showcases different iso-surface extraction techniques on different volumes.',
        projectUrl: 'https://github.com/maxilevi/isosurface'
    },
     */
    {
        projectName: 'UE4 RuntimeMeshSimplifier',
        projectImage: '/assets/runtimemeshsimplifier.jpg',
        projectDescription: 'UE4 C++ plugin that leverages existing open-source technologies to allow the user to simplify meshes at runtime without a performance penalty. It\'s currently published on the UE4 Marketplace.',
        projectUrl: 'https://www.unrealengine.com/marketplace/en-US/product/9053712c939f4091a897913c095357aa'
    },
];

const extraPortfolioWorks = [
    {
        projectName: 'Unity FluidShaderFX',
        projectImage: '/assets/fluidshaderfx.jpg',
        projectDescription: 'Unity C# plugin that simulates fluids performantly in realtime, with cross-platform support. It\'s currently published on the Unity Asset Store.',
        projectUrl: 'https://assetstore.unity.com/packages/tools/particles-effects/breakable-walls-fx-148289'
    },
    {
        projectName: 'Unity ToonShaderFX',
        projectImage: '/assets/toonshaderfx.jpg',
        projectDescription: 'Unity C# shader that utilizes cel shading techniques to achieve a toon effect in realtime, with cross-platform support. It\'s currently published on the Unity Asset Store.',
        projectUrl: 'https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/toon-shader-fx-150115'
    },
    {
        projectName: 'NotQuiteParadise',
        projectImage: '/assets/nqp.jpg',
        projectDescription: 'Open source 2D roguelike game made in Python. Core tasks were improving the overall quality of the codebase, implementing several core systems and adding missing infrastructure such as unit-testing.',
        projectUrl: 'https://github.com/Snayff/notquiteparadise'
    }
];

const fullPortfolioWorks = featuredPortfolioWorks.concat(extraPortfolioWorks);


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

export class ViewEntirePortfolioButton extends React.Component
{
    render() {
        return (
            <div className="mt-12">
                <div className="sm:col-span-2 relative max-w-xl mx-auto">
                    <a href={this.props.url}
                        className="w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                        {this.props.text}
                    </a>
                </div>
            </div>
        );
    }
}

export class PortfolioText extends React.Component
{
    render() {
        return (
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        {this.props.title}
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                        {this.props.description}
                    </p>
                </div>
            </div>
        );
    }
}


export class FeaturedPortfolio extends React.Component
{

    render()
    {
        return (
            <Portfolio
                portfolioWorks={featuredPortfolioWorks}
                bottomElement={<ViewEntirePortfolioButton text={"See our work"} url={'/portfolio'} />}
                hidePatterns={true}
                {...this.props}
            />
        );
    }
}

export default class FullPortfolio extends React.Component
{

    render()
    {
        var element = <div>
            <SectionSeparator size={4} />
            <InterestedInLearningMore />
        </div>

        return (
            <>
            <SmallHero {...this.props} sourceImage="assets/illustrations/portfolio.svg" />
            <Portfolio
                portfolioWorks={fullPortfolioWorks}
                bottomElement={element}
                {...this.props}
                title="We’re as passionate about creating as you are."
                description="We have produced amazing websites, games, applications, tools, chatbots and much more. Here is some of our best work."
            />
            </>
        );
    }
}


class Portfolio extends React.Component
{

    render()
    {
        const works = this.props.portfolioWorks.map((work) =>
            <PortfolioWork {...work} />
        );
        return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" id={this.props.id}>
                <div className="absolute bg-white inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <PortfolioText title={this.props.title} description={this.props.description} />
                <div className="relative max-w-7xl mx-auto">
                    <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                        { works }
                    </div>
                    {!this.props.hidePatterns && <BackgroundPattern /> }
                </div>
                { this.props.bottomElement }
            </div>
        );
    }
}