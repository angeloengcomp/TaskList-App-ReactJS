import React, { Component } from 'react'
import './Main.css'


import { FaEdit, FaWindowClose } from 'react-icons/fa';

import { FaPlus } from 'react-icons/fa'

export default class Main extends Component {
    state = {
        newTask: '',
        tasks: [],
        index: -1,


    }


    // load localStorage
    componentDidMount(){
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        if (!tasks) return;
        this.setState({ tasks})
    }

    // send to localStorage
    componentDidUpdate(prevProps, prevState) {
        const {tasks}=this.state

        if(tasks === prevState.tasks) return;
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    // sended to localStorage



    handleSubmit = (e) => {
        e.preventDefault()
        const { tasks, index } = this.state
        let { newTask } = this.state;
        newTask = newTask.trim()

        const newTasks = [...tasks]


        if (index === -1) {
            // cria uma nova tarefa e seta o input com vazio
            this.setState({
                tasks: [...newTasks, newTask],
                newTask: ''
            })
        } else {
            newTasks[index] = newTask

            this.setState({
                tasks: [...newTasks],
                index: -1
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            newTask: e.target.value,
        })
    }

    handleEdit = (e, index) => {
        const { tasks } = this.state
        // console.log('edit', index)
        this.setState({
            index: index,
            newTask: tasks[index]
        })
    }

    handleDelete = (e, index) => {
        // console.log('delete', index)
        const { tasks } = this.state
        const newTasks = [...tasks]

        // remove 1 element da index fornecida
        newTasks.splice(index, 1)

        this.setState({
            tasks: [...newTasks],
        })
    }


    render() {
        const { newTask, tasks } = this.state
        return (
            <div className="main">
                <h1>Task List</h1>
                <form action="#" className="form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={newTask} />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>
                <ul className="tasks">
                    {tasks.map((task, index) =>
                        <li key={task}>
                            {task}
                            <div>

                                <FaEdit
                                    onClick={(e) => this.handleEdit(e, index)}
                                    className="edit"
                                />

                                <FaWindowClose
                                    onClick={(e) => this.handleDelete(e, index)}
                                    className="close"
                                />

                            </div>
                        </li>

                    )}
                </ul>
            </div>

        )
    }
}