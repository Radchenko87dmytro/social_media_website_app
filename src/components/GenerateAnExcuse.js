import React from 'react';
import styles from "../App.module.css";
import  Axios  from 'axios';
import { useEffect, useState } from 'react';

const GenerateAnExcuse = () => {

  const[party, setParty] = useState("")

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setParty(res.data[0].excuse);
      console.log(party);
    })
  }

  return (
    <div className={styles.Excuse}>
      Generate AnExcuse
      <button onClick={()=>fetchExcuse("party")}>Party</button>
      <button onClick={()=>fetchExcuse("family")}>Family</button>
      <button onClick={()=>fetchExcuse("office")}>Office</button>

      <p>{party}</p>
    </div>
  )
}

export default GenerateAnExcuse