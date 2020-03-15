import React from 'react';
import DayView from './Day';
import time from '../utils/time';
import '../styles/Calendar.css';

function Calendar(props) {
    return (
      <div className="calendar">
        <h1 className="header">
          <span className="title">
            Calendar
          </span>
          <span className="date">
            {time.today()}
          </span>
        </h1>
        <DayView events={props.events}/>
      </div>
    );  
}

export default Calendar;
