import React, { Component } from 'react';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { clickBtn } = this.props;
    return (
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          type="button"
          name="good"
          onClick={clickBtn}
        >
          Good
        </button>
        <button
          className={styles.button}
          type="button"
          name="neutral"
          onClick={clickBtn}
        >
          Neutral
        </button>
        <button
          className={styles.button}
          type="button"
          name="bad"
          onClick={clickBtn}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
