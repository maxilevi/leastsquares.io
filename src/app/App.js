import React from 'react';
import Hero from './Hero'
import Features from './Features'
import SectionSeparator from "./SectionSeparator";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import TrustedBy from "./TrustedBy";
import Contact from "./Contact";
import CallToAction from "./CallToAction";

const companyName = 'LeastSquares';
const companyCompleteName = companyName + ', Inc';
const companySlogan = 'We find the solution that best minimizes all your problems.';

const headerSections = [
    {isFirst: true, name: 'Home', href: '/'},
    {name: 'Services', href: '#services'},
    {name: 'Featured Work', href: '#portfolio'},
    {name: 'Blog', href: '/blog'},
    {name: 'Contact', href: '/contact', color: 'indigo'}
];

const featureItems = [
    {isFirst: true, title: 'Full-stack web development', icon:'/assets/icons/desktop.svg', description: 'Leverage modern front-end and back-end frameworks to create a unique experience for your users. We can build together a new webapp from scratch or work on an existing codebase.'},
    {title: 'Mobile & Desktop applications', icon:'/assets/icons/mobile.svg', description: 'Provide the best user experience and accessibility to your customers and users with Android, iPhone and Tablets applications that integrate with your existing systems.'},
    {title: 'Low-level applications', icon:'/assets/icons/lowlevel.svg', description: 'Need blazing fast, memory safe software? Our team can develop in C, C++, NASM and Rust.'},
    {title: 'Game Development', icon:'/assets/icons/game.svg', description: 'We are knowledgeable in Unity, UE4 and Graphics Programming. We can help you create your own engine from scratch or use an existing engine to build the game.'},
    {title: 'Machine Learning', icon:'/assets/icons/machinelearning.svg', description: 'Looking to solve a regression or a classification problem? Our team can leverage it\'s knowledge in Data Science to find a solution to your problem.'},
    {title: 'Process Automation', icon:'/assets/icons/process.svg', description: 'We can help you automate your business processes so you focus on the product and enjoy increased productivity.'},
];

const portfolioWorks = [
    {
        projectName: 'Project Hedra',
        projectImage: '/assets/projecthedra.png',
        projectDescription: 'Project Hedra is an ambitious open-world, low-poly RPG released on Steam. We built the game and the engine from scratch using OpenGL as the graphics API and BulletPhysics for the physics.',
        projectUrl: 'https://store.steampowered.com/app/1009960/Project_Hedra/'
    },
    {
        projectName: 'Hegemony',
        projectImage: '/assets/hegemony.jpg',
        projectDescription: 'Fullstack development for Hegemony\'s website. Improved & enhanced the existing Laravel codebase and added new features such as support for Stripe and PayPal subscriptions and purchases and a SSO integration with Hegemony\'s forum.',
        projectUrl: 'https://hegemony.xyz'
    },
    {
        projectName: 'Farmtale',
        projectImage: '/assets/farmtale.jpg',
        projectDescription: 'Integration of the Steam C++ statistics and achievements API into the game. Worked around the clock together with the Farmtale team to bring the game into a releasable state before it\'s launch on Steam.',
        projectUrl: 'https://store.steampowered.com/app/1231520/Farmtale/'
    },
    {
        projectName: 'Unity BreakableWallsFX',
        projectImage: '/assets/breakablewallsfx.png',
        projectDescription: 'Unity C# plugin that utilizes Delaunay triangulation in order to allow walls to be broken in pieces in realtime. It\'s currently published on the Unity Asset Store.',
        projectUrl: 'https://assetstore.unity.com/packages/tools/particles-effects/breakable-walls-fx-148289'
    },
    {
        projectName: 'isosurface',
        projectImage: '/assets/isosurface.png',
        projectDescription: 'Academic web application that showcases different iso-surface extraction techniques on different volumes.',
        projectUrl: 'https://github.com/maxilevi/isosurface'
    },
    {
        projectName: 'UE4 RuntimeMeshSimplifier',
        projectImage: '/assets/runtimemeshsimplifier.png',
        projectDescription: 'UE4 C++ plugin that leverages existing open-source technologies to allow the user to simplify meshes at runtime without a performance penalty. It\'s currently published on the UE4 Marketplace.',
        projectUrl: 'https://www.unrealengine.com/marketplace/en-US/product/9053712c939f4091a897913c095357aa'
    },
    {
        projectName: 'Unity FluidShaderFX',
        projectImage: '/assets/fluidshaderfx.png',
        projectDescription: 'Unity C# plugin that simulates fluids performantly in realtime, with cross-platform support. It\'s currently published on the Unity Asset Store.',
        projectUrl: 'https://assetstore.unity.com/packages/tools/particles-effects/breakable-walls-fx-148289'
    },
    {
        projectName: 'Unity ToonShaderFX',
        projectImage: '/assets/toonshaderfx.png',
        projectDescription: 'Unity C# shader that utilizes cel shading techniques to achieve a toon effect in realtime, with cross-platform support. It\'s currently published on the Unity Asset Store.',
        projectUrl: 'https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/toon-shader-fx-150115'
    },
    {
        projectName: 'NotQuiteParadise',
        projectImage: '/assets/nqp.png',
        projectDescription: 'Open source 2D roguelike game made in Python. Core tasks were improving the overall quality of the codebase, implementing several core systems and adding missing infrastructure such as unit-testing.',
        projectUrl: 'https://github.com/Snayff/notquiteparadise'
    },
];

//"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
function App() {

  return (
      <div>
          <Hero
              headerSections={headerSections}
              logoSource="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              headerFirstLine="Software development for your"
              headerSecondLineOptions={["business", "idea", "project", "game", "app"]}
              mainDescription="LeastSquares is a professional software development company based in Buenos Aires, Argentina. We help customers focus on the idea while we focus on the execution."
              sideImageSource={"assets/header.svg"}
          />
          <TrustedBy size={10} />
          <Features
              id="services"
              name="Services"
              title="What we do"
              description="We aren't bound to a single industry. We adapt and learn fast which allows us to work exceptionally well in a range of different fields."
              features={featureItems}
          />
          <SectionSeparator size={10} />
          <Portfolio
              id="portfolio"
              title="Featured Work"
              description="We take pride in the work we do. That's why we want to show you some samples of our previous jobs."
              portfolioWorks={portfolioWorks}
          />
          <SectionSeparator size={10} />
          <CallToAction />
          <SectionSeparator size={10} />
          {/*<Testimonials
              id="testimonials"
          />
          <SectionSeparator size={10} />
          */}
          <Footer
              companyName={companyName}
              companyCompleteName={companyCompleteName}
              companySlogan={companySlogan}
          />
      </div>
  );
}

export default App;
