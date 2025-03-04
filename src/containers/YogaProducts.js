import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { fetchProducts } from '../actions/fetchYogaProducts'
import { addToCart } from '../actions/addToCart'
import { addToWishlist } from '../actions/addToWishlist'
import { removeFromWishlist } from '../actions/removeFromWishlist'
import { removeFromCart } from '../actions/removeFromCart'
import Helmet from 'react-helmet'

class YogaProducts extends Component {

  constructor(props) {
    super(props);
    this.handleLoadMoreClicked = this.handleLoadMoreClicked.bind(this);
    this.state = {
      page: 1,
      pageSize: 8
    };
  }

  addToCart(id, target) {
    const { dispatch } = this.props;
    dispatch(addToCart(id, target))
  }

  addToWishlist(id, target) {
    const { dispatch } = this.props;
    dispatch(addToWishlist(id, target))
  }

  removeFromWishlist(id, target) {
    const { dispatch } = this.props;
    dispatch(removeFromWishlist(id, target))
  }

  removeFromCart(id, target) {
    const { dispatch } = this.props;
    dispatch(removeFromCart(id, target))
  }

  componentDidMount() {
    /** adding this part for debugging **/
    fetch('assets/resources/data/yogaProducts.json')
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data); // Log API response
      this.setState({ products: Array.isArray(data) ? data : [] });
    })
    .catch((error) => console.error("Error fetching Yoga products:", error));
    /** end debugging **/

    const { dispatch } = this.props;
    dispatch(fetchProducts())
  }



  render() {

    /** removing this to test fix for productsToLoad is an integer (and removing the slider settings) ** 
    let productsToLoad = this.state.page * this.state.pageSize;

    const settings = {
      dots: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true
    };

    /end remove **/

    /** inserting code to fix **/

    let productsToLoad = this.state.page * this.state.pageSize;
    const safeProductsToLoad = Number.isInteger(productsToLoad) ? productsToLoad : 8; 

    /** end test code **/

    return (
      <div>
        <Helmet key={window.location.pathname}> 
          <title>Yoga Products</title>
          <meta name="site_section" content="Category Page" />
          <meta name="product_category" content="Yoga" />
        </Helmet>

        <section className="section">
<div className="container">
  <div
    className="p-5 text-center bg-image rounded-3"
    style={{
      backgroundImage:
        'url("https://teehuggers.com/web/img/imgs/AdobeStock_846322528.jpg")',
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      height: 319
    }}
  >
    <div className="d-flex flex-row-bd h-100" style={{}}>
      <div className="hero-banner-text">
        <div className="titles grouped">
          <h4 className="subtitle-right-white">A NEW YEAR, A NEW COLLECTION</h4>
          <h1 className="title-right-white">FIND YOUR INNER BALANCE</h1>
          <h1 className="title-right-white">WITH LUMA YOGA</h1>
        </div>
      </div>
    </div>
  </div>
</div>
<br /><br />

          <div className="container">
            <div className="heading">
              <h1 className="title">YOGA</h1>

             <div className="columns is-multiline">
  {Array.isArray(this.props.products) && this.props.products.length > 0
    ? this.props.products.slice(0, safeProductsToLoad).map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={this.addToCart.bind(this)}
          addToWishlist={this.addToWishlist.bind(this)}
          removeFromWishlist={this.removeFromWishlist.bind(this)}
          removeFromCart={this.removeFromCart.bind(this)}
          wishlist={this.props.wishlist}
          cart={this.props.cart}
        />
      ))
    : <p>No Yoga products available.</p>}
</div>
<br /><br />
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {productsToLoad < this.props.products.length && (
                <button type="button" className="btn btn-primary btn-md" onClick={this.handleLoadMoreClicked}>LOAD MORE</button>
              )}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  handleLoadMoreClicked() {
    const page = this.state.page + 1; 
    this.setState({page: page});
    this.targetView('PRODUCTS-PAGE-' + page);
  }

  targetView(viewName) {
    // Validate if the Target Libraries are available on your website
    if (window.adobe && adobe.target && typeof adobe.target.triggerView === 'function') {
      adobe.target.triggerView(viewName);
    }
  }
}
/**
 * Insert Props Into Component
 */
const stateProps = (state) => {
  return {
    products: state.YogaProductsReducer.data,
    wishlist: state.WishlistReducer.data,
    cart: state.CartReducer.data
  }
};
export default connect(stateProps)(YogaProducts)
