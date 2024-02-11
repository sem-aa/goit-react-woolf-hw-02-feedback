import React, { Component } from 'react';
import styles from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
