import React from "react";

class Options extends React.Component {
  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const percantage = (this.state.good / total) * 100;
    return (
        <div>
        <p>good={this.state.good}</p>
        <p>neutral={this.state.neutral}</p>
        <p>bad={this.state.bad}</p>
        <p>total={total}</p>
        <p>Positive Feedback ={percantage}</p>
      </div>
    );
  }
}
export default Options;
