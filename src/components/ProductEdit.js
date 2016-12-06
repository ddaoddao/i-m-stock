import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import ProductForm from './ProductForm';
import { productUpdate, productSave, productDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class ProductEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.product, (value, prop) => {
      this.props.productUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name ,price ,quantity  } = this.props;

    this.props.productSave({ name, price, quantity, uid: this.props.product.uid });
  }

  onTextPress() {
    const { price, quantity } = this.props;

  }

  onAccept() {
    const { uid } = this.props.product;

    this.props.productDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        
        <ProductForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete product!
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure to delete this product ?
        </Confirm>
        
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, price, quantity } = state.productForm;

  return { name, price, quantity };
};

export default connect(mapStateToProps, {
  productUpdate, productSave, productDelete
})(ProductEdit);
