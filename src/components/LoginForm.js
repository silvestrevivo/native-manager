import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChaged, loginUser } from '../actions'

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChaged(text)
  }

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError = () => {
    if (this.props.error.length > 0) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      )
    }
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return <Button onPress={this.onButtonPress}> Login</Button >
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
              placeholder="password"
              onChangeText={this.onPasswordChange}
              value={this.props.password} />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
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
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

const mapStateToProps = state => {
  return {
    email: state.authentication.email,
    password: state.authentication.password,
    error: state.authentication.error,
    loading: state.authentication.loading
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChaged, loginUser })(LoginForm)
