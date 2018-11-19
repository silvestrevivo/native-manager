import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './src/components/LoginForm'
import EmployeeList from './src/components/EmployeeList'
import EmployeeCreate from './src/components/EmployeeCreate'
import EmployeeEdit from './src/components/EmployeeEdit'
import { connect } from 'react-redux'
import { employeeClean } from './src/actions'
import { Spinner } from './src/components/common'

const RouterComponent = (props) => {

  const renderContent = () => {
    const { log } = props;
    switch (log) {
      case true:
        return (
          <Router>
            <Scene key="root" hideNavBar>
              <Scene key="main">
                <Scene
                  key="employeeList"
                  component={EmployeeList}
                  title="Employees"
                  initial
                  rightTitle="Add"
                  onRight={() => {
                    Actions.employeeCreate()
                    props.employeeClean()
                  }} />
                <Scene
                  key="employeeCreate"
                  component={EmployeeCreate}
                  title="Create Employee" />
                <Scene
                  key="employeeEdit"
                  component={EmployeeEdit}
                  title="Edit Employee" />
              </Scene>
            </Scene>
          </Router>
        )
      case false:
        return (
          <Router>
            <Scene key="root" hideNavBar>
              <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" hideNavBar />
              </Scene>
            </Scene>
          </Router>
        )
      default:
        return <Spinner size="large" />
    }
  }

  return renderContent()
}

export default connect(null, { employeeClean })(RouterComponent)
