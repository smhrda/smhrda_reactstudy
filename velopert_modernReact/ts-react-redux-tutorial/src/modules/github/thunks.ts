import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getUserProfileAsync } from "./actions";
import { getUserProfile } from "../../api/github";
import { GithubAction } from "./types";
import createAsyncThunk from "../../lib/createAsyncThunk";

/* export function getUserProfileThunk(
  username: string
): ThunkAction<any, RootState, null, GithubAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
} */

/* ThunkAction의 generics 값 
    <ReturnType, State, ExtraThunkArg, BasicAction>
    1. ReturnType: thunk 함수에서 반환하는 값의 타입 설정(없으면 void)
    2. State: 스토어의 상태에 대한 타입 설정
    3. ExtraThunkArg: redux-thunk 미들 웨어의 extra Argument 타입 설정
    4. BasicAction: dispatch 할 수 있는 액션들의 타입 설정*/

export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile
);
