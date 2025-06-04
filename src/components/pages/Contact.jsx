import { useState, useEffect } from "react";
import "./Contact.css";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const socials = [
    {
    name: "shrutidaundkar8@gmail.com",
    url: "mailto:shrutidaundkar8@gmail.com",
    icon: <i className="fa-solid fa-envelope"></i>,
  },
  {
    name:"Portland, OR, USA",
    url: "https://www.google.com/maps/place/Portland,+OR,+USA",
    icon: <i className="fas fa-map-marker-alt"></i>,
  },
  {
    name: "https://www.linkedin.com/in/shrutidaundkar1/",
    url: "https://www.linkedin.com/in/shrutidaundkar1/",
    icon: <i className="fab fa-linkedin"></i>,
  },
  {
    name: "https://github.com/shrutidaundkar",
    url: "https://github.com/shrutidaundkar",
    icon: <i className="fab fa-github"></i>,
  },

];

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [portlandTime, setPortlandTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Los_Angeles",
        hour12: true,
      };
      const time = now.toLocaleTimeString("en-US", options);
      setPortlandTime(time);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    } else {
      setErrors(errs);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="lobster">Contact Me</h1>
      <div className="contact-grid">
        <div className="contact-info-col">
          <div>
            <div className="contact-image-container">
              <img src="src/assets/woman.png" alt="Shruti Daundkar" className="contact-image" />
            </div>
            <ul className="contact-socials-list">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    <span className="contact-social-icon">{s.icon}</span>
                    <span className="contact-social-name">{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-clock">
            🕒 Time in Portland: <span>{portlandTime}</span>
          </div>
        </div>
        <div className="contact-form-col">
          {submitted && (
            <div className="contact-success">
              Thank you for reaching out! I will get back to you soon.
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">
                Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message<span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
              {errors.message && (
                <div className="form-error">{errors.message}</div>
              )}
            </div>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
