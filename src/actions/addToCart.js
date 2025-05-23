import store from '../store'
import axios from '../utils/mockAxios.js'
// import { fireActionTriggerCustomEvent } from '../utils/customEvents'
import { dispatchCustomEvent } from '../utils/customEvents' //adding this for test


import { fetchCart } from './fetchCart'
/**
 * Create fetchCart Action
 */
const requestAddToCart = () => {
  return {
    type: 'REQUEST_ADD_TO_CART'
  }
};

const receiveAddToCart = (data) => {
  return {
    type: 'RECEIVE_ADD_TO_CART',
    payload: data
  }
};

const checkUserOrGuest = (productId) => {
  if (localStorage.getItem('guest') || false) {
    return {id: productId, guestKey: localStorage.getItem('guest')}
  }
};

export const addToCart = (productId, target) => {
  dispatchCustomEvent(target, {                     // Replaced fireActionTriggerCustomEvent with dispatchCustomEvent
    detail: {
      "linkName": target.getAttribute("data-link-name"),
      "action": target.getAttribute("data-track-action")
    }
  });

  return dispatch => {
    dispatch(requestAddToCart());
    return axios.post('cart', checkUserOrGuest(productId))
      .then(response => response)
      .then(json => {
        dispatch(receiveAddToCart(json.data));
        dispatch(fetchCart())
      });
  }
};
