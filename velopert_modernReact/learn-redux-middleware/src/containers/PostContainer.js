import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPost, getPost } from '../modules/posts';
import Post from '../components/Post';

// postId 값을 props로 받아옴
function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        (state) => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null,
    }; // 데이터가 아예 존재하지 않을 때가 있으므로 -> 비구조화 할당 오류 방지
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return; // 포스트가 존재하면 요청 X
        dispatch(getPost(postId));
        return () => {
            dispatch(clearPost()); // 포스트 비움 -> 다른 포스트를 읽을 때 이전 포스트가 보여지는 문제점 해결
        };
    }, [postId, dispatch, data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>ERROR!</div>;
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;
