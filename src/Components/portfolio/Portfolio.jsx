import "./portfolio.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
// import "../assets/person.png"

export default function Portfolio() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor:true,
      backDelay:1000,
      backSpeed:50,
      strings:["Designing...","Developing...","Creating Cool Stuff!!"]
    });
  }, []);
  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
        <div className="imagecontainer">
          <img className="img" src="assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wraper">
          <h2>Hi There I'm</h2>
          <h1>Muhammed Navas</h1>
          <h3>
            I Love <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
