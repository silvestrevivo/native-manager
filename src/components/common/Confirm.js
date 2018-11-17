import React from 'react'
import { Text, View, Modal, StyleSheet } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ text, onAccept, onDecline, visible }) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => { }}
      transparent
      visible={visible} >
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{text}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba( 0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
})


export { Confirm }

