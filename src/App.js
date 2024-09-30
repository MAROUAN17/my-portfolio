import React from "react";
import "./App.css"
import Content from "./components/content";
import NavBar from "./components/navbar";
import Capabilities from "./components/capabilities";
import Projects from "./components/projects"
import Footer from "./components/footer";

function App() {
  return (
      <div className="font-poppins">
          <div className="white bg-[right_1px] overflow-hidden bg-main-image bg-no-repeat w-full h-full bg-[length:70%]">
              <NavBar />
              <Content />
              <Capabilities />
          </div>
          <Projects />
          <Footer />
      </div>
  );
}

export default App;
