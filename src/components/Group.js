import React from 'react';
import Event from './Event';
import utils from '../utils/utils'
import id from '../utils/id';

function Group(props) {
  
    let events = props.group.events;
    let width = utils.width(events.length);
    let style = { paddingTop : utils.height(props.offset) };

    events = events.map((event, i) => {
      let offset = utils.height(event.start - props.group.start);
      return <Event key={id()} event={event} 
        width={width} offset={offset}/>
    });

    return (
      <div style={style}>
        {events}
      </div>
    );
}

export default Group;
