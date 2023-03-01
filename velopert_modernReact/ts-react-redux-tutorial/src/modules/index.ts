import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import github from "./github";

const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;

// 루트 리듀서의 반환값 타입 내보내기
export type RootState = ReturnType<typeof rootReducer>;
