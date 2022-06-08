import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Android from './Android';
import TextField from '@mui/material/TextField';
// import Valorcrm from './Valorcrm';
import Important from './Important';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';




const drawerWidth = 240;

export default function Do() {
    const [list, setList] = useState(false);
    const [crm, setCrm] = useState(false);
    const [imp, setImp] = useState(false);
    const [newone, setNewone] = useState([]);
    const [reload, setReload] = useState(false)
    const [time, setTime] = useState("");
    const [y1, setY1] = useState("")


    const handler = () => {
        setList(true)
        setCrm(false)
        setImp(false)

    }
    const clickhandler = () => {
        setCrm(true)
        setList(false)
        setImp(false)

    }

    const port = () => {
        setCrm(false)
        setList(false)
        setImp(true)
        setTime(false)
    }
    const newList = (e) => {
        setNewone(e.target.value);
    }
    const shop = () => {
        let l = JSON.parse(localStorage.getItem("addlist")) || []
        l.push({ newone: newone });
        localStorage.setItem("addlist", JSON.stringify(l))
        console.log(l);
    }

    let m = JSON.parse(localStorage.getItem("addlist")) || []

    const df = (m) => {

        let y1 = []
        y1.push({ "addition": m })
        let ls = localStorage.setItem("addition", JSON.stringify(y1))

        setY1(y1)
        setTime(true)
        setImp(false)
        // console.log(ls);
        // console.log(y1);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >

                <Toolbar>

                    <Typography variant="h6" noWrap component="div">
                        TODO LIST
                    </Typography>

                </Toolbar>

            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >

                <Toolbar />
                <Divider />

                <List>


                    <ListItem >
                        <ListItemButton onClick={port}>

                            <ListItemIcon>
                                Important
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>

                    </ListItem>
                </List>

                {
                    m.map((r) => {
                        { }
                        return (
                            <div>
                                <ListItem >
                                    <ListItemButton onClick={() => df(r.newone)}>
                                        <ListItemIcon>
                                            {r.newone}
                                        </ListItemIcon>
                                        <ListItemText />
                                    </ListItemButton>
                                </ListItem>
                            </div>
                        )
                    })
                }
                <Divider />
                <form onSubmit={shop}>
                    <div>
                        <TextField variant='outlined' style={{ position: "fixed", top: "91%", right: "84%", backgroundColor: "grey" }} type="text" onChange={newList} />

                    </div>
                </form>

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', width: "100px", marginTop: "50px" }}
            >
                { /*{list ? <Android /> : ""}*/}
                {/*{crm ? < Valorcrm /> : ""}*/}
                {imp ? <Important /> : ""}
                {time ? <Android androprops={y1} /> : ""}
            </Box>
        </Box>
    );
}
