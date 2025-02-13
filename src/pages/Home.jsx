import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import About from "./About";
import Contact from "./Contact";
import Features from "./Features";

const Home = () => {
  return (
    <>
      <div>
        <section id="home">
          <HeroPage />
        </section>
        <section id="fetures">
          <Features/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </div>
      <Footer/>
    </>
  );
};
export default Home;
