import { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </Fragment>
  );
};

export default App;
