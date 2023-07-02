import React from 'react';
import styles from './App.module.css';

const Task = (props) => {
    return (
        <div className={styles.task}>
            <h1>{props.taskName}</h1>
            <button>Complete</button>
            <button onClick={()=>props.deleteTask(props.id)}>Delete</button>

        </div>
    );
};

export default Task;