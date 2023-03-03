import { useState, useRef } from "react";
import "../assets/css/Scenery.css";
import cloud_left from "../assets/images/cloud_left.png";
import cloud_right from "../assets/images/cloud_right.png";
import moon from "../assets/images/moon.png";
import water from "../assets/images/water.png";
import stars from "../assets/images/stars.png";
import mountains_behind from "../assets/images/mountains_behind.png";
import mountains_front from "../assets/images/mountains_front.png";

function Scenery() {
  const [cloudMarginleft, setcloudMarginleft] = useState(0);
  const [cloudMarginright, setcloudMarginright] = useState(0);
  const [cloudDown, setcloudDown] = useState(0);
  const [moonDown, setmoonDown] = useState(0);
  const [waterSpread, setWaterSpread] = useState(0);
  const [starsRight, setStarsRight] = useState(0);
  const [mountainsDown, setMountainsDown] = useState(0);

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    setcloudMarginleft(value * 2.25);
    setcloudMarginright(value * -2.25);
    setcloudDown(value * 1.5);
    setmoonDown(value * 0.75);
    setMountainsDown(value * -0.15);
    setStarsRight(value * -0.5);
    setWaterSpread(value * -0.15);
  });
  const cloud_1 = useRef(null);
  const cloud_2 = useRef(null);
  const downLeftStyle = {
    marginLeft: `${cloudMarginleft}px`,
    top: `${cloudDown}px`,
  };
  const downRightStyle = {
    marginLeft: `${cloudMarginright}px`,
    top: `${cloudDown}px`,
  };
  const downMoonStyle = {
    top: `${moonDown}px`,
  };
  const rightStarsStyle = {
    marginLeft: `${starsRight}px`,
  };
  const downMountainStyle = {
    top: `${mountainsDown}px`,
  };
  const downWaterStyle = {
    top: `${waterSpread + 275}px`,
  };

  return (
    <div>
      <section className="img_section">
        <img
          style={{ ...downLeftStyle }}
          src={cloud_left}
          ref={cloud_1}
          id="cloud_left"
          alt="cloud_left"
        />
        <img
          style={{ ...downRightStyle }}
          src={cloud_right}
          ref={cloud_2}
          id="cloud_right"
          alt="cloud_right"
        />
        <img
          style={{ ...rightStarsStyle }}
          src={stars}
          id="stars"
          alt="stars"
        />
        <img style={{ ...downMoonStyle }} src={moon} id="moon" alt="moon" />
        <img style={{ ...downWaterStyle }} src={water} id="water" alt="water" />
        <img
          style={{ ...downMountainStyle }}
          src={mountains_behind}
          id="mountains_behind"
          alt="mountains_behind"
        />
        <img src={mountains_front} id="mountains_front" alt="mountains_front" />
      </section>
      <div className="sec" id="sec">
        <h2>Scrolling effect</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          reprehenderit libero deleniti non est laboriosam. Perferendis repellat
          adipisci distinctio earum et. In a optio, inventore vel laboriosam
          eveniet molestiae repellendus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          reprehenderit libero deleniti non est laboriosam. Perferendis repellat
          adipisci distinctio earum et. In a optio, inventore vel laboriosam
          eveniet molestiae repellendus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          reprehenderit libero deleniti non est laboriosam. Perferendis repellat
          adipisci distinctio earum et. In a optio, inventore vel laboriosam
          eveniet molestiae repellendus.<br></br>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Illo reprehenderit libero deleniti non
          est laboriosam. Perferendis repellat adipisci distinctio earum et. In
          a optio, inventore vel laboriosam eveniet molestiae repellendus.
          <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Illo reprehenderit libero deleniti non est laboriosam. Perferendis
          repellat adipisci distinctio earum et. In a optio, inventore vel
          laboriosam eveniet molestiae repellendus.
        </p>
      </div>
      <div className="sec" id="sec">
        <h2>Scrolling effect</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          reprehenderit libero deleniti non est laboriosam. Perferendis repellat
          adipisci distinctio earum et. In a optio, inventore vel laboriosam
          eveniet molestiae repellendus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          reprehenderit libero deleniti non est laboriosam. Perferendis repellat
          adipisci distinctio earum et. In a optio, inventore vel laboriosam
          eveniet molestiae repellendus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          reprehenderit libero deleniti non est laboriosam. Perferendis repellat
          adipisci distinctio earum et. In a optio, inventore vel laboriosam
          eveniet molestiae repellendus.<br></br>Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Illo reprehenderit libero deleniti non
          est laboriosam. Perferendis repellat adipisci distinctio earum et. In
          a optio, inventore vel laboriosam eveniet molestiae repellendus.
          <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Illo reprehenderit libero deleniti non est laboriosam. Perferendis
          repellat adipisci distinctio earum et. In a optio, inventore vel
          laboriosam eveniet molestiae repellendus.
        </p>
      </div>
    </div>
  );
}

export default Scenery;
