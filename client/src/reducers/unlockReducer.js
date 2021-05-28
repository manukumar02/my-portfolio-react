import { UNLOCK_FAIL, UNLOCK_REQUEST, UNLOCK_SUCCESS } from "../constants/unlockConstant";

const initialValue = {
  email: '',
  token: ''
}
export const unlockReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UNLOCK_REQUEST:
      return { loading: true }
    case UNLOCK_SUCCESS:
      return { loading: false, unlockInfo: action.payload };
    case UNLOCK_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}
