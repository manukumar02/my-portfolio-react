import axios from "axios";
import { USER_DATA_FAIL, USER_DATA_REQUEST, USER_DATA_SUCCESS } from "../constants/userInfoConstant";

export const getUserInfo = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DATA_REQUEST
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    const { data } = await axios.post('/api/userInfo', { email }, config);
    dispatch({
      type: USER_DATA_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_DATA_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
