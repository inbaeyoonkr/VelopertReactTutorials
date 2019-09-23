import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path='/:category?' component={NewsPage} />; // ?는 선택적이라는 뜻. 있어도 ok, 없어도 ok
};

export default App;
