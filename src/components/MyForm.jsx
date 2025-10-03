import React, { Component } from 'react';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    consent: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    console.log("Captured form data:", formData);
    alert(`Thanks ${formData.firstName}, we captured your info!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-6" style={{ float: "right" }}>
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Jane"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@email.com"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="mobile">MOBILE</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="444-444-4444"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="consent">
            By clicking 'Submit,' you agree to our terms and conditions and
            consent to receive marketing emails and SMS text messages from us.
          </label>
          <br />
          <br />
          <button type="submit" className="btn btn-primary-input">
            SUBMIT
          </button>
        </div>
      </div>
      <br />
    </form>
  );
};

export default MyForm;
