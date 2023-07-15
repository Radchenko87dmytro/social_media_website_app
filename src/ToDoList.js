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
            // id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            id: todoList.length  + 1,
            taskName: newTask,
            completed: false,
        }
        setTodoList([...todoList, task])
    }
    //console.log(todoList);
    
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

    // const completeTask = (id) =>{
    //     setTodoList(
    //         todoList.map((task) =>{
    //             if(task.id===id){
    //                 return { ...task, completed: true}
    //             }else{
    //                 return task
    //             }
    //         })
    //     )
    // }

    return (
        <div>
             <div className={styles.addTask}>{/*  */}
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
             <div className={styles.list}>
                {todoList.map((task, index)=>{
                    return(
                        <Task taskName={task.taskName}
                            id={task.id}
                            key={index}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            //   completeTask={completeTask}
                              />
                    
                    )
                })}
             </div>{/*  */}
        </div>
        
    );
};

export default ToDoList;