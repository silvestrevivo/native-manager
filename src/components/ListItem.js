import React, { Component } from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  onRowPress = () => {
    Actions.employeeCreate({ employee: this.props.employee })
    // we are giving an aditional props to this layout
    // on this way we can use a conditional on EmployeeCreate component
    // to decide if we want to use the layout to create or to edit a user
  }

  render() {
    const { name } = this.props.employee.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
})


export default ListItem
