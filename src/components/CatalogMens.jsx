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
          
          {/* Women's Catalog */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
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

                    <div style={{ paddingLeft: 20, bottom: 20, position: "relative" }}>
                      <a href="#/mensproducts">
                        <button className="button is-pulled-left is-success">SHOP NOW
                        </button>
                      </a>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          {/* Men's Catalog */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
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
                    <div style={{ paddingLeft: 20, bottom: 20, position: "relative" }}>
                      <a href="#/mensproducts">
                        <button className="button is-pulled-left is-success">SHOP NOW
                        </button>
                      </a>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          {/* Gear Catalog */}
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-16by9">
                  <img
                    src="https://teehuggers.com/web/img/imgs/hiking-shoes-close.jpg" alt="Men's Shoes" style={{ width: "100%" }}
                  />
                  <div className="img-text-container">
                    <div className="text-center bg-text inner">
                      <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>SHOP SHOES</h5>
                    </div>
                    <div style={{ paddingLeft: 20, bottom: 20, position: "relative" }}>
                      <a href="#/gearproducts">
                        <button className="button is-pulled-left is-success">SHOP NOW
                        </button>
                      </a>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default CatalogMens; //updated