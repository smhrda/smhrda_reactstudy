// /* 리덕스 모듈 리팩토링 전(참고) */

// import * as postsAPI from '../api/posts'; // api/posts 안의 모든 함수 불러오기
// import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// /* 액션 타입 */
// // 포스트 여러 개 조회하기
// const GET_POSTS = 'posts/GET_POSTS'; // 요청 시작
// const GET_POSTS_SUCCESS = 'posts/GET_POSTS_SUCCESS'; // 요청 성공
// const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR'; // 요청 실패
// // 포스트 한 개 조회하기
// const GET_POST = 'posts/GET_POST';
// const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS';
// const GET_POST_ERROR = 'posts/GET_POST_ERROR';

// // thunk 함수 만들기
// // 모든 액션에 대한 액션 생성함수를 만들 필요 X
// //  -> thunk 함수에서 바로 액션 객체를 만들어도 OK
// export const getPosts = () => async (dispatch) => {
//     dispatch({ tyhpe: GET_POSTS }); // 요청 시작
//     try {
//         const posts = await postsAPI.getPosts(); // API 호출
//         dispatch({ type: GET_POSTS_SUCCESS, posts }); // 성공
//     } catch {
//         dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
//     }
// };

// export const getPost = (id) => async (dispatch) => {
//     dispatch({ tyhpe: GET_POST }); // 요청 시작
//     try {
//         const post = await postsAPI.getPostById(id); // API 호출
//         dispatch({ type: GET_POST_SUCCESS, post }); // 성공
//     } catch {
//         dispatch({ type: GET_POST_ERROR, error: e }); // 실패
//     }
// };

// /* 초기 상태 설정 */
// const initialState = {
//     posts: {
//         loading: false,
//         data: null,
//         error: null,
//     },
//     post: {
//         loading: false,
//         data: null,
//         error: null,
//     },
// };

// export default function posts(state = initialState, action) {
//     switch (action.type) {
//         case GET_POSTS:
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: null,
//                 },
//             };
//         case GET_POSTS_SUCCESS:
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: action.posts,
//                     error: null,
//                 },
//             };
//         case GET_POSTS_ERROR:
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: action.error,
//                 },
//             };
//         case GET_POST:
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: null,
//                 },
//             };
//         case GET_POST_SUCCESS:
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: action.post,
//                     error: null,
//                 },
//             };
//         case GET_POST_ERROR:
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: action.error,
//                 },
//             };
//         default:
//             return state;
//     }
// }
