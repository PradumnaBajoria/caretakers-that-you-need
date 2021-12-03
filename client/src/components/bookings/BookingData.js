import {useState,useEffect} from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


export default function DataGridDemo() {
  const columns = [
    {
      field: "parent",
      headerName: "Parent name",
      width: 150,
      editable: true,
    },
    {
      field: "child",
      headerName: "Child name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Emailid",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "fee",
      headerName: "Fee",
      type: "string",
      width: 120,
      editable: true,
    },
    {
      field: "arrival",
      headerName: "Arrival Time",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "departure",
      headerName: "Departure Time",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "advice",
      headerName: "Advice from parent",
      type: "string",
      width: 200,
      editable: true,
    },
  ];
  
  const rows = [
    {
      id: 1,
      parent: "Anshul Sharma",
      child: "Ram Sharma",
      email: "anshul@gmail.com",
      fee: "2000",
      arrival: "12:46 PM",
      departure: "04:00 pM",
      status: "completed",
      advice: "None",
    },
  ];
  
const [a,setA]=useState([]);
const [data,setData]=useState([{
  id: "",
  parent: "",
  child: "",
  email: "",
  fee: "",
  arrival: "",
  departure: "",
  status: "",
  advice: "",
}])




  const retUrl = async () => {
    const res = await axios.get("http://localhost:5000/app/getbook");
    const data = await res.data;
    setA(data);
  };

  useEffect(() => {
    retUrl();
  }, []);

  useEffect(() => {
    console.log("filtered se pehle all recs", a);
    a.map((ele)=>(setData(ele._id,ele.parents,ele.child,ele.email,ele.fee,ele.arrival,ele.departure,ele.status,ele.advise)))
  }, [a]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {/* {console.log(a)} */}
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
//   parent: "Kishan Prajapati",
//   child: "Devanshi prajapati",
//   email: "kishan@gmail.com",
//   fee: "1500",
//   arrival: "01:12 PM",
//   departure: "08:00 PM",
//   status: "booked",
//   advice: "Do not put too much sugar in milk",
// },
// {
//   id: 3,
//   parent: "Pradumna Bajoria",
//   child: "Shivam Bajoria",
//   email: "pradumna@gmail.com",
//   fee: "2500",
//   arrival: "09:30 AM",
//   departure: "07:00 PM",
//   status: "booked",
//   advice: "Put toys around",
// },
// {
//   id: 4,
//   parent: "Sujit maity",
//   child: "Lolita Maity",
//   email: "sujit@gmail.com",
//   fee: "1500",
//   arrival: "10:00 AM",
//   departure: "09:30 PM",
//   status: "progress",
//   advice: "None",
// },