import { useState } from "react";
import styled from "styled-components";

import DatePicker from "../date-picker/DatePicker";
import TimeSchedule from "../time-schedule/TimeSchedule";
import Footer from "../footer/Footer";

const CalendarWrapper = styled.div`
`;

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [dateWindow, setDateWindow] = useState(() => {
    return getDateWindow(date);
  });

  function getDateWindow (date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const dateNumber = date.getDate();
    const day = date.getDay();
    const maxDaysInMonth = new Date(year, month + 1, 0).getDate();
    const differToMin = day - 1;
    const differToMax = 7 - day;
    const newStartDateNumber = dateNumber - differToMin < 1 ? `` : dateNumber - differToMin;
    const newEndDateNumber = dateNumber + differToMax > maxDaysInMonth ? maxDaysInMonth : dateNumber + differToMax;
    const start = new Date(year, month, newStartDateNumber);
    const end = new Date(year, month, newEndDateNumber);

    return {
      start,
      end
    };
  };

  return (
    <CalendarWrapper>
      <DatePicker date={date} dateWindow={dateWindow} />
      <TimeSchedule />
      <Footer/>
    </CalendarWrapper>
  );
};

export default Calendar;