import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone number",
    width: 200,
    editable: true,
  },
  {
    field: "email",
    headerName: "Emailid",
    width: 200,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 200,
    editable: true,
  },
  {
    field: "exp",
    headerName: "Experience",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Hem Patel",
    phone: "7845128956",
    email: "hem@gmail.com",
    age: "21",
    gender: "Male",
    exp: "2",
  },
  {
    id: 2,
    name: "Mohan sharma",
    phone: "7856124578",
    email: "mohangmail.com",
    age: "25",
    gender: "Male",
    exp: "4",
  },
  {
    id: 3,
    name: "Shivani Bansal",
    phone: "8956231244",
    email: "shivanigmail.com",
    age: "28",
    gender: "Female",
    exp: "3",
  },
  {
    id: 4,
    name: "Ayushi singal",
    phone: "4512788956",
    email: "ayushigmail.com",
    age: "24",
    gender: "Female",
    exp: "2",
  },
  {
    id: 5,
    name: "Suraj singh",
    phone: "1245788956",
    email: "surajgmail.com",
    age: "20",
    gender: "Male",
    exp: "2",
  },
  {
    id: 6,
    name: "Mohit Kumar",
    phone: "7845128956",
    email: "mohitgmail.com",
    age: "19",
    gender: "Male",
    exp: "5",
  },
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
