import { useState } from "react";

import Header from "./components/header/Header";
import TimeSchedule from "./components/time-schedule/TimeSchedule";
import Footer from "./components/footer/Footer";
import DatePicker from "./components/date-picker/DatePicker";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [dateWindow, setDateWindow] = useState(() => {
    return getDateWindow(date);
  });
  const [activeCell, setActiveCell] = useState({});
  const currentDate = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
  const [events, setEvents] = useState([
    {
      date: new Date(2022, 6, 1, 2, 35)
    },
    {
      date: new Date(2022, 6, 2, 3, 35)
    },
    {
      date: new Date(2022, 6, 4, 0, 0)
    }
  ]);
  const filteredEvents = events.filter((it) => it.date >= dateWindow.start && it.date <= dateWindow.end);

  function getDateWindow (date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const dateNumber = date.getDate();
    const day = date.getDay();
    const maxDaysInMonth = new Date(year, month + 1, 0).getDate();
    const differToMin = day - 1;
    const differToMax = 7 - day;
    const newStartDateNumber = dateNumber - differToMin < 1 ? 1 : dateNumber - differToMin;
    const newEndDateNumber = dateNumber + differToMax > maxDaysInMonth ? maxDaysInMonth : dateNumber + differToMax;
    const start = new Date(year, month, newStartDateNumber); 
    const end = new Date(year, month, newEndDateNumber);

    return {
      start,
      end
    };
  };

  const getEventSelectStatus = (cell) => {
    return cell.hasOwnProperty("column") !== true ? false : true;
  };

  const cellClickHandler = (row, column) => {
    setActiveCell({
      row,
      column
    });
  };

  return (
    <>
      <Header/>
      <DatePicker date={date} currentDate={currentDate} dateWindow={dateWindow} cellClickHandler={cellClickHandler} />
      <TimeSchedule events={filteredEvents} activeCell={activeCell} cellClickHandler={cellClickHandler} />
      <Footer deleteButtonShowStatus={getEventSelectStatus(activeCell)} />
    </>
  );
}

export default App;