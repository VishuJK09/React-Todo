import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

// External Component imports
import {AddNewTask} from './Addnewtask';
import {TodoAppList} from './Todoapplist';

export class Todo extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        tasks : props.tasks
      };

      this.upadateList = this.upadateList.bind(this);
      this.removeText = this.removeText.bind(this);
  }

  upadateList(text) {
    const updatedTasks = this.state.tasks;
    updatedTasks.unshift(text);
    this.setState({task: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  removeText(text){
    const updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({task: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks) {
    console.log('updatedTasks');
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks))
  }

  render(){
    return(
      <div className="ui container">
        <Segment inverted>
          <Header as="h3" textAlign="center" color="orange">
            TODO APP
          </Header>
        </Segment>
        <AddNewTask upadateList={this.upadateList} />
        <TodoAppList tasks={this.state.tasks}  remove={this.removeText}/>
      </div>
    );
  }
}
