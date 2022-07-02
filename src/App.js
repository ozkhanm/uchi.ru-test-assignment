import { useState } from "react";

import Header from "./components/header/Header";
import TimeSchedule from "./components/time-schedule/TimeSchedule";
import Footer from "./components/footer/Footer";
import DatePicker from "./components/date-picker/DatePicker";

import { MSECONDS_IN_WEEK, MSECONDS_IN_DAY, SECONDS_IN_HOUR, MSECONDS_IN_SECOND, DAYS_IN_WEEK } from "./constants";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [dateWindow, setDateWindow] = useState(() => getDateWindow(date));
  const [activeCell, setActiveCell] = useState({});
  const [events, setEvents] = useState([]);
  const filteredEvents = events.filter((it) => it.date >= dateWindow.start && it.date <= dateWindow.end);

  function getWeekStart(date) {
    const firstDay = new Date(date - (date.getDay() - 1) * MSECONDS_IN_DAY);
    
    return firstDay;
  };

  function getWeekEnd(date) {
    const firstDay = getWeekStart(date);
    const lastDay = new Date((firstDay / MSECONDS_IN_SECOND + (DAYS_IN_WEEK - 1) * SECONDS_IN_HOUR) * MSECONDS_IN_SECOND);
    
    return lastDay;
  }; 

  function getDateWindow(date) {
    const start = getWeekStart(date);
    const end = getWeekEnd(date);
    const monthChange = start.getMonth() === end.getMonth() ? false : true;
    
    start.setHours(0);
    end.setHours(24);

    start.setMinutes(0);
    end.setMinutes(0);

    start.setSeconds(0);
    end.setSeconds(0);
    
    return {
      start,
      end,
      monthChange
    };
  };

  const coordsToDate = (cell) => {
    const {row, column} = cell;
    const {start} = dateWindow;
    const year = start.getFullYear();
    let month = new Date(start.getFullYear(), start.getMonth(), start.getDate() + column).getMonth();
    const maxDaysInMonth = new Date(year, month + 1, 0).getDate();
    const day = start.getDate() + column;
    const hour = row;

    if (day >= maxDaysInMonth) {
      month--;
    }

    return new Date(year, month, day, hour);
  };

  const checkEqualDates = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate() &&
      date1.getHours() === date2.getHours();
  };

  const getEventSelectStatus = (cell) => {
    if (cell.hasOwnProperty("column")) {
      const calculatedDate = coordsToDate(cell);

      return (filteredEvents.find((it) => {
        const date = new Date(it.date);
        
        date.setMinutes(0);

        if (checkEqualDates(date, calculatedDate)) {
          return true;
        }

        return false;
      }) !== undefined) !== true ? false : true;
    }

    return false;
  };

  const cellClickHandler = (row, column) => {
    setActiveCell({
      row,
      column
    });
  };

  const leftArrowButtonClickHandler = () => {
    const oldDate = Date.parse(date);
    const newDate = new Date(oldDate - MSECONDS_IN_WEEK);
    const newDateWindow = getDateWindow(newDate);

    setDateWindow(newDateWindow);
    setDate(newDateWindow.start);
    setActiveCell({});
  };

  const rightArrowButtonClickHandler = () => {
    const oldDate = Date.parse(date);
    const newDate = new Date(oldDate + MSECONDS_IN_WEEK);
    const newDateWindow = getDateWindow(newDate);

    setDateWindow(newDateWindow);
    setDate(newDateWindow.start);
    setActiveCell({});
  };

  const addButtonClickHandler = () => {
    const userInput = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss", "");

    if (userInput !== null) {
      const newEvent = new Date(userInput);
      
      if (newEvent.toTimeString() !== "Invalid Date") {
        const newEventMonth = newEvent.getMonth();

        newEvent.setMonth(newEventMonth + 1);
        setEvents((prevState) => [...prevState, {date: newEvent}]);
      }
    }
  };

  const todayButtonClickHandler = () => {
    const liveDate = new Date();

    setDateWindow(getDateWindow(liveDate));
    setDate(liveDate);
    setActiveCell({});
  };

  const deleteButtonClickHandler = () => {
    const calculatedDate = coordsToDate(activeCell);
    const deletedEvent = filteredEvents.find((it) => {
      const date = new Date(it.date);
      
      date.setMinutes(0);

      if (checkEqualDates(date, calculatedDate)) {
        return true;
      }

      return false;
    });

    setEvents((prevEvents) => {
      return prevEvents.filter((it) => it !== deletedEvent);
    });
    setActiveCell({});
  };

  return (
    <>
      <Header addButtonClickHandler={addButtonClickHandler} />
      <DatePicker dateWindow={dateWindow} leftArrowButtonClickHandler={leftArrowButtonClickHandler}
        rightArrowButtonClickHandler={rightArrowButtonClickHandler} />
      <TimeSchedule events={filteredEvents} activeCell={activeCell} cellClickHandler={cellClickHandler} />
      <Footer deleteButtonShowStatus={getEventSelectStatus(activeCell)} deleteButtonClickHandler={deleteButtonClickHandler}
        todayButtonClickHandler={todayButtonClickHandler} />
    </>
  );
}

export default App;