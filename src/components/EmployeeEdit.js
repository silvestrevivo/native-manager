import React, { Component } from 'react'
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm'
import _ from 'lodash'

class EmployeeEdit extends Component {

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    console.log('edit', name, phone, shift)
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>SaveChanges</Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit)