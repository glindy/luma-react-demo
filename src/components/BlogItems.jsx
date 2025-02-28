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
                <img src="https://demo-system-next.s3.amazonaws.com/assets/luma/blog/1540412484690.jpeg" />
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
                <img src="https://teehuggers.com/web/img/imgs/AdobeStock_861601001.jpeg" />
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
                <img src="https://demo-system-next.s3.amazonaws.com/assets/luma/blog/1540415632896.jpeg" />
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