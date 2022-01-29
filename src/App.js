import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import React from "react";
import Options from "./components/Options";

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
        <Options
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
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
