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
      <div className="w-full h-60 flex flex-row justify-center items-center bg-orange-300">
        <p className="nanum-pen-script-regular whitespace-nowrap text-7xl md:text-7xl hover:animate-bounce">Hello World!</p>
      </div>
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
