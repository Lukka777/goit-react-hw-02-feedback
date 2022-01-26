import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import React from "react";
import options from "./components/Options";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        {total === 0 ? "There is no feedback" : <Optiopns 
        good={options.good}
        neutral={options.neutral}
        bad={options.bad}
        total={options.total}
        percantage={options.percantage}
        />}
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
