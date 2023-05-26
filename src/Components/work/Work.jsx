import "./work.scss";
import { useInView } from "react-intersection-observer";
import { useEffect} from "react";

export default function Work() {
  const { ref, inView } = useInView({
    threshold:1
  });

  useEffect(() => {
    
    if (inView) {
      
      const html = document.getElementById("html");
      html.classList.add("active");
      const css = document.getElementById("css");
      css.classList.add("active");
      const javascript = document.getElementById("javascript");
      javascript.classList.add("active");
      const python = document.getElementById("python");
      python.classList.add("active");
      const c = document.getElementById("c");
      c.classList.add("active");
      const react = document.getElementById("react");
      react.classList.add("active");
      const tech = document.getElementById("technical");
      tech.classList.add("active");


    } else {
      const html = document.getElementById("html");
      html.classList.remove("active");
      const css = document.getElementById("css");
      css.classList.remove("active");
      const javascript = document.getElementById("javascript");
      javascript.classList.remove("active");
      const python = document.getElementById("python");
      python.classList.remove("active");
      const c = document.getElementById("c");
      c.classList.remove("active");
      const react = document.getElementById("react");
      react.classList.remove("active");
      const tech = document.getElementById("technical");
      tech.classList.remove("active");
    }
  }, [inView]);

  return (
    <div className="work" id="work">
      <div className="left" ref={ref}>
        <div  className="technical" id="technical">
          <br />
          <div className="new">Technical Skills</div>
          <div className="test">React</div>
          <div className="progressbar">
            <div className="inner react" id="react"></div>
          </div>
          <div className="test">HTML</div>

          <div className="progressbar">
            <div className="inner html " id="html"></div>
          </div>
          <div className="test">CSS</div>
          <div className="progressbar">
            <div className="inner css " id="css"></div>
          </div>
          <div className="test">JS</div>
          <div className="progressbar">
            <div className="inner javascript " id="javascript"></div>
          </div>
          <div className="test">Python</div>
          <div className="progressbar">
            <div className="inner python " id="python"></div>
          </div>
          <div className="test">C</div>
          <div className="progressbar">
            <div className="inner c" id="c"></div>
          </div>
          
        </div>
      </div>
      <div className="right">
       
      </div>
    </div>
  );
}
