import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './style.css'


export default function Tasks(props) {

    return (
        <ul className="tasks">
            {props.tasks.map((task, index) =>
                <li key={task}>
                    {task}
                    <div>

                        <FaEdit
                            onClick={(e) => props.handleEdit(e, index)}
                            className="edit"
                        />

                        <FaWindowClose
                            onClick={(e) => props.handleDelete(e, index)}
                            className="close"
                        />

                    </div>
                </li>

            )}
        </ul>
    )
}

