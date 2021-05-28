import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { unlockReducer } from './reducers/unlockReducer';
import { userInfoReducer } from './reducers/userInfoReducer';

const reducer = combineReducers({
  unlockInfo: unlockReducer,
  userInfo: userInfoReducer
});

const unlockFromStorage = localStorage.getItem('unlockInfo') ? JSON.parse(localStorage.getItem('unlockInfo')) : null;
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const initialState = {
  unlockInfo: { unlockInfo: unlockFromStorage },
  userInfo: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;