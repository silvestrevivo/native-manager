import React, { Component } from 'react'
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import { employeeCreate } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {

  onButtonPress = () => {
    const { name, phone, shift } = this.props

    this.props.employeeCreate({ name, phone, shift: shift || 'monday' })
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.prop} />
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

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate)
