import React, { useState } from 'react';
import styles from '../App.module.css';
//import "./App.css"

const Task = (props) => {

    const [completed, setColor] = useState(false)
    const colorHandler =()=>{
        setColor(!completed)
    }
    console.log(completed);
    return (
        <div className={completed ? styles.task:styles.task1} //  "task"
        //styles={{backgrounColor: completed ? "green" : "white" }}   styles={{backgrounColor: props.completed ? "green" : "white"}}
             >
            
            <h1>{props.taskName}</h1>
              <button onClick={colorHandler}>Complete</button> {/*props.completeTask(props.id) */}
            <button onClick={()=>props.deleteTask(props.id)}>Delete</button>

        </div>
    );
};

export default Task;