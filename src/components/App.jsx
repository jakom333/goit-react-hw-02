import { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions'
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import styles from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    this.setState(prevState => ({
[event.target.textContent]: prevState[event.target.textContent] + 1,
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
        return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
    return parseInt( (good * 100) / this.countTotalFeedback()) || 0;
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state)
    return (
      <div className={styles.container}>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>
        <Section title='Statistics'>
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
        
      </div>
    )
  }
};

export default App;
