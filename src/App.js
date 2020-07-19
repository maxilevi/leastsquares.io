import React from 'react';
import Hero from './Hero.js'

const headerSections = [
    {isFirst: true, name: 'Home', href: '/#home'},
    {name: 'Services', href: '/#services'},
    {name: 'Portfolio', href: '/#portfolio'},
    {name: 'Testimonials', href: '/#testimonials'},
    {name: 'Contact Us', href: '/#contact', color: 'indigo'}
];

function App() {

  return (
      <Hero
      headerSections={headerSections}
      logoSource="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
      mainDescription="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
      sideImageSource="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      >
      </Hero>
  );
}

export default App;
