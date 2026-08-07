import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Create Homepage Blog Component
 */

class BlogItems extends Component {
  render() {
    return (
             
        /* Blog Content */
      
    <div className="columns is-multiline">

    {/* Blog 1 Content */}
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <a href="#/blog">
                <img src="https://www.sephora.com/contentimages/26-07-11_rhode-newness_site_hp_mktg-banner-1200x800_us-can_2834.jpg?imwidth=800" />
              </a>
            </figure>
            <div className="img-text-container">
              <div className="text-center bg-text inner-blog">
                <div className="overlay">
                  <h5 className="blog">RISE &amp; THRIVE</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog 2 Content */}
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <a href="#/blog">
                <img src="https://www.sephora.com/contentimages/2026-07-16_cs-luxe-v2_site_hp_mktg-banner_us_01.jpg?imwidth=800" />
              </a>
            </figure>
            <div className="img-text-container">
              <div className="text-center bg-text inner-blog">
                <div className="overlay">
                  <h5 className="blog">BOLD MOVES</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog 3 Content */}
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <a href="#/blog">
                <img src="https://www.sephora.com/contentimages/26-08-01_sc-bsl-new-mascara_site_hp_mktg-banner-1200x800_can_3712.jpg?imwidth=800" />
              </a>
            </figure>
            <div className="img-text-container">
              <div className="text-center bg-text inner-blog">
                <div className="overlay">
                  <h5 className="blog">BEYOND THE GYM</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

 






    );
  }
}

export default BlogItems;