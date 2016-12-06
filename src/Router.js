import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';
import ProductEdit from './components/ProductEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 54}}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="I'MStock" hideNavBar={true} />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.productCreate()}
          rightTitle="Add"
          key="productList"
          component={ProductList}
          title="My Product"
        />
        <Scene key="productCreate" component={ProductCreate} title="Add Product" />
        <Scene key="productEdit" component={ProductEdit} title="Edit Product" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
