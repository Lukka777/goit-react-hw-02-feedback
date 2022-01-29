import React from "react";

class Options extends React.Component {
  
 
  
  render() {
    const total = this.props.good + this.props.neutral + this.props.bad;
    const percantage = (this.props.good /total) * 100;
    return (
      total === 0 ? "There is no feedback" :
        <div>
        <p>good={this.props.good}</p>
        <p>neutral={this.props.neutral}</p>
        <p>bad={this.props.bad}</p>
        <p>total={total}</p>
        <p>Positive Feedback ={percantage}</p>
      </div>
    );
  }

}
export default Options;
