import { useState, useEffect } from 'react';
import styles from './App.module.css';
import User from './User';
import ToDoList from './ToDoList';
import Axios from 'axios';


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

    useEffect(()=>{
      console.log("COMPONENT MOUNTED");

      return () => {
        console.log("COMPONENT UNMOUNTED");
      }

    }, [])
    

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
      //console.log(e.target.value)
    }

    // fetch("https://catfact.ninja/fact")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })

    const [catFact, setCatFact] = useState("")

    const fetchCatFact = () => {
      Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
    }

    useEffect(() => {
      fetchCatFact()
    }, [])


    const [predictedAge, setPredictedAge] = useState(null)
    const [name, setName] = useState("")
    const fetchData = () =>{
      Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        setPredictedAge(res.data);
      })
    }
  
  return (
    <div className={styles.App1}>

      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
      
      <br/>
      <br/>

      <input placeholder='Ex. Perdo...'
             onChange={(event)=>{
              setName(event.target.value)
              //styles={{padding: "20 px" }}
             }}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>

      <br/>
      <br/>

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
