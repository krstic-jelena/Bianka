import React from "react";
import { Fade } from "react-slideshow-image";
import slide_2 from "./images/slide_2.jpg";
import slide_3 from "./images/slide_3.jpg";
import slide_4 from "./images/slide_4.jpg";

const fadeImages = [slide_2, slide_3, slide_4];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
};

const Home = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} />
        </div>
        <h2>Uvijek blizu vas</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
        <h2>Mljekara Bianka</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
        <h2>Sasvim prirodno!</h2>
      </div>
    </Fade>
  );
};
export default Home;
