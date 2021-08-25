import { locationTypes } from '../constants/actionTypes';

const {
  STORE_SUCCESS,
  STORE_FAIL,
  STORE_DESTROY
} = locationTypes

const defaultState = {
  data: {}
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_SUCCESS:
      return {
        data: action.payload
      }
    case STORE_FAIL:
    case STORE_DESTROY:
      return {
        data: {}
      }
    default:
      return state
  }
}

export default authReducer