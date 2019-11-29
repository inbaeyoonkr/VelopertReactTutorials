import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({ username, tag, page }) => {
  const queryString = qs.stringify({ username, tag, page });
  return client.get(`/api/posts/${queryString}`);
};
