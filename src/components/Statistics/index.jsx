import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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
};

export default Statistics;
