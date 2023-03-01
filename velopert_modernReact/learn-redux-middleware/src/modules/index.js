/* 루트 리듀서 만들기 */
import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts';

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
