import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import EditIcon from "material-ui/svg-icons/image/edit";

const dateConverter = (date) => {
  let tmp = new Date(date);
  let day = tmp.getDate();
  let month = tmp.getMonth() + 1;
  let year = tmp.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  let dob = month + '/' + day + '/' + year;

  return dob;
}

const agecalculator = (date) => {
  let dob = new Date(date);
  let today = new Date();

  let timeDiff = Math.abs(today.getTime() - dob.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (diffDays * 0.00273973).toFixed(1);
}

export default ({ headers, data }) => (
  <Table>
    <TableHeader adjustForCheckbox= {true} displaySelectAll ={false}>
      <TableRow>
        {
          headers.map((header, idx) =>
            <TableHeaderColumn key={idx}>{header.name}</TableHeaderColumn>)
        }
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {
        data.map((rowData, idx) =>
          <TableRow  key={idx}>
            <TableRowColumn><a href="/Details">{rowData.first_name + " " + rowData.last_name}</a></TableRowColumn>
            <TableRowColumn>{dateConverter(rowData.dob)}</TableRowColumn>
            <TableRowColumn>{rowData.email}</TableRowColumn>
            <TableRowColumn>{agecalculator(rowData.dob)}</TableRowColumn>
            <TableRowColumn>{rowData.phone}</TableRowColumn>
            <TableRowColumn>{rowData.active ? "Active" : "Inactive"}</TableRowColumn>
            <TableRowColumn><EditIcon /></TableRowColumn>
          </TableRow>
        )
      }
    </TableBody>
  </Table>
);