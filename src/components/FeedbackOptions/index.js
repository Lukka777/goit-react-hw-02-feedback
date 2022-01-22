import React from "react";

class FeedbackOptions extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.onLeaveFeedback('good')}>Good</button>
        <button onClick={()=>this.props.onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={()=>this.props.onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  }
}
export default FeedbackOptions;
