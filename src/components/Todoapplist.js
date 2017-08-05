import React from 'react';
import { List, Icon } from 'semantic-ui-react'

export class TodoAppList extends React.Component {
  constructor(){
    super();

    this.remove = this.remove.bind(this);
  }
  remove(elem){
    const value = elem.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }

  render(){
    const items = this.props.tasks.map((elem, i) => {
      return  <List.Item key={i}><span>{elem}</span> <Icon name="remove" onClick={this.remove} style={{verticalAlign: 'inherit', cursor : 'pointer'}}/></List.Item>
    })
    return(
      <div>
        <List bulleted className="lists">
          {items}
        </List>
      </div>
    );
  }
}
