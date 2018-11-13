import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { View, StyleSheet } from 'react-native'

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.loginContainer}>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com" />
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


export default LoginForm
