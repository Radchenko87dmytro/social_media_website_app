import React, { useState } from 'react';
import styles from './App.module.css';
import Task from './Task';

const ToDoList = () => {

    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("") 
    
    const handleChange = (e)=>{
        setNewTask(e.target.value)
    }
    
    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        }
        setTodoList([...todoList, task])
    }
    console.log(todoList);
    
    const deleteTask = (id)=>{
        setTodoList(todoList.filter((task) => task.id !== id))

        //const newTodoList = todoList.filter((task) => {
            // if(task===id){
            //     return false 
            // } else {
            //     return true
            // }
            //return task !== id

        //})
        //setTodoList(newTodoList)
    }

    return (
        <div>
             <div className={styles.addTask}>{/*  */}
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
             <div className={styles.list}>
                {todoList.map((task, key)=>{
                    return(
                        <Task taskName={task.taskName}
                              id={task.id}
                              key={key}
                              deleteTask={deleteTask}
                              />
                    
                    )
                })}
             </div>{/*  */}
        </div>
        
    );
};

export default ToDoList;