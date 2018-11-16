import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions';
import ListItem from './ListItem'
import _ from 'lodash'

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

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
