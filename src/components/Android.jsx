import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import AddTaskIcon from "@mui/icons-material/AddTask";
import StarsIcon from "@mui/icons-material/Stars";
import { TextField, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GradeIcon from '@mui/icons-material/Grade';

const Android = (props) => {
  console.log("props", props);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [storage, setStorage] = useState([]);
  const [reload, setReload] = useState(false);
  const [rr, setrr] = useState(false);

  const even = (e) => {
    console.log(e.target.name);
    setInput(e.target.value);
  };
  const list = (x) => {
    // setData((old) => {
    // return [...old, input];
    let storage = JSON.parse(localStorage.getItem("input")) || [];

    storage.push({
      input,
      completed: false,
      task: x.input,
      property: false,
      props: props.androprops[0].addition,
    });

    localStorage.setItem("input", JSON.stringify(storage));

    // console.log(stole);

    // });

    setInput("");
  };
  // const deleteItem = (id) => {
  //     console.log("deleted");
  //     setData((old) => {
  //         return old.filter((arrElem, index) => {
  //             return index !== id;
  //         })
  //     })
  // }
  const clickhandler = (x) => {
    console.log(x.input);
    let a = JSON.parse(localStorage.getItem("input")) || [];

    let index = a.findIndex((a) => a.input === x.input);
    a[index].completed = !a[index].completed;
    localStorage.setItem("input", JSON.stringify(a));
    setReload(!reload);
  };

  const handler = (x) => {
    let a = JSON.parse(localStorage.getItem("input")) || [];
    let index = a.findIndex((y) => y.input === x.input);
    a[index].property = !a[index].property;
    localStorage.setItem("input", JSON.stringify(a));
    setrr(!rr);
  };

  // const deleteItem1 = (id) => {
  //     // console.log("deleted");
  //     setStorage((y) => {
  //         return y.filter((arrElem, index) => {
  //             return index !== id;
  //         })
  //     })
  // }

  let storage1 = JSON.parse(localStorage.getItem("input")) || [];
  let completed1 = JSON.parse(localStorage.getItem("pendi1")) || [];
  let tasks = JSON.parse(localStorage.getItem("input")) || [];
  let current = JSON.parse(localStorage.getItem("addition")) || [];
  let core = JSON.parse(localStorage.getItem("important")) || [];
  console.log("sdsdsd", core);

  // let currenttask = tasks.filter((x) => {
  //     return current.some((y) => {
  //         return x.props == y.addition
  //     })
  // })

  let completed = storage1.filter(
    (x) => x.completed == true && x.props == current[0].addition
  );
  let important = storage1.filter(
    (x) => x.property == true && x.props == current[0].addition
  );

  let ball = JSON.parse(localStorage.getItem("addition"));
  return (

    <div >
      <div style={{ position: "fixed", top: "90%" }}>
        <TextField
          variant="outlined"
          name="add"
          style={{ width: "1000px" }}
          type="text"
          value={input}
          placeholder="Add"
          onChange={even}
        /><Button onClick={list}>add</Button></div>
      <br></br>
      {ball.map((h) => {
        return (
          <>
            {h.addition}
          </>
        )
      })}

      <TableContainer>
        <Table >
          <TableHead style={{ width: "1000px", backgroundColor: "#fae0a5" }}>
            {storage1
              .filter(
                (y) =>
                  y.props == current[0].addition
              )
              .map((x) => {
                return (
                  <>
                    <TableRow><TableCell>{x.input}</TableCell>

                      <TableCell><Button onClick={() => clickhandler(x)}>
                        <AddTaskIcon />
                      </Button>
                      </TableCell>
                      <TableCell><Button onClick={() => handler(x)}>
                        {x.property === true ? <StarsIcon /> : <GradeIcon />}
                      </Button>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
          </TableHead >
        </Table>

      </TableContainer>


      <h1>completed</h1>
      <TableContainer >
        <Table >
          <TableHead style={{ width: "1000px", backgroundColor: "#c2eaea" }}>
            {completed.map((u) => {
              return (
                <>

                  <TableRow><TableCell>{u.input}</TableCell>
                    <TableCell><Button onClick={() => clickhandler(u)}>
                      <AddTaskIcon />
                    </Button></TableCell>
                    <TableCell><Button onClick={() => handler(u)}>
                      <GradeIcon />
                    </Button></TableCell>
                  </TableRow>

                </>
              );
            })}
          </TableHead>
        </Table>
      </TableContainer>
      {
        completed.map((u) => {
          return (
            <>
              {/*  <h2>
                {u.input}
                <Button onClick={() => clickhandler(u)}>
                  <AddTaskIcon />
                </Button>{" "}
                <Button onClick={() => handler(u)}>
                  <StarsIcon />
                </Button>
                <br />
          </h2>*/}
            </>
          );
        })
      }
    </div >
  );
};

export default Android;
