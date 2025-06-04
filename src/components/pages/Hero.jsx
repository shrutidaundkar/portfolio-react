import "./Hero.css";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hi, I am</p>
        <h1>
          <span className="name-highlight lobster">Shruti Daundkar</span>
        </h1>
        <div className="title-box">SOFTWARE ENGINEER</div>
        <Socials />
      </div>
      <div className="hero-image">
        <img src="/Shruti.jpg" alt="Shruti Daundkar" />
      </div>
      {/* <div className="hero-more">
        About Me <i className="fa-solid fa-right-long"></i>
      </div> */}
    </section>
  );
}
