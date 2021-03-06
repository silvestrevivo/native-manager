import firebase from 'firebase'

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FECTH_SUCCESS, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_CLEAN } from './types'
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}


export const employeeCreate = ({ name, phone, shift }) => {
  // Get current user
  const { currentUser } = firebase.auth();
  // Push data
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({
          type: EMPLOYEE_CREATE
        })
        Actions.employeeList({ type: 'reset' })
        // with type: 'reset', we are going 'back'
      })
  }
}

export const employeesFetch = () => {
  // Get current user
  const { currentUser } = firebase.auth();
  // Fetch data
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FECTH_SUCCESS,
          payload: snapshot.val()
        })
      })
  }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  // Get current user
  const { currentUser } = firebase.auth();
  // Set data
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({
          type: EMPLOYEE_SAVE_SUCCESS
          // clearing data to have form clean if we want add after eddit
        })
        Actions.employeeList({ type: 'reset' })
        // with type: 'reset', we are going 'back'
      })
  }
}

export const employeeDelete = ({ uid }) => {
  // Get current user
  const { currentUser } = firebase.auth();
  // Delete Data
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' })
        // with type: 'reset', we are going 'back'
      })
  }
}

export const employeeClean = () => {
  return (dispatch) => {
    dispatch({
      type: EMPLOYEE_CLEAN
    })
  }
}
