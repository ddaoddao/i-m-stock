import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.productEdit({ product: this.props.product });
  }

  render() {
    const { name , price, quantity } = this.props.product;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={{backgroundColor:'#FFF'}}>
          <CardSection style={{backgroundColor:'#FFF',borderColor: '#BA0923',borderWidth: 7, borderRadius: 20}}>
            <View>
              <Text style={styles.textStyle}> </Text>
              <Text style={styles.textStyle}> Product name : {name} </Text>
              <Text style={styles.textStyle}> Price : {price} </Text>
              <Text style={styles.textStyle}> Quantity : {quantity} </Text>
              <Text style={styles.textStyle}> </Text>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20,
    paddingLeft: 15,
    color: 'black'
  }
};

export default ListItem;
