import React, { useEffect, useState } from 'react'

function Fetch() {
    const [post, setPost] = useState([])
    const [store, setStore] = useState()
    const [filteredpost, setFilteredpost] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((resp) => resp.json())
            .then((open) => setPost(open));
    }, [])


    const find = () => {
        setFilteredpost(post.filter((x) => x.id == store))
        console.log(filteredpost);
    }

    console.log("111", post);

    return (
        <div>
            <input type="number" onChange={(e) => setStore(e.target.value)}></input><button onClick={find}>find</button><br />
            {post.map((t) => {
                return (
                    <>{t.postId}
                        {t.name}
                        <br />

                    </>
                )
            })}
            {!filteredpost ? <></> : filteredpost.map((u) => {
                return (
                    <>
                        {u.name}
                    </>
                )
            })}
        </div>
    )
}

export default Fetch