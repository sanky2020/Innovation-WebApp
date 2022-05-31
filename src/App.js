import SectionDesc from "./components/SectionDesc";
import Header from "./header/Header";
import Button from "./components/Button";
import { AiOutlineRight } from "react-icons/ai";
import Blackbox from "./components/Blackbox";

import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Header />
      <section className="challengingLimitsContainer">
      <div className='challengingLimits'>
        <SectionDesc>
          <p>Challenging limits every day</p>
          <h2>
            Scale. Innovate.
            <br />
            Impact the Future.
          </h2>
          <p>
            We collaborate with start-ups and external agencies to address
            <br />
            challenges in the steel value chain and proximate sectors.
          </p>
          <Button text="Apply Now" icon={<AiOutlineRight />} />
        </SectionDesc>
        </div>
        <Blackbox />
      </section>
      <section className="revolution">
        <SectionDesc >
          <p>Lead the Revolution</p>
          <h2>
            Your vision. Our network. <br />
            Let’s build a legacy together.
          </h2>
          
          <Button text="Learn about us" icon={<AiOutlineRight />} />
        </SectionDesc>
      </section>
        <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
