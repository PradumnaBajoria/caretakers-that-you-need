import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "parent", headerName: "Parent Name", width: 190, editable: true },
  {
    field: "child",
    headerName: "Child Name",
    width: 190,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 190,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 190,
    editable: true,
  },
  {
    field: "emailid",
    headerName: "EmailId",
    type: "string",
    width: 200,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
];

const rows = [
  {
    id: 1,
    parent: "Anshul Sharma",
    child: "Ram Sharma",
    gender: "Male",
    age: 6,
    emailid: "anshul@gmail.com",
  },
  {
    id: 2,
    parent: "Pradumna Bajoria",
    child: "Shivam Bajoria",
    gender: "Male",
    age: 8,
    emailid: "pradumna@gmail.com",
  },
  {
    id: 3,
    parent: "Kishan Prajapati",
    child: "Devanshi Prajapati",
    gender: "Female",
    age: 7,
    emailid: "kishan112@gmail.com",
  },
  {
    id: 4,
    parent: "Rohan Mittal",
    child: "Radhika Mittal",
    gender: "Female",
    age: 8,
    emailid: "rohanmittal@gmail.com",
  },
  {
    id: 5,
    parent: "Anshul Sharma",
    child: "Ram Sharma",
    gender: "Male",
    age: 6,
    emailid: "anshul@gmail.com",
  },
  {
    id: 6,
    parent: "Anshul Sharma",
    child: "Ram Sharma",
    gender: "Male",
    age: 6,
    emailid: "anshul@gmail.com",
  },
  {
    id: 7,
    parent: "Anshul Sharma",
    child: "Ram Sharma",
    gender: "Male",
    age: 6,
    emailid: "anshul@gmail.com",
  },
  {
    id: 8,
    parent: "Anshul Sharma",
    child: "Ram Sharma",
    gender: "Male",
    age: 6,
    emailid: "anshul@gmail.com",
  },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
