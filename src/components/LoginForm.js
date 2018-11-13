import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { emailChanged } from '../actions'

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email} />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password" />
          </CardSection>
          <CardSection>
            <Button>Login</Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  }
})

const mapStateToProps = state => {
  return {
    email: state.authentication.email
  }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm)
