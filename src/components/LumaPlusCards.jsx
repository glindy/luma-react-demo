import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Create Luma+ Benefits Card Component
 */

class LumaPlusCards extends Component {
  render() {
    return (
             
        /* Loyalty Benefits cards */
      
    <div class="container">
      <div class="row">
         <div class="col-md-6 order-2 order-md-1">
            <img src="https://www.apple.com/v/airpods-pro/q/images/overview/hearing-health/hearing_health_conversation_boost__cn2jd958nnde_large_2x.jpg" class="img-fluid rounded-start" alt="cid-2">
         </div>
         <div class="col-md-6 order-1 order-md-2">
            <div class="card-body">
               <h1 class="title">HOW IT WORKS</h1>
               <p class="card-text" style="font-size: 1.25em;">With LUMA+ you get points for every online or in-store purchase. Exchange your points for discounts and perks and get access to our exclusive offers for members.</p>
               <br>
               <ul style="font-size:1.25em;">
                  <li>Sign Up</li>
                  <li>Earn Points</li>
                  <li>Get Exclusive Offers</li>
                  <li>Climb Higher</li>
               </ul>
            </div>
         </div>
      </div>
      <br>
      <br>
      <div class="row">
         <div class="col-md-6 order-2 order-md-1">
            <div class="card-body">
               <h1 class="title">FROM BLUE TO PLATINUM</h1>
               <p class="card-text" style="font-size:1.25em;">Earn more points, rise to a new peak and get even more special offers and unique experiences, including free expedited shipping and dedicated customer support.</p>
            </div>
         </div>
         <div class="col-md-6 order-1 order-md-2">
            <img src="https://www.apple.com/assets-www/en_WW/ipad/feature_card/xsmall/fc_learning_26db92e22.jpg" class="img-fluid rounded-start" alt="cid-2">
         </div>
      </div>
      <br>
      <div class="row">
         <h1 class="title" style="margin-left:12px;">THE PERKS OF BEING A LUMA+ MEMBER</h1>
         <div class="col-md-4 order-1 order-md-2">
            <img src="https://www.apple.com/v/iphone/home/ce/images/overview/consider/ios__02vczxaa3siu_large.jpg" class="img-fluid rounded-start" alt="cid-2">
         </div>
         <div class="col-md-8 order-2 order-md-1">
            <img src="https://www.apple.com/assets-www/en_WW/mac/feature_card/large/fc_durability_26ac75dbe.jpg" class="img-fluid rounded-start" alt="cid-2">
         </div>
      </div>
      <br>
       <div class="row">
         <section style="padding-left: 15px;padding-right: 15px;width: 100%;">
            <div style="color: rgb(51, 51, 51);margin-top: 20px;padding-left: 15px;padding-right: 15px;background-size: cover;background-image: url('https://www.apple.com/v/imac/u/images/overview/product-stories/apple-intelligence/lifestyle_1__ccnm7cq3bhjm_medium_2x.jpg');background-position: center bottom;/* margin-left: 15px; *//* margin-right: 100px; */ height: 90%;" class="container">
               <div class="title-center-dark" style="color: rgb(0, 0, 0);">
                  <div class="Title__content">
                     <h1 class="title-center-dark">BECOME A LUMA+ MEMBER</h1>
                  </div>
                  <br>
               </div>
               <div style="/* gap: 1rem 2rem; *//* padding-right: 20px; */" class="Container">
                  <div class="content" style="float:right;">
    <form>
                        <div class="row">
                           <div class="form-group col-md-6" style="float:right;">
                              <label for="inputFirstName">FIRST NAME</label>
                              <input type="email" class="form-control" id="inputFirstName" placeholder="Jane">
                           </div>
                           <div class="form-group col-md-6">
                              <label for="inputLastName">LAST NAME</label>
                              <input type="password" class="form-control" id="inputLastName" placeholder="Smith">
                           </div>
                        </div>
                        <div class="row">
                           <div class="form-group col-md-6">
                              <label for="inputEmail">EMAIL</label>
                              <input type="email" class="form-control" id="inputEmail" placeholder="jane@email.com">
                           </div>
                           <div class="form-group col-md-6">
                              <label for="inputMobile">MOBILE</label>
                              <input type="password" class="form-control" id="inputMobile" placeholder="444-444-4444">
                           </div>
                        </div>
                        <div class="form-group">
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck">
                              <label class="form-check-label" for="gridCheck">
                              By clicking 'Submit,' you agree to our terms and conditions and consent to receive marketing emails and SMS text messages from us.
                              </label>
                              <br>
                              <br>
                              <button type="submit" class="btn btn-primary-input">SUBMIT</button>
                           </div>
                        </div>
                        <br>
</form></div>
                 
               </div>
            </div>
         </section>
      </div>
   </div>
 


    );
  }
}

export default LumaPlusCards;