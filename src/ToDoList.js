import React, { useState } from 'react';
import styles from './App.module.css';

const ToDoList = () => {

    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("") 
    
    const handleChange = (e)=>{
        setNewTask(e.target.value)
    }
    
    const addTask = () => {
        setTodoList([...todoList, newTask])
    }

    return (
        <div>
             <div className={styles.addTask}>{/*  */}
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
             <div className={styles.list}>
                {todoList.map((item, key)=>
                    <div>
                        <h1 key={key}>{item}</h1>
                        <button>Delete</button>
                    </div>
                    
             )}
             </div>{/*  */}
        </div>
        
    );
};

export default ToDoList;