import React, { useState, useEffect } from 'react'

function Fetchapi() {
    const [state, setState] = useState([])
    const [submit, setSubmit] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((res) => res.json()).then((val) => setSubmit(val))
    }, [])
    console.log("abc", submit);
    return (
        <div>
            {submit.map((i) => {
                return (
                    <>
                        {i.postId}<br />
                        {i.name}<br />
                    </>

                )
            })}
        </div>
    )
}

export default Fetchapi