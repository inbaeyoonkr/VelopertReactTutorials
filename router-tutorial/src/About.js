import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ? 를 생략한다.
  });
  /** query 객체 형태
   * {
   *    detail: "true",
   * }
   * */
  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열이다.

  return (
    <div>
      <h1>소개</h1>
      <p>about 페이지 입니다.</p>
      {showDetail && <p>detail 값이 true 군요!</p>}
    </div>
  );
};

export default About;
