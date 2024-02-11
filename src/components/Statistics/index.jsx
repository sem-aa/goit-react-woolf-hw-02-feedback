import React, { Component } from 'react';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={styles.statisticsContainer}>
        <div className={styles.statisticsItem}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
        <p className={styles.statisticsLabel}>Total: {total}</p>
        <p className={styles.statisticsLabel}>
          Positive Feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
}

export default Statistics;
