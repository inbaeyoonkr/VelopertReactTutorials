import React, { useEffect } from 'react'; // useEffect 쓰는 이유는 컴포넌트가 마운트될 때 데이터를 가져오기 위해서다.
import { connect } from 'react-redux';
import { getPost, getUsers } from '../modules/sample';
import Sample from '../components/Sample';

const SampleContainer = ({
  getPost,
  getUsers,
  loadingPost,
  loadingUsers,
  post,
  users
}) => {
  useEffect(() => {
    getPost(1);
    getUsers();
  }, [getPost, getUsers]);

  return (
    <Sample
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
    />
  );
};

export default connect(
  ({ sample }) => ({
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
    post: sample.post,
    users: sample.users
  }),
  { getPost, getUsers }
)(SampleContainer);
