import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <div>
                {props.text} <button onClick={() => {
                    props.onSelect(props.id);

                }}>-</button>

                <i className="fa fa-times" aria-hidden="true" />

            </div>

        </div>
    )
}

export default Todo