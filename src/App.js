import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class First extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAz8dayFYefNj9Z4bu543VazqclhP1oTro",
      authDomain: "stock2-f9d4e.firebaseapp.com",
      databaseURL: "https://stock2-f9d4e.firebaseio.com",
      storageBucket: "stock2-f9d4e.appspot.com",
      messagingSenderId: "742382477221"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default First;
