import { useState } from "react";
import "./Identification.css";
import states from "../../data/states";

const initialState = {
  fullName: "",
  address: "",
  license: "",
  dob: "",
  state: "",
  email: "",
  phone: "",
};

const Identification = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full Name is required";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!form.license.trim()) errs.license = "Driver’s License Number is required";
    if (!form.dob) errs.dob = "Date of Birth is required";
    if (!form.state) errs.state = "State is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      errs.email = "Invalid email address";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone Number is required";
    } else if (
      !/^(\+?1\s?)?(\([2-9][0-8][0-9]\)|[2-9][0-8][0-9])[-.\s]?[2-9][0-9]{2}[-.\s]?[0-9]{4}$/.test(form.phone)
    ) {
      errs.phone = "Invalid US phone number";
    }
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
    <div className="identification-container">
      <h2 className="identification-title">Personal Information Form</h2>
      <form className="identification-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="fullName">Full Name<span>*</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <div className="form-error">{errors.fullName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address<span>*</span></label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            rows={3}
          />
          {errors.address && <div className="form-error">{errors.address}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="license">Driver’s License Number<span>*</span></label>
          <input
            type="text"
            id="license"
            name="license"
            value={form.license}
            onChange={handleChange}
            required
          />
          {errors.license && <div className="form-error">{errors.license}</div>}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth<span>*</span></label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />
            {errors.dob && <div className="form-error">{errors.dob}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="state">State<span>*</span></label>
            <select
              id="state"
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.state && <div className="form-error">{errors.state}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email<span>*</span></label>
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
            <label htmlFor="phone">Phone Number<span>*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>
        </div>
        <button type="submit" className="identification-btn">
          Submit
        </button>
        {submitted && (
          <div className="form-success">
            Thank you! Your information has been submitted.
          </div>
        )}
      </form>
    </div>
  );
};


export default Identification;
