import React, { Component } from 'react';
import { Container, WrapperFeedback } from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <Container>
        <h1>Please leave feedback</h1>
        <WrapperFeedback>
          {keys.map(key => (
            <button
              type="button"
              key={key}
              onClick={() => this.handleFeedback(key)}
            >
              {key}
            </button>
          ))}
        </WrapperFeedback>
        <h2>Statistics</h2>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </Container>
    );
  }
}

export default Feedback;
