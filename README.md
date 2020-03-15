# Daily Calendar
A single-day calendar for events within working hours.

---

## The problem

This challenge is to render a series of events on a single day calendar, similar to what you’ll find on your favourite calendar app. The solution accepts as input an array of events, objects that contain a start time and an end time. The start and end are minutes since 9am, so 30 is 9:30 am, 120 is 11am, etc. The calendar only shows the working hours window of 9am-6pm for one day. No events should visually overlap; if they collide, they should have equal width.

---

## The solution

The solution is a React-based web application. In the `models` folder are the classes the handle the logic and the data for the program. The `components` folder contains the classes to handle the view for those models.

The `utils` folder has methods to help with the generation of unique ids as keys for the React components, with the formatting of times and dates and computing styling attributes. `tests` contains tests for every class.

Finally, inside `settings.js` are the values that determine the start and end times for a working day and more.


#### Problems addressed
These are the problems the solution addresses:

* __Overlapping events__. Events are sorted into groups of overlapping events while keeping track of the group's overall start and end time. When displayed, the width is split evenly across the number of events each group contains. Event are padded according to their start time compared to the start time of the group. Groups are also padded depending on the time since the end of the previous group.

* __Invalid event times__. While the solution expects an array of events, it doesn't make any assumptions on the values of the start and end times. For instance, events that extend beyond working hours are only added in consideration to the parts within working hours. If the end time precedes the start time, the end time is set to the start time itself.

* __Edge cases__. I developed the solution to consider very short events as edge cases. The description for events is adjusted to fit events that are down to ten minutes. The calendar also supports smaller screen sizes and mobile devices.


#### Further considerations
The calendar view can also be optimised so that if event A overlaps with event B and event C, but B and C do not overlap, then B and C are displayed within the same column. This is done with the introduction of 'columns', representing events within a group that do not overlap and can be displayed together. When an event is added to a group, it is also added to the first column containing no events that overlap with it.

<div style="page-break-after: always;"></div>

---


### Opening the calendar

The calendar comes with all compiled files inside the `build` folder.

Open the following file with a browser:
```
/build/index.html
```

Add events to the calendar with `window.renderDay()`. For example:
```
window.renderDay([{start: 30, end: 120}, {start: 300, end: 330}, {start: 290, end: 330}])
```


### Running tests

If you want to run the test suite, first install all dependencies with:
```
npm install
```

Then run all tests with:
```
npm test
```
---
> Developed by James Reaver in March 2020.