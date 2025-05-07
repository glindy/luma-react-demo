import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAnalytics from '../utils/withAnalytics'; // Import the HOC for analytics tracking

/**
 * Create Homepage Catalog Component
 */

class Catalog extends Component {
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
                    src="https://www.phoenix.edu/info/criminal-justice/_jcr_content/root/container/container_copy_copy_/columns/responsivegrid0/container/image.coreimg.85.1600.jpeg/1669083588745/criminal-justice-hero.jpeg"
                    alt="Women's Catalog" 
                    style={{ width: "100%" }}
                  />
                  <div className="img-text-container">
                    <div className="text-center bg-text inner">
                      <h5 className="dark" style={{ textShadow: "1px 1px #FFFFFF" }}>VIEW OUR WOMEN'S CATALOG</h5>
                    </div>

                    <div style={{ paddingLeft: 20, bottom: 20, position: "relative" }}>
                      <a href="#/womensproducts">
                        <button className="button is-pulled-left is-success">WOMEN
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
                    src="https://www.phoenix.edu/info/cybersecurity/_jcr_content/root/container/container_copy_copy_/container_987700006/columns/responsivegrid0/container/image.coreimg.85.1600.jpeg/1669083587945/cybersecurity-hero.jpeg"
                    alt="Men's Catalog" 
                    style={{ width: "100%" }}
                  />
                  <div className="img-text-container">
                    <div className="text-center bg-text inner">
                      <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>VIEW OUR MEN'S CATALOG</h5>
                    </div>
                    <div style={{ paddingLeft: 20, bottom: 20, position: "relative" }}>
                      <a href="#/mensproducts">
                        <button className="button is-pulled-left is-success">MEN
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
                    src="https://www.phoenix.edu/info/education/_jcr_content/root/container/container_copy_copy_/columns/responsivegrid0/container/image.coreimg.85.1600.jpeg/1669083592334/education-hero.jpeg" alt="Gear Catalog" style={{ width: "100%" }}
                  />
                  <div className="img-text-container">
                    <div className="text-center bg-text inner">
                      <h5 className="white" style={{ textShadow: "1px 1px #000000" }}>VIEW OUR GEAR CATALOG</h5>
                    </div>
                    <div style={{ paddingLeft: 20, bottom: 20, position: "relative" }}>
                      <a href="#/gearproducts">
                        <button className="button is-pulled-left is-success">GEAR
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

export default Catalog;