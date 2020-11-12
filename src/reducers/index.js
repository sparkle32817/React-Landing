import { combineReducers } from 'redux';
import activedMenu from './activeMenu';
import setAuth from './setAuth';

export default combineReducers({
  activedMenu,
  setAuth
});