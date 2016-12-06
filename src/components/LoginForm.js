import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import Display from '../../components/index_display'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this,'index_display')}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card style={{borderColor:'#BA0923',borderWidth: 10,borderRadius: 20}}>
      
        <View style={{paddingTop: 50}}>  
          <Text style={styles.textCom}>{'Login'}</Text>
        <CardSection style={{ paddingTop: 20 }}>
          <Input
            label="Email"
            placeholder="E-mail"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
       </View> 
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  textCom: {
    paddingTop: 20,
    fontSize: 35,
    color: '#BA0923',
    fontWeight: 'bold',
    paddingLeft: 20,
    textAlign: 'center'
  },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
