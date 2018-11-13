import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.containerStyle} >
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={label === 'Password' ? true : false}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 200
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: '#0053B2'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export { Input }
