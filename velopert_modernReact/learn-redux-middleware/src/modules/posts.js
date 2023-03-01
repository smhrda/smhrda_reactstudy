import * as postsAPI from '../api/posts'; // api/posts 안의 모든 함수 불러오기
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from '../lib/asyncUtils';

/* 액션 타입 */
// 포스트 여러 개 조회하기
const GET_POSTS = 'posts/GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'; // 요청 실패

// 포스트 한 개 조회하기
const GET_POST = 'posts/GET_POST';
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
const GET_POST_ERROR = 'posts/GET_POST_ERROR';

// 포스트 비우기
// -> 포스트 조회시 재로딩 문제 해결을 위한 액션 준비
const CLEAR_POST = 'posts/CLEAR_POST';

// thunk 함수 만들기
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
export const clearPost = () => ({ type: CLEAR_POST });

/* 초기 상태 설정 */
const initialState = {
    posts: reducerUtils.initial(),
    post: {},
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            const postsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
            return postsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            const postReducer = handleAsyncActions(GET_POST, 'post');
            return postReducer(state, action);
        case CLEAR_POST:
            return {
                ...state,
                post: reducerUtils.initial(),
            };
        default:
            return state;
    }
}
