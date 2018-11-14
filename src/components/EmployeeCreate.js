import React, { Component } from 'react'
import { Card, CardSection, Button, Input } from './common'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name of employee" />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="0647612352" />
        </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate
