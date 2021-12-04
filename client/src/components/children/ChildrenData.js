import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


export default function DataGridDemo() {

  const [id, setId] = useState("");
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");


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
      id: id,
      parent: parent,
      child: child,
      gender: gender,
      age: age,
      emailid: email,
    },
    
  ];
  
  const [a, setA] = useState([]);

  const retUrl = async () => {
    const res = await axios.get("http://localhost:5000/app/getchild");
    const data = await res.data;
    setA(data);
  };

  useEffect(() => {
    retUrl();
  }, []);

  useEffect(() => {
    console.log("filtered se pehle all recs", a);
    let temp=1;
    a.map((ele) =>[
      // setData([
      //   ele._id,
      //   ele.parents,
      //   ele.child,
      //   ele.email,
      //   ele.fee,
      //   ele.arrival,
      //   ele.departure,
      //   ele.status,
      //   ele.advise
      // ], ...data),
      
      
      setId(ele._id),
      setParent(ele.parent),
      setChild(ele.child),
      setEmail(ele.email),
      setGender(ele.gender),
      setAge(ele.age)
    ]
    );
    console.log(temp)
    // console.log("DATA", data);
  }, [a]);

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


// {
//   id: 2,
//   parent: "Pradumna Bajoria",
//   child: "Shivam Bajoria",
//   gender: "Male",
//   age: 8,
//   emailid: "pradumna@gmail.com",
// },
// {
//   id: 3,
//   parent: "Kishan Prajapati",
//   child: "Devanshi Prajapati",
//   gender: "Female",
//   age: 7,
//   emailid: "kishan112@gmail.com",
// },
// {
//   id: 4,
//   parent: "Rohan Mittal",
//   child: "Radhika Mittal",
//   gender: "Female",
//   age: 8,
//   emailid: "rohanmittal@gmail.com",
// },
// {
//   id: 5,
//   parent: "Sujit Maity",
//   child: "Lolita Maity",
//   gender: "Female",
//   age: 6,
//   emailid: "sujit@gmail.com",
// },
// {
//   id: 6,
//   parent: "Mihir Patel",
//   child: "Rhea Patel",
//   gender: "Female",
//   age: 6,
//   emailid: "mihir@gmail.com",
// },
// {
//   id: 7,
//   parent: "Bhargav Choudary",
//   child: "charmi Choudary",
//   gender: "Femal",
//   age: 6,
//   emailid: "charmi@gmail.com",
// },
// {
//   id: 8,
//   parent: "Sartak Patel",
//   child: "Shivoham Patel",
//   gender: "Male",
//   age: 6,
//   emailid: "sartak@gmail.com",
// },