import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILS, LOGIN_USER } from './types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChaged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user)
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user)
          })
          .catch(() => {
            loginUserFails(dispatch)
          })
      })
  }
}



// Helper functions
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main();
}

const loginUserFails = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILS
  })
}
