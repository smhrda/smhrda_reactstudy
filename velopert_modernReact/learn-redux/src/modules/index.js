/* 여러 개의 리듀서를 하나로 합치는 루트 리듀서 만들기 */
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
