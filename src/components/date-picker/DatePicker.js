import styled from "styled-components";

import { DAYS_OF_WEEK_SHORTNAMES, MONTHS, DAYS_IN_WEEK } from "../../constants";

const DatePickerWrapper = styled.div`
  padding-left: 50.5px;
  padding-right: 15px;
  padding-top: 7.5px;
  padding-bottom: 7px;

  background-color: #F6F6F6;

  border-top: 1px solid #d6d4d4;
  border-bottom: 1px solid #d6d4d4;

  @media screen and (min-width: 740px) {
    border-left: 1px solid #d6d4d4;
    border-right: 1px solid #d6d4d4;
  }
`;

const DateControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 3px;
`;

const Button = styled.button`
  background-color: #F6F6F6;
  background-position: center;
  background-repeat: no-repeat;

  border: 0;
`;

const ButtonArrowLeft = styled(Button)`
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='14px' height='14px'><line stroke='%23FF3130' stroke-width='2' x1='6' x2='11' y1='6' y2='11'/><line stroke='%23FF3130' stroke-width='2' x1='11' x2='6' y1='3' y2='7'/></svg>");
`;

const ButtonArrowRight = styled(Button)`
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='14px' height='14px'><line stroke='%23FF3130' stroke-width='2' x1='11' x2='6' y1='6' y2='11'/><line stroke='%23FF3130' stroke-width='2' x1='6' x2='11' y1='3' y2='7'/></svg>");
`;

const DateInfo = styled.p`
  display: flex;
  margin: 0;

  font-size: 12px;
`;

const DaysShortnamesList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 7.5px;

  list-style: none;
`;

const DaysShortnamesListItem = styled.li`
  margin-right: 5%;
  width: 10%;

  font-size: 8px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`;

const DateSliceList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;

  list-style: none;
`;

const DateSliceListItem = styled.li`
  position: relative;

  margin-right: 5%;
  width: 10%;
  height: 25px;
  
  font-size: 14px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`;

const DateListItemText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translateX(-50%) translateY(-50%);
`;

const DateListItemTextWrapper = styled.p`
  height: 23px;
  width: 23px;
  margin: 0 auto;

  ${({ active }) => active && `
    color: #fff;

    background-color: red;

    border: 1px solid red;
    border-radius: 50%;
  `}
`;

const DatePicker = ({ dateWindow, leftArrowButtonClickHandler, rightArrowButtonClickHandler }) => {
  const getDaysShortnamesList = () => {
    const daysShortnamesElements = [];
    
    Object.values(DAYS_OF_WEEK_SHORTNAMES).forEach((it, index) => daysShortnamesElements.push(
      <DaysShortnamesListItem key={`days-shortnames-list-${index}`}>{it}</DaysShortnamesListItem>
    ));

    return (
      <DaysShortnamesList>
        { daysShortnamesElements }
      </DaysShortnamesList>
    );
  };

  const getDateSliceList = (dateWindow) => {
    const {start} = dateWindow;
    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const startDate = start.getDate();
    const dateSliceElements = [];
    const currentDate = new Date();

    for (let i = 0; i < DAYS_IN_WEEK; i++) {
      const iterDate = new Date(startYear, startMonth, startDate + i);
      const isActive = (iterDate.getDate() === currentDate.getDate()) && (iterDate.getMonth() === currentDate.getMonth()) && (iterDate.getFullYear() === currentDate.getFullYear());

      dateSliceElements.push(
        <DateSliceListItem key={`date-slice-list-${i}`}>
          <DateListItemTextWrapper active={isActive}>
            <DateListItemText>{iterDate.getDate()}</DateListItemText>
          </DateListItemTextWrapper>
        </DateSliceListItem>
      );
    }

    return (
      <DateSliceList>
        { dateSliceElements }
      </DateSliceList>
    );
  };

  const getDateInfoText = (dateWindow) => {
    const {start, end, monthChange} = dateWindow;
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    return !monthChange ? `${MONTHS[startMonth]} ${start.getFullYear()}` : `${MONTHS[startMonth]} ${start.getFullYear()} - ${MONTHS[endMonth]} ${end.getFullYear()}`;
  };

  return (
    <DatePickerWrapper>
      { getDaysShortnamesList() }
      { getDateSliceList(dateWindow) }
      <DateControlsWrapper>
        <ButtonArrowLeft onClick={leftArrowButtonClickHandler} />
        <DateInfo>{ getDateInfoText(dateWindow) }</DateInfo>
        <ButtonArrowRight onClick={rightArrowButtonClickHandler} />
      </DateControlsWrapper>
    </DatePickerWrapper>
  );
};

export default DatePicker;