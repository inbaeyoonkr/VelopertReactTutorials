import React, { Component } from 'react';

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push('/');
  };
  componentDidMount() {
    // 이것을 성정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
    this.unblock = this.props.history.block('정말 떠나실 건가요?');
  }
  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>Go Back</button>
        <button onClick={this.handleGoHome}>To Home</button>
      </div>
    );
  }
}

export default HistorySample;
