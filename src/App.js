import { useState } from 'react';
import styles from './App.module.css';
import User from './User';
import ToDoList from './ToDoList';


function App() {

  const names = [
    {name: "Pedro", age: 21},
    {name: "Jake", age: 25},
    {name: "Jessica", age: 45},
    {name: "Mike", age: undefined},
    {name: "Dustin", age: undefined},
    {name: "Lukas", age: undefined},
    ]
  
    const  [age, setAge]=useState(0)
    const  [text, setText]=useState("")
    const  [visible, setVisible]=useState(true)
    

    const increace = ()=>{
      setAge(age+1)
    }
    const Decreace = ()=>{
      setAge(age-1)
    }
    const setToZero = ()=>{
      setAge(0)
    }

    const typeText =(e)=>{
      setText(e.target.value)
      console.log(e.target.value)
    }

    // const Visible =()=>{
    //   setVisible(!visible)
    // }
  
  return (
    <div className={styles.App1}>
      <input onChange={typeText}/>
      <p>{text}</p>
      {age}
      <button onClick={increace}>Increace age</button>
      <button onClick={Decreace}>Decreace age</button>
      <button onClick={setToZero}>Set to zero</button>
      <br/>
      <br/>
      <button onClick={()=>setVisible(!visible)}>Show/Hide</button>
      {visible && <p>"HI MY NAME IS DIMA"</p>}

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {names.map((user, key)=>{
          return (
            <div>
              <User key={key}
                    name={user.name}
                    age={user.age}/>
            </div>
          )
           
          
      })} 

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <ToDoList/>


      
    </div>
    
    
  );
}






// const Job = (props) => {
//   return(
//     <div>
//       <div>{props.sarary}</div>
//       <div>{props.position}</div>
//       <div>{props.company}</div>
//     </div>
//   )
  
// }

export default App;
