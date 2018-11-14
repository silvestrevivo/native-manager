import React, { Component } from 'react'
import { Card, CardSection, Button, Input } from './common'
import { Picker, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'

class EmployeeCreate extends Component {

  onButtonPress = () => {
    const { name, phone, shift } = this.props

    this.props.employeeCreate({ name, phone, shift: shift || 'monday' })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name of employee"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="0647612352"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })} />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}>
            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Tuesday" value="tuesday" />
            <Picker.Item label="Wednesday" value="wednesday" />
            <Picker.Item label="Thursday" value="thursday" />
            <Picker.Item label="Friday" value="friday" />
            <Picker.Item label="Saturday" value="saturday" />
            <Picker.Item label="Sunday" value="sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return {
    name,
    phone,
    shift
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 15,
    color: '#0053B2'
  }
})


export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)
