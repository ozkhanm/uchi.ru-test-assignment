import styled from "styled-components";

const DatePickerWrapper = styled.div`
`;

const DateControlsWrapper = styled.div`
`;

const ButtonArrowLeft = styled.button`
`;

const ButtonArrowRight = styled.button`
`;

const DateInfo = styled.p`
`;

const DatePicker = ({date, dateWindow}) => {
  const daysOfWeekShortnames = {
    "1": "M",
    "2": "T",
    "3": "W",
    "4": "T",
    "5": "F",
    "6": "S",
    "7": "S"
  };
  const months = {
    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "Jule",
    "7": "August",
    "8": "September",
    "9": "October",
    "10": "November",
    "11": "December"
  };

  const getDaysShortnamesList = (daysShortnames) => {
    const daysShortnamesElements = [];
    
    Object.values(daysShortnames).forEach((it, index) => daysShortnamesElements.push(
      <li key={`days-shortnames-list-${index}`}>{it}</li>
    ));

    return (
      <ul>
        { daysShortnamesElements }
      </ul>
    );
  };

  const getDateSliceList = (dateWindow) => {
    const {start, end} = dateWindow;
    const startDate = new Date(start).getDate();
    const endDate = new Date(end).getDate();
    const dateSliceElements = [];

    for (let i = 0; i <= endDate - startDate; i++) {
      dateSliceElements.push(
        <li key={`date-slice-list-${i}`}>{startDate + i}</li>
      );
    }

    return (
      <ul>
        { dateSliceElements }
      </ul>
    );
  };

  return (
    <DatePickerWrapper>
      { getDaysShortnamesList(daysOfWeekShortnames) }
      { getDateSliceList(dateWindow) }
      <DateControlsWrapper>
        <ButtonArrowLeft></ButtonArrowLeft>
        <DateInfo>{`${months[date.getMonth()]} ${date.getFullYear()}`}</DateInfo>
        <ButtonArrowRight></ButtonArrowRight>
      </DateControlsWrapper>
    </DatePickerWrapper>
  );
};

export default DatePicker;