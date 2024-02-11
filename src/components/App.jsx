import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from 'components/Section';
import Notification from './Notification';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  clickBtn = e => {
    const grade = e.target.name;
    this.setState(prevState => ({
      ...prevState,
      [grade]: prevState[grade] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total ? Math.floor((this.state.good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions clickBtn={this.clickBtn} />
        </Section>
        {total ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
