import axios from "axios";
import { UNLOCK_FAIL, UNLOCK_REQUEST, UNLOCK_SUCCESS } from "../constants/unlockConstant";

export const unlock = (email) => async (dispatch) => {
  try {
    dispatch({
      type: UNLOCK_REQUEST
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    const { data } = await axios.post('/api/unlock', { email }, config);
    dispatch({
      type: UNLOCK_SUCCESS,
      payload: data
    })

    localStorage.setItem('unlockInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UNLOCK_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
