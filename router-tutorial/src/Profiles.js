import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const activeStyle = {
  background: 'black',
  color: 'white'
};

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to='/profiles/velopert'>
            Velopert 소개
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to='/profiles/inbaeyoon'>
            InbaeYoon 소개
          </NavLink>
        </li>
      </ul>

      <Route
        path='/profiles'
        exact
        render={() => <div>사용자를 선택하세요</div>}
      />
      <Route path='/profiles/:username' component={Profile} />
    </div>
  );
};

export default Profiles;
