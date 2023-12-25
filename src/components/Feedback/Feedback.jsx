import { FeedbackOptions } from 'components/FeedbackOption/FeedbackOption';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage() || 0;

    return (
      <>
        <section>
          <h2>Please, leave feedback!</h2>
          <FeedbackOptions
            options={options}
            onHandleFeedback={this.onAddFeedback}
          />
        </section>
        <div>
          <Statistics
            goodCounter={good}
            neutralCounter={neutral}
            badCounter={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </div>
      </>
    );
  }
}
