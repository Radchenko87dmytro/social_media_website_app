import React from 'react';
import styles from './App.module.css';
import "./App.css"

const Task = (props) => {

    

    return (
        <div className="task"
            //  styles={{backgrounColor: props.completed ? "green" : "white"}}
             >
            
            <h1>{props.taskName}</h1>
             <button onClick={()=>{/*props.completeTask(props.id)*/}}>Complete</button> 
            <button onClick={()=>props.deleteTask(props.id)}>Delete</button>

        </div>
    );
};

export default Task;