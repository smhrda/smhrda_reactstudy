import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
    const { data, loading, error } = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    // 컴포넌트 마운트 후 포스트 목록 요청
    useEffect(() => {
        // if (data) return; // 데이터가 이미 존재한다면 요청 X (재로딩 이슈 방지)
        dispatch(getPosts());
    }, [dispatch]);

    if (loading && !data) return <div>Loading...</div>; // 로딩중이면서, 데이터가 없을 때에만 표시 -> 재로딩 문구 출력 방지
    if (error) return <div>ERROR!</div>;
    if (!data) return null;
    return <PostList posts={data} />;
}

export default PostListContainer;
