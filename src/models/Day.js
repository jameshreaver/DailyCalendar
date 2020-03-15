import Group from './Group';
import Event from './Event';
import time from '../utils/time';

class Day {
  
  constructor(events = []) {
    this.groups = [];
    this.start  = time.endOfDay();
    this.end    = time.startOfDay();
    for (const event of this.sort(events)) {
      this.add(new Event(event));
    }
  }
  
  add(event) {
    let group = this.findGroup(event);
    group.add(event);
    this.start = Math.min(this.start, group.start);
    this.end = Math.max(this.end, group.end);
  }

  findGroup(event) {
    return this.groups.find(group => {
      return group.overlaps(event);
    }) || this.newGroup();
  }
  
  newGroup() {
    let group = new Group();
    this.groups.push(group);
    return group;
  }
  
  sort(events) {
    events = events.map(time.validate);
    return events.sort((one, two) => {
        return one.start - two.start;
    });
  }
}

export default Day;