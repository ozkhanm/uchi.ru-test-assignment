import styled from "styled-components";

const TimeScheduleWrapper = styled.div`
`;

const TimeScheduleList = styled.ul`
`;

const TimeScheduleListItem = styled.li`
`;

const ScheduleTable = styled.table`
`;

const ScheduleTableBody = styled.tbody`
`;

const ScheduleTableRow = styled.tr`
`;

const ScheduleTableCell = styled.td`
`;

const TimeSchedule = () => {
  const DAYS_IN_WEEK = 7;
  const TIME_ZONES = 25;

  const getTimeList = () => {
    const timeElements = [];

    for (let i = 0; i < 25; i++) {
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

  const getTableBody = () => {
    const rows = [];

    for (let i = 0; i < TIME_ZONES; i++) {
      const cells = [];

      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        cells.push(
          <ScheduleTableCell key={`table-body-cell-${j}`} />
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
    )
  };

  return (
    <TimeScheduleWrapper>
      { getTimeList() }
      <ScheduleTable cols="7">
        { getTableBody() }
      </ScheduleTable>
    </TimeScheduleWrapper>
  );
};

export default TimeSchedule;