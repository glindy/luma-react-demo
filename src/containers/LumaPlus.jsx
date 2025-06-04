import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from "react-helmet"
import { fetchLumaPlus } from '../actions/fetchLumaPlus'


/**
 * Create Luma+ Container
 */
class LumaPlus extends Component {
  componentDidMount() {
    const { dispatch } = this.props
  }

render() {

    return (
      <div>
        <Helmet> 
          <title>Luma Plus</title>
          <meta name="site_section" content="Luma Plus" />
          <meta name="product_category" content="" />
          
        </Helmet>
        <section className="section">

          <div className="container">
            <div className="p-5 text-center bg-image rounded-3" style={{
              backgroundImage:
                'url("https://demo-system-next.s3.amazonaws.com/cja/r/l/mtn-arms-raised.jpg")',
              backgroundPosition: "center",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              height: 319
              }}
            >
            <div className="d-flex flex-row-bd h-100" style={{}}>
              <div className="hero-banner-text">
                <div className="titles grouped">
                  <h4 className="subtitle-left-white" style={{textTransform: "uppercase", textShadow: "1px 1px #000000",}}>get luma+ rewards</h4>
                  <h1 className="title-left-white" style={{textTransform: "uppercase", textShadow: "1px 1px #000000",}}>it's good to be together</h1>
                </div>
              </div>
            </div>
            </div>
          </div>
        <br /> <br />

        <div className="container">
  <div className="row">
    <div className="col-md-6 order-2 order-md-1">
      <img
        src="https://demo-system-next.s3.amazonaws.com/cja/r/l/couple-camp-forest.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
    <div className="col-md-6 order-1 order-md-2">
      <div className="card-body">
        <h1 className="title">HOW IT WORKS</h1>
        <p className="card-text" style={{ fontSize: "1.25em" }}>
          With LUMA+ you get points for every online or in-store purchase.
          Exchange your points for discounts and perks and get access to our
          exclusive offers for members.
        </p>
        <br />
        <ul style={{ fontSize: "1.25em" }}>
          <li>Sign Up</li>
          <li>Earn Points</li>
          <li>Get Exclusive Offers</li>
          <li>Climb Higher</li>
        </ul>
      </div>
    </div>
  </div>
  <br />
  <br />
  <div className="row">
    <div className="col-md-6 order-2 order-md-1">
      <div className="card-body">
        <h1 className="title">FROM BLUE TO PLATINUM</h1>
        <p className="card-text" style={{ fontSize: "1.25em" }}>
          Earn more points, rise to a new peak and get even more special offers
          and unique experiences, including free expedited shipping and
          dedicated customer support.
        </p>
      </div>
    </div>
    <div className="col-md-6 order-1 order-md-2">
      <img
        src="https://demo-system-next.s3.amazonaws.com/cja/r/l/mtn-jump.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
  </div>
  <br />
  <div className="row">
    <h1 className="title" style={{ marginLeft: 12 }}>
      THE PERKS OF BEING A LUMA+ MEMBER
    </h1>
    <div className="col-md-4 order-1 order-md-2">
      <img
        src="https://demo-system-next.s3.amazonaws.com/cja/r/l/trail-run-logo.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
    <div className="col-md-8 order-2 order-md-1">
      <img
        src="https://demo-system-next.s3.amazonaws.com/assets/luma/Luma-tiers.jpg"
        className="img-fluid rounded-start"
        alt="cid-2"
      />
    </div>
  </div>
  <br />
  <div className="row">
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
          /* marginLeft: 15, */ /* marginRight: 100, */ height: "90%"
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
            <form>
              <div className="row">
                <div className="form-group col-md-6" style={{ float: "right" }}>
                  <label htmlFor="inputFirstName">FIRST NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="Jane"
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
                 <a href="#/signupconfirm" className="btn btn-primary-input" onclick="submitClick()">
                    SUBMIT
                 </a>
                  
                </div>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


        </section>
      </div>
    )
  }
}
/**
 * Insert Props Into Component **/
 
const stateProps = (state) => {
  return {
    about: state.LumaPlusReducer.data
  }
};


export default connect(stateProps)(LumaPlus)
