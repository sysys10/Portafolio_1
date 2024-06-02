import "./App.css";
import Nav from "./components/navbar_menu";
import Footer from "./components/footer";
import AboutMe from "./components/Aboutme";
import Skills from "./components/skills";
import Content from "./components/content";
import Background_top from "./components/Background_top";
import Link from "./components/Links";
import Introdution from "./components/introdution";
function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Background_top />
      <div
        id="About"
        className="w-full h-fit flex flex-col items-center mt-5 mb-20"
      >
        <AboutMe />
      </div>
      <div className="w-full h-60 bg-orange-300"></div>
      <div className="w-full flex flex-col lg:flex-row h-fit mt-20">
        <Skills />
        <Content />
        <Link />
      </div>
      <Introdution/>
      <Footer />
    </div>
  );
}

export default App;
