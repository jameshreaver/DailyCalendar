import React from 'react';
import utils from '../utils/utils';
import time from '../utils/time';
import '../styles/Event.css';

function Event(props) {
  
  let duration = props.event.end - props.event.start;
  let startTime = time.format(props.event.start);
  let endTime = time.format(props.event.end);
  
  let style = {
    width: props.width,
    marginTop: props.offset,
    height: utils.height(duration),
    paddingTop: utils.top(duration)
  };
  
  return (
    <div className="event" style={style}>
      <div className="description">
        {startTime} - {endTime}
      </div>
    </div>
  );
}

export default Event;
