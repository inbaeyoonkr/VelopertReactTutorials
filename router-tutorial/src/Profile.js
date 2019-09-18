import React from 'react';
import { Link, Route } from 'react-router-dom';

const data = {
  inbaeyoon: {
    name: '윤인배',
    description: '주니어 개발자'
  },
  velopert: {
    name: '김민준',
    description: '시니어 개발자'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  if (!username) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({data[username].name})
      </h3>
      <p>{data[username].description}</p>
    </div>
  );
};

export default Profile;
