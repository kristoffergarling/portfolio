import { Fragment } from "react";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Projects />
      <TechStack />
    </Fragment>
  );
};

export default App;
