import styles from './App.module.css';
import User from './User';


function App() {

  const names = [
    {name: "Pedro", age: 21},
    {name: "Jake", age: 25},
    {name: "Jessica", age: 45},
    {name: "Mike", age: undefined},
    {name: "Dustin", age: undefined},
    {name: "Lukas", age: undefined},
    ]
  
  
  return (
    <div className={styles.App1}>
      {names.map((user, key)=>{
          return (
            <div>
              <User name={user.name}
                    age={user.age}/>
            </div>
          )
           
          
      })} 


      <br></br>
      <br></br>
      <br></br>
      <br></br>



      {/* <Job sarary={900} position="Senior SDE" company="Amazon"/>
      <Job sarary={1200} position="Junior SDE" company="Google"/>
      <Job sarary={1000} position="Project Manager" company="Netflix"/> */}
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
