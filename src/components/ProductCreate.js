import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productUpdate, productCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ProductForm from './ProductForm';

class ProductCreate extends Component {
  onButtonPress() {
    const { name, price, quantity } = this.props;

    this.props.productCreate({ name, price, quantity });
  }

  render() {
    return (
      <Card>
        <ProductForm {...this.props} />
        <CardSection style={{marginTop: 20}}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, price, quantity } = state.productForm;

  return { name, price, quantity };
};

export default connect(mapStateToProps, {
  productUpdate, productCreate
})(ProductCreate);
