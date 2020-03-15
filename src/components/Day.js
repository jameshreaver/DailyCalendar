import React from 'react';
import Group from './Group.js';
import Day from '../models/Day.js';
import utils from '../utils/utils';
import id from '../utils/id';
import '../styles/Day.css';

class DayView extends React.Component {
  
  constructor(props = {events: []}) {
    super();
    this.state = {
      events : props.events
    };
    window.renderDay = e => {
      this.setState({
        events: e
      });
    };
  }
  
  renderGroups(groups) {
    let lastEnd = 0;
    return groups.map(group => {
      let offset = group.start - lastEnd;
      lastEnd = group.end;
      return <Group key={id()} group={group} offset={offset}/>
    });
  }
    
  render () {
    let day = new Day(this.state.events);
    let style = { paddingBottom : utils.padding(day.end) };
    return (
      <div className="day" style={style}>
        {this.renderGroups(day.groups)}
      </div>
    );
  }

}

export default DayView;
