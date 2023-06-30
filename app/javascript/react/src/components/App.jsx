
import React from 'react';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

const App = () => (
  <div>
    <Hero />
    <About />
    <Projects />
    <Welcome />
  </div>
);

export default App;