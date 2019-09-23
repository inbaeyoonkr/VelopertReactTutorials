import React from 'react';
import ColorBox from './components/Colorbox';
import ColorContext from './context/color';

const App = () => {
  return (
    <ColorContext.Provider>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
