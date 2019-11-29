import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  /* span 사이에 가운뎃점 보여주기 */
  span + span:before {
    color: ${palette.gray[5]};
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;
const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;
const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스터입니다.</PostViewerBlock>;
    }
    return <PostViewer>오류 발생</PostViewer>;
  }
  if (loading || !post) {
    return null;
  }
  const { title, body, tags, user, publishedDate } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{user.username}</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          {tags.map(tag => (
            <div className="tag">#{tag}</div>
          ))}
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }}></PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
