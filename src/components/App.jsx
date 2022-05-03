import React, { Component } from 'react';
import lesson_1 from './vocabulary/lesson-one.json';
import LessonOne from './Lesson-1/LessonOne';

export default class App extends Component {
  state = {
    words: lesson_1,
  };
  render() {
    console.log(this.state.words);
    return (
      <div>
        <LessonOne words={this.state.words} />
      </div>
    );
  }
}
