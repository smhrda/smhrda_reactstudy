import React from 'react';
import { useParams } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';

const PostPage = ({}) => {
    const params = useParams();

    // URL 파라미터 값은 문자열 -> parseInt로 변환 필요
    return <PostContainer postId={parseInt(params.id, 10)} />;
};

export default PostPage;
