import React from "react";

export default function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("inputFirstName").value,
      lastName: document.getElementById("inputLastName").value,
      email: document.getElementById("inputEmail").value,
      mobile: document.getElementById("inputMobile").value,
      consent: document.getElementById("gridCheck").checked,
    };

    console.log("Form Data:", formData);

    // Send formData to analytics platform here
  };

  return (
    <section style={{ paddingLeft: 15, paddingRight: 15, width: "100%" }}>
      <div
        style={{
          color: "rgb(51, 51, 51)",
          marginTop: 20,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundSize: "cover",
          backgroundImage:
            'url("https://demo-system-next.s3.amazonaws.com/cja/r/l/workout-gear-bg.jpg")',
          backgroundPosition: "center bottom",
          height: "90%",
        }}
        className="container"
      >
        <div className="title-center-dark" style={{ color: "rgb(0, 0, 0)" }}>
          <div className="Title__content">
            <h1 className="title-center-dark">BECOME A LUMA+ MEMBER</h1>
          </div>
          <br />
        </div>
        <div className="Container">
          <div className="content" style={{ float: "right" }}>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6" style={{ float: "right" }}>
                  <label htmlFor="inputFirstName">FIRST NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="Tess"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputLastName">LAST NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail">EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="jane@email.com"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputMobile">MOBILE</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputMobile"
                    placeholder="444-444-4444"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    By clicking 'Submit,' you agree to our terms and conditions
                    and consent to receive marketing emails and SMS text
                    messages from us.
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
          </div>
        </div>
      </div>
    </section>
  );
}
