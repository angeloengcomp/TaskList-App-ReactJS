import React from 'react';
import './style.css'
import { FaPlus } from 'react-icons/fa'


export default function Form(props) {
    return (
        <form action="#" className="form" onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" value={props.newTask} />
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    )
}