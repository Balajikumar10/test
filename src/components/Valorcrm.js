import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import AddTaskIcon from '@mui/icons-material/AddTask';
import StarsIcon from '@mui/icons-material/Stars';
import { TextField, Button } from '@mui/material';
const Valorcrm = (props) => {
    const [input, setInput] = useState([]);
    const [data, setData] = useState([]);
    const [storage, setStorage] = useState([]);
    const [reload, setReload] = useState(false)
    const [rr, setrr] = useState(false)
    // const [dele, setDele] = useState([]);

    const even = (e) => {
        setInput(e.target.value);
    };
    const list = (x) => {

        // setData((old) => {
        // return [...old, input];
        let storage = JSON.parse(localStorage.getItem("crm")) || []
        storage.push({ input, completed: false, task: x.input, property: false })
        localStorage.setItem("crm", JSON.stringify(storage))

        // console.log(stole);

        // });

        setInput("");


    }
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
        let a = JSON.parse(localStorage.getItem("crm")) || [];
        // a.push(x)
        // localStorage.setItem("pendi1", JSON.stringify(a))
        // window.location.reload()
        console.log(a);
        let index = a.findIndex((a) => a.input === x.input)
        a[index].completed = !a[index].completed
        localStorage.setItem("crm", JSON.stringify(a))
        setReload(!reload)
        // console.log(a);
    }


    const handler = (x) => {
        let a = JSON.parse(localStorage.getItem("crm")) || [];
        // a.push(x)
        // localStorage.setItem("pendi1", JSON.stringify(a))
        // window.location.reload()

        let index = a.findIndex((y) => y.input === x.input)
        a[index].property = !a[index].property
        localStorage.setItem("crm", JSON.stringify(a))
        setrr(!rr)
        // console.log(a);
    }
    // const click = (x) => {
    //     let a = JSON.parse(localStorage.getItem("important")) || [];
    //     // a.push(x)
    //     // localStorage.setItem("pendi1", JSON.stringify(a))
    //     // window.location.reload()

    //     let filter = a.filter((y) => y.input == x.input);
    //     let ind = a.findIndex((a) => a.input === x.input)
    //     a[ind].property = !a[ind].property
    //     localStorage.setItem("important", JSON.stringify(a))
    //     setrr(!rr)
    //     // console.log(a);

    // }


    // const deleteItem1 = (id) => {
    //     // console.log("deleted");
    //     setStorage((y) => {
    //         return y.filter((arrElem, index) => {
    //             return index !== id;
    //         })
    //     })
    // }

    let storage1 = JSON.parse(localStorage.getItem("crm")) || []
    let completed1 = JSON.parse(localStorage.getItem("pendi1")) || []

    return (

        <div>Android
            <h1>Valor Crm</h1>
            <br></br>


            {
                storage1.filter((x) => x.completed == false && x.property == false).map((c) => {
                    return (
                        <div>
                            <h4>{c.input}<Button onClick={() => clickhandler(c)}><AddTaskIcon /></Button><Button onClick={() => handler(c)}><StarsIcon /></Button></h4>

                        </div>
                    )
                })
            }
            <h3>Completed</h3>
            {
                storage1.filter((x) => x.completed == true).map((c) => {
                    return (
                        <div>
                            <h4>{c.input}<Button onClick={() => clickhandler(c)}><AddTaskIcon /></Button><Button onClick={() => handler(c)}><StarsIcon /></Button></h4>

                        </div>
                    )
                })
            }




            <h3>Important</h3>
            {
                storage1.filter((x) => x.property == true).map((c) => {
                    return (
                        <div>
                            <h4>{c.input}<Button onClick={() => clickhandler(c)}><AddTaskIcon /></Button><Button onClick={() => handler(c)}><StarsIcon /></Button></h4>
                        </div>
                    )
                })
            }
            <TextField variant='outlined' style={{ width: "900px", marginTop: "300px" }} type="text" value={input} placeholder='Add' onChange={even} />
            <Button onClick={list}>add</Button>
        </div >
    )
}

export default Valorcrm