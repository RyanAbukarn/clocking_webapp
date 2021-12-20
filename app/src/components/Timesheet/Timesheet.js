import React from "react";
import { Table, Container } from "react-bootstrap";
import format from 'date-fns/format'
import getFormattedEvents from "../../utils/getFormattedEvents";
import differenceInMinutes from "date-fns/differenceInMinutes";

const Timesheet = ({ eventLogData }) => {
  const events = getFormattedEvents(eventLogData);
  return (
    <Container className="mt-4">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Clocked In Time</th>
            <th>Clocked Out Time</th>
            <th>MInutes Worked</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(events).map((item, key) => {
            const clockedInDate = item.clockIn;
            const clockedOutDate = item.clockOut;
            const hoursWorked = clockedInDate && clockedOutDate && `${differenceInMinutes(clockedOutDate, clockedInDate)} minutes`;
            return (<tr>
              <td>{key}</td>
              <td>{format(clockedInDate, 'dd-mm-yyyy hh:mm:ss')}</td>
              <td>{clockedOutDate && format(clockedOutDate, 'dd-mm-yyyy hh:mm:ss')}</td>
              <td>{hoursWorked}</td>
            </tr>)
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Timesheet;
