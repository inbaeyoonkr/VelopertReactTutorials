import React, { Component } from 'react';
import './App.css';
import ScrollBox from './ScrollBox';
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          To Bottom
        </button>
      </div>
    );
  }
}

export default App;
