import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className='timeline-event'>
      <h3 className='event-person'>{props.person}</h3>
      <p className='event-status'>{props.status}</p>
      <section className='event-time'><Timestamp time={props.timestamp}/></section>
    </div>
  );
}

export default TimelineEvent;