import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [joke,setJoke]=useState("Loading")
  const [fname,setFN]=useState("raam")
  const [sname,setSN]=useState("lakshman")
  const newjoke=(first,second)=>{
    fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`)     
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2)
  setJoke(res2.value.joke)

    })
  }
  useEffect(()=>{
    newjoke(fname,sname)
  },[fname,sname])
  return (
    <div className="App">
      <input type="text" value={fname} onChange={(e)=>setFN(e.target.value)}></input>
      <input type="text" value={sname} onChange={(e)=>setSN(e.target.value)}></input>
      {/* <button onClick={()=>newjoke(fname,sname)}>get new jokes</button> */}
      <h4>{joke}</h4>
      
    </div>
  );
}

export default App;
