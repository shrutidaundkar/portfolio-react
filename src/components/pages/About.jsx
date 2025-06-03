import "./About.css";
import profilePic from "../../assets/background.jpg";
import Socials from "./Socials";
const About = () => {
  return (
    <div className="about-scroll-container">
      <section className="about-grid-section">
        <div className="about-grid-column">
          <div className="about-content-half">
            <div className="about-content">
              <h1 className="lobster">About Me</h1>
              <p>
                Hi, I'm Shruti Daundkar — a Software Engineer passionate about
                building robust web and backend applications. With a strong
                foundation in programming and software engineering principles,
                I’ve gained hands-on experience designing and developing
                scalable applications from end to end.
              </p>
              <div className="about-socials">
                <Socials />
                <button
                  className="download-btn lobster"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/19u6K5RAdqnKKHexWiDKvbmy1i1ObEKh2/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="about-grid-column image-center">
          <div className="about-image-half">
            <img src={profilePic} alt="Shruti Daundkar" />
          </div>
        </div>

        <div className="about-grid-column">
          <div className="about-content-half education-box">
            <div className="education-content">
              <h1 className="lobster">Education</h1>
              <ul className="education-list">
                <li>
                  Master’s in Computer Science - Portland State University -
                  June 2024
                </li>
                <li>
                  Bachelor’s in Computer Engineering - Savitribai Phule Pune
                  University - August 2021
                </li>
                <li>
                  Diploma in Computer Engineering - Government Polytechnic Pune
                  - August 2018
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
