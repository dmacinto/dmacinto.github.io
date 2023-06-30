// app/javascript/components/Hero.jsx

import React from 'react';

const Hero = () => {
    return(
        <section className="text-center bg-light p-5">
        <h1 className="display-4">Hello, I'm Your Name</h1>
        <p className="lead">A brief introduction about you</p>
        </section>
        );
  };


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Hero />,
        document.getElementById('hero')
    )
});

export default Hero;

