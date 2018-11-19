import React, { Component } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { Button } from './common'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions';
import ListItem from './ListItem'
import firebase from 'firebase';
import _ from 'lodash'
import { Actions } from 'react-native-router-flux';

class EmployeeList extends Component {
  componentDidMount() {
    this.createDataSource();
  }
  createDataSource = () => {
    this.props.employeesFetch();
  }
  renderRow = (employee) => {
    return <ListItem employee={employee} />;
  }

  onPressButton = () => {
    firebase.auth().signOut();
    Actions.auth({ type: 'reset' })
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={employee => employee.uid}
        />
        <View style={styles.buttonContainerStyle}>
          <Button onPress={this.onPressButton}>Log Out</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  buttonContainerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20
  }
})


const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
