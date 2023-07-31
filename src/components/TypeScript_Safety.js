import React from 'react'
import styles from "../App.module.css"
import Person from '../Person'


const TypeScript_Safety = () => {
    const names = [
        {name: 9, age: 21, email: "pedro@gmail.com", isMarried: true, friends: ["jessica ", "jake "]},
        {name: "Jake", age: 25, email: "jake@gmail.com", isMarried: true, friends: ["jessica ", "jane "]},
        {name: "Jessica", age: 45, email: "jassikao@gmail.com", isMarried: false, friends: ["jasmie ", "jake "]},
        {name: "Mike", age: undefined},
        {name: "Dustin", age: undefined},
        {name: "Lukas", age: undefined},
        ]
  return (
    <div className={styles.typeScript}>
        <p>TypeScript_Safety</p>
        {names.map((user, key)=>{
          return (
            <div>
              <Person key={key}
                    name={user.name}
                    age={user.age}
                    email={user.email}
                    isMarried={user.isMarried}
                    friends={user.friends}
                    />
            </div>
          )
           
          
      })} 
    </div>
  )
}

export default TypeScript_Safety