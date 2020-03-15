import time from '../utils/time';

class Group {
  
  constructor(
    start = time.endOfDay(),
    end = time.startOfDay()
  ) {
    this.start  = start;
    this.end    = end;
    this.events = [];
  }
  
  add(event) {
    this.start = Math.min(this.start, event.start);
    this.end = Math.max(this.end, event.end);
    this.events.push(event);
  }
  
  overlaps(event) {
    return this.start < event.end 
       && event.start < this.end;
  }
  
}

export default Group;