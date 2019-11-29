import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostViwer from '../../components/post/PostViewer';
import { unloadPost, readPost } from '../../modules/post';

const PostViewerContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { postId } = match.params;
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    dispatch(readPost(postId)); // 컴포넌트 렌더링 될 때 프스트 가져오기
    // 언마운트될 때 리덕스에서 post 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViwer post={post} error={error} loading={loading} />;
};

export default withRouter(PostViewerContainer);
