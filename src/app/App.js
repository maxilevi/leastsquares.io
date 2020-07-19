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
    {isFirst: true, name: 'Home', href: '#home'},
    {name: 'Services', href: '#services'},
    {name: 'Featured Work', href: '#portfolio'},
    {name: 'Why Us', href: '#testimonials'},
    {name: 'Contact', href: '#contact', color: 'indigo'}
];

const featureItems = [
    {isFirst: true, title: 'Full-stack web development', description: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'},
    {title: 'Mobile applications', description: 'Provide the best user experience and accessibility to your customers and users with Android, iPhone and Tablets applications that integrate with your existing systems.'},
    {title: 'Game Development', description: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'},
    {title: 'Corporate tools', description: 'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'}
];

const portfolioWorks = [
    {
        projectName: 'Project Hedra',
        projectImage: '/assets/projecthedra.png',
        projectDescription: 'Project Hedra is an ambitious open-world, low-poly RPG. Choose your class, explore endless procedurally generated worlds, unlock different skills and complete quests.',
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
];


function App() {

  return (
      <div>
          <Hero
              headerSections={headerSections}
              logoSource="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              headerFirstLine="Software for your"
              headerSecondLineOptions={["business", "idea", "project", "game", "app"]}
              mainDescription="LeastSquares is a professional software development company based in Buenos Aires, Argentina. We help customers focus on the idea while we focus on the execution."
              sideImageSource="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          />
          <TrustedBy size={10} />
          <Features
              id="services"
              name="Services"
              title="What we do"
              description="We aren't bound to a single industry. We adapt and learn fast which allows out team to different tasks."
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
