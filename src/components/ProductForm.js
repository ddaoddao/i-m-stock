import React, { Component } from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { productUpdate } from '../actions';
import { CardSection, Input } from './common';

class ProductForm extends Component {
  render() {
    return (
        <View style={styles.pickerTextStyle}>
          <View>
              <Text style={{fontSize: 18}}> Name </Text>
              <TextInput style={{fontSize: 18}}
                 value={this.props.name}
                 onChangeText={value => this.props.productUpdate({ prop: 'name', value })}
                 keyboardType='default'
              />
          </View>

          <View>
              <Text style={{fontSize: 18}}> Price </Text>
              <TextInput style={{fontSize: 18}}
                 value={this.props.price}
                 onChangeText={value => this.props.productUpdate({ prop: 'price', value })}
                 keyboardType='numeric'
              />
          </View>

          <View>
              <Text style={{fontSize: 18}}> Quantity </Text>
              <TextInput style={{fontSize: 18}}
                 value={this.props.quantity}
                 onChangeText={value => this.props.productUpdate({ prop: 'quantity', value })}
                 keyboardType='numeric'
              />
          </View>
        </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    paddingLeft: 20,
    paddingRight: 20
  },
  background: {
    flex: 1,
    backgroundColor: '#003870'
  }
};

const mapStateToProps = (state) => {
  const { name, price, quantity } = state.productForm;

  return { name, price, quantity };
};

export default connect(mapStateToProps, { productUpdate })(ProductForm);