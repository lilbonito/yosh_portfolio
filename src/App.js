import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import Logo from "./Logo";
import Resume from "./Resume";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          {/* logo goes here */}
          <div className="sub-nav">
            <Link to="/" className="item">
              Work
            </Link>
            <Link to="/contact" className="item">
              Contact
            </Link>

            <Logo />
            
            <Link to="/about" className="item">
              About
            </Link>
            <Resume className="item" />

          </div>
          <Route exact path="/" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
