import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAnalytics from '../utils/withAnalytics'; // Import the HOC for analytics tracking

/**
 * Create Mens Category Catalog Component
 * Created on 4/25 per Krward
 */

class CatalogMens extends Component {
  render() {
    return (
             
        /* Catalog Content */
        <div className="columns is-multiline">
          
          {/* Men's Catalog Slot 1 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
               <a href="#/mensproducts">
                <figure className="image is-16by9">
                  <img
                    src="https://teehuggers.com/web/img/imgs/athlete-resting-wall.jpg"
                    alt="Men's Bottoms" 
                    style={{ width: "100%" }}
                  />
                  <div className="img-text-container">
                    <div className="text-center bg-text inner">
                      <h5 className="dark" style={{ textShadow: "1px 1px #FFFFFF" }}>SHOP BOTTOMS</h5>
                    </div>
                  </div>
                </figure>
               </a>
              </div>
            </div>
          </div>

          {/* Men's Catalog Slot 2 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
               <a href="#/mensproducts">
                <figure className="image is-16by9">
                  <img
                    src="https://teehuggers.com/web/img/imgs/joggers-tunnel.jpg"
                    alt="Men's Tops" 
                    style={{ width: "100%" }}
                  />
                  <div className="img-text-container">
                    <div className="text-center bg-text inner">
                      <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP TOPS</h5>
                    </div>
                   
                  </div>
                </figure>
               </a>
              </div>
            </div>
          </div>

          {/* Men's Catalog Slot 3 */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
               <a href="#/mensproducts">
                <figure className="image is-16by9">
                  <img
                    src="https://teehuggers.com/web/img/imgs/hiking-shoes-close.jpg" alt="Men's Shoes" style={{ width: "100%" }}
                  />
                  <div className="img-text-container">
                    <div className="text-center bg-text inner">
                      <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP SHOES</h5>
                    </div>
                  </div>
                </figure>
               </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default CatalogMens; //updated