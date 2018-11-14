import firebase from 'firebase'

import { EMPLOYEE_UPDATE } from './types'

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
  firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift })

}
