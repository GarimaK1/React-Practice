import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }

    // handleClick = () => {
    //   console.log('this is:', this);
    // }
  
    render() {
      // console.log(this)
      
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()}>
        {/* <button onClick={this.handleClick}> */}
          Click me
        </button>
      );
    }
  }

// ========================================

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
);
