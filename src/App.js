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
          <div className="lg:bg-[right_1px] md:bg-[center_1px] overflow-hidden bg-main-image bg-no-repeat w-full h-full md:bg-[length:60%] xl:bg-[length:40%]">
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
