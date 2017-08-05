import React from 'react';
import { Input } from 'semantic-ui-react';


export class AddNewTask extends React.Component {
  constructor(){
    super();

    this.justSubmitted = this.justSubmitted.bind(this);
  }


  justSubmitted(event) {
    event.preventDefault();

    const input = event.target.querySelector('input');
    const value = input.value;
    input.value = "";
    this.props.upadateList(value);
  }
  render(){
    return(
      <div >
        <form onSubmit={this.justSubmitted}>
        <Input focus placeholder='Add New Tasks...' />
        </form>
      </div>
    );
  }
}
