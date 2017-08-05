import React, { Component } from 'react';
import {Todo} from './components/main';

var taskList = ["Task 1", "Task 2", "Task 3"];

var tasks = localStorage.getItem('storedTasks');

if(tasks) {
  taskList = JSON.parse(tasks)
}

class App extends Component {
  render() {
    return (
      <div>
        <Todo tasks={taskList} />
      </div>
    );
  }
}

export default App;
