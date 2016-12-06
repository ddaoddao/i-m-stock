import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 10,
  }
};

export { CardSection };
