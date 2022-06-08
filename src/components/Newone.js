import { SettingsRemoteSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

function Newone() {
    const [key, setKey] = useState([]);


    const clickhandler = () => {
        let a = JSON.parse(localStorage.getItem("items")) || []
        a.push({ key: "bala" })
        localStorage.setItem("items", JSON.stringify(a))
    }

    let b = JSON.parse(localStorage.getItem("items")) || []
    console.log(b);

    return (
        <div>
            <button onClick={clickhandler}>click</button>
        </div>
    )
}

export default Newone