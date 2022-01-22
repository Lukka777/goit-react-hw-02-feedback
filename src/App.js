import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import React from "react";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const percantage = (this.state.good / total) * 100;
    return (
      <>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        {total === 0 ? (
          "There is no feedback"
        ) : (
          <>
            <p>good={this.state.good}</p>
            <p>neutral={this.state.neutral}</p>
            <p>bad={this.state.bad}</p>
            <p>total={total}</p>
            <p>Positive Feedback ={percantage}</p>
          </>
        )}
      </>
    );
  }
  onLeaveFeedback = (feedbackType) => {
    this.setState({
      ...this.state,
      [feedbackType]: this.state[feedbackType] + 1,
    });
  };
}

export default App;
