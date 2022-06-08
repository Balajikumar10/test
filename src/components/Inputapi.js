import React, { useEffect, useState } from 'react'

function Inputapi() {
    const [state, setState] = useState([])
    const [storage, setStorage] = useState([])
    const [final, setFinal] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((i) => i.json()).then((u) => setState(u))
    }, [])
    console.log("state", state);

    const changehandler = () => {
        setFinal(state.filter((w) => w.userId == storage))
    }
    console.log("final", final);
    return (
        <div>
            <input type="number" onChange={(u) => setStorage(u.target.value)} />
            <button onClick={changehandler}>click</button>
            <br />
            {
                final.map((o) => {
                    return (
                        <>
                            {o.title}<br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Inputapi