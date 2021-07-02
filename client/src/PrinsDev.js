import Navbar from "./components/utils/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact.js";
import FooterBtn from "./components/utils/FooterBtn";
import Footer from "./components/Footer.js";
import Background from "./components/utils/Background";
import Socials from "./components/utils/Socials";
import Banner from "./components/utils/Banner";


const PrinsDev = ({
  isModalOpen,
  setIsModalOpen,
  burgerState,
  setBurgerState,
}) => {
  return (
    <>
      <Navbar burgerState={burgerState} setBurgerState={setBurgerState} />
      <Header />
      <Background>
        <About />
        <Banner />
        <Skills />
        <Projects isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Background>
      <Contact />
      <Footer />
      <FooterBtn />
      <Socials />
    </>
  );
};

export default PrinsDev;
