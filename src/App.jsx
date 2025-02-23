import ButtonGradient from "../public/assets/svg/ButtonGradient";
// import Button from "./Components/Button";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Benifits from "./Components/Benifits";
import Collaboration from "./Components/Collaboration";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
