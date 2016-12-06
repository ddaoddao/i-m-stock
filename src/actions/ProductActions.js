import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_UPDATE,
  PRODUCT_CREATE,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_SAVE_SUCCESS
} from './types';

export const productUpdate = ({ prop, value }) => {
  return {
    type: PRODUCT_UPDATE,
    payload: { prop, value }
  };
};

export const productCreate = ({ name, price, quantity }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/products`)
      .push({ name, price, quantity })
      .then(() => {
        dispatch({ type: PRODUCT_CREATE });
        Actions.productList({ type: 'reset' });
      });
  };
};

export const productFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/products`)
      .on('value', snapshot => {
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const productSave = ({ name, price, quantity, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/products/${uid}`)
      .set({ name, price, quantity })
      .then(() => {
        dispatch({ type: PRODUCT_SAVE_SUCCESS });
        Actions.productList({ type: 'reset' });
      });
  };
};

export const productDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/products/${uid}`)
      .remove()
      .then(() => {
        Actions.productList({ type: 'reset' });
      });
  };
};
