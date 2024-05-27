import "./App.css";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import BackgroundEffect from "./Components/BackgroundEffect";
function App() {
  return (
    <div>
      <BackgroundEffect />
      <ContainerWrapper>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Faq />
        <Footer />
      </ContainerWrapper>
    </div>
  );
}
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 700px) {
    gap: 40px;
  }
`;

export default App;
