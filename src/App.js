import React from "react";
import Navbar from "./components/Navbar";
import './App.css'
import { Switch, Route } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
      
      <h1>FnAxiom Home Page</h1>
        <p>Path to financially independent</p>
       
      
       
      </div>

    
  <div className="row" style={{  display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 , }}>
    <div className="col">
    <h1>Column 1</h1>
    <h4>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
React is used to create modular user interfaces and promotes the development.</h4>
    
    <button className="button button1">  Button 1</button>
    </div>
    <div className="col"><h1>Column 2</h1>
    <h4>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
React is used to create modular user interfaces and promotes the development .</h4>
    
    <button className="button button1" >Button 1</button>
    </div>
    <div className="col"><h1>Column 3</h1>
    <h4>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
React is used to create modular user interfaces and promotes the development.</h4>
   
    <button className="button button1" >Button 1</button>
    </div>
    <div className="col"><h1>Column 4</h1>
    <h4>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
React is used to create modular user interfaces and promotes the development.</h4>
   
    <button className="button button1" >Button 1</button>
    </div>
  </div>
   
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      
        <h1>FnAxiom About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      
        <h1>FnAxiom Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
     
        <h1>FnAxiom Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
