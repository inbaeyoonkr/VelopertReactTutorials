import React from 'react';
import ColorBox from './components/Colorbox';
import SelectColors from './components/SelectColors';
import { ColorProvider } from './context/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
