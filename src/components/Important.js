import React, { useState } from 'react'
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

function Important() {
    const [reload, setReload] = useState(false);
    const [rr, setrr] = useState(false);


    let storage1 = JSON.parse(localStorage.getItem("input")) || [];
    let current = JSON.parse(localStorage.getItem("addition")) || [];

    let important = storage1.filter(
        (x) => x.property == true
    );

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


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {important.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{row.input}</TableCell>
                            <TableCell align="right"><Button onClick={() => clickhandler(row)}>
                                <AddTaskIcon />
                            </Button></TableCell>
                            <TableCell align="right"><Button onClick={() => handler(row)}>
                                <StarsIcon />
                            </Button></TableCell>
                            <TableCell>{row.props}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        //     









    )
}

export default Important