import styled from "styled-components";

const TimeScheduleWrapper = styled.div`
  position: relative;
  
  display: flex;
  padding-top: 15px; 
  padding-bottom: 20px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const TimeScheduleList = styled.ul`
  position: absolute;

  padding: 0;
  margin: 0;
  padding-left: 7px;

  list-style: none;
`;

const TimeScheduleListItem = styled.li`
  margin-bottom: 21px;

  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.4px;
  color: #d6d4d4;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ScheduleTable = styled.table`
  margin-top: 5px;
  margin-left: 45px;
  width: 100%;

  border: 0;
  border-collapse: collapse;
`;

const ScheduleTableBody = styled.tbody`
`;

const ScheduleTableRow = styled.tr`
`;

const ScheduleTableCell = styled.td`
  width: 36px;
  height: 30px;

  border: 1px solid #d6d4d4;
`;

const ScheduleTableRadioInput = styled.input`
  display: none;
`;

const ScheduleTableRadioInputLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;

  ${({ vacant }) => vacant && `
    background-color: #EBEDFE; 
  `}

  ${({ active }) => active && `
    background-color: #B3B7FF; 
  `}
`;

const TimeSchedule = ({ events, activeCell, cellClickHandler }) => {
  const DAYS_IN_WEEK = 7;
  const TIME_ZONES = 24;
  const mappedEvents = mapEvents(events);

  function mapEvents(events) {
    return events.map((it) => {
      const date = new Date(it.date);
      const day = date.getDay();
      const hour = date.getHours();
      
      return {
        column: day - 1,
        row: hour
      };
    });
  };

  const getTimeList = () => {
    const timeElements = [];

    for (let i = 0; i <= TIME_ZONES; i++) {
      timeElements.push(
        <TimeScheduleListItem key={`time-list-item-${i}`}>{`${i < 10 ? `0${i}`: i}:00`}</TimeScheduleListItem>
      );
    }

    return (
      <TimeScheduleList>
        { timeElements }
      </TimeScheduleList>
    );
  };

  const getTableBody = (mappedEvents) => {
    const rows = [];

    for (let i = 0; i < TIME_ZONES; i++) {
      const cells = [];

      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        const isActive = (activeCell.row === i) && (activeCell.column === j);
        const isVacant = mappedEvents.findIndex(it => it.row === i && it.column === j) === -1 ? false : true;

        cells.push(
          <ScheduleTableCell key={`table-body-cell-${j}${i}`}>
            <ScheduleTableRadioInputLabel active={isActive} vacant={isVacant} htmlFor={`table-body-cell-${j}${i}`} />
            <ScheduleTableRadioInput type="radio" id={`table-body-cell-${j}${i}`} name="calendar-date" data-row={i} data-column={j} onClick={(evt) => {
              const column = parseInt(evt.target.dataset.column);
              const row = parseInt(evt.target.dataset.row);
              
              cellClickHandler(row, column);
            }} />
          </ScheduleTableCell>
        );
      }

      rows.push(
        <ScheduleTableRow key={`table-body-row-${i}`}>
          { cells }
        </ScheduleTableRow>
      );
    }

    return (
      <ScheduleTableBody>
        { rows }
      </ScheduleTableBody>
    );
  };

  return (
    <TimeScheduleWrapper>
      { getTimeList() }
      <ScheduleTable cols="7">
        { getTableBody(mappedEvents) }
      </ScheduleTable>
    </TimeScheduleWrapper>
  );
};

export default TimeSchedule;