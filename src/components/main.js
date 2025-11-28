import React, { useState } from 'react';
import '../App.css';

export const JobCounter = () => {
  
  // let jobCount = 0;
  // const handleAddJob = () => {
  //   jobCount++;
  //   console.log(jobCount); 
  // }
  
  const [currentNumber, updateNumber] = useState(0);
  
  const [jobMessage, setJobMessage] = useState("No jobs available");
  
  const [inputVal, setInputValue] = useState('');
  
  const [bots1, setBotValues] = useState([
    {id : 2024, botName : "Extraction emails", status:"Running"},
    {id : 1989, botName : "Sending emails", status:"Completed"},
    {id : 1962, botName : "Reading emails", status:"Stopped"},
    {id : 1987, botName : "Forwarding emails", status:"Pending"},
    {id : 2025, botName : "Deleting emails", status:"Running"}
  ]);
  
  const bots2 = ["bots1", "bots2", "bots3"];
  
  // THIS IS TO ADD ANOTHER BOT
  const [newBot, setNewBot] = useState({
    id:"",
    botName: "",
    status: ""
  });
  
  const [show, setShow] = useState(false);
  
  // -----------------------------------------
  
  // Function to determine and set the message based on the count
  function updateJobMessage(newCount) {
    
    let message;
    
    if (newCount === 0) {
      message = `No jobs available`;
    } else if (newCount > 0 && newCount < 5) {
      message = `Few jobs available`;
    } else if (newCount >= 5) {
      message = `Many jobs available`;
    } else if(newCount < 0) {
      message = `You are below zero jobs`;
    }
    setJobMessage(message);
    console.log(message);
  };
  
  // -----------------------------------------
  
  function addJob() {
    let newNumber = currentNumber + 1;
    updateNumber(newNumber);
    updateJobMessage(newNumber);
    console.log(newNumber);
  }
  
  function removeJob() {
    if (currentNumber > 0) { 
      let newNumber = currentNumber - 1;
      updateNumber(newNumber);
      updateJobMessage(newNumber);
      console.log(newNumber);
    } else {
      alert("Job counter is already at 0. Cannot remove any more jobs.");
      console.log("Attempted to remove job at count 0.");
    }
  }
  
  function reset() {
    let newNumber = 0;
    updateNumber(newNumber);
    updateJobMessage(newNumber);
    console.log(newNumber);
  }
  
  // This is the function that handles the 3 <li> in the page: "bots1, bots2, bots3. And the INPUT where you write 'live' "
  function handleChange(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  
  // THIS Adds a bot
  function addBotToList() {
    if (newBot.id.trim() !== "" && newBot.botName.trim() !== "" && newBot.status.trim() !== "" ) {
      setBotValues([...bots1, newBot]);
      setNewBot({id:"", botName:"", status:""});
    }
  }
  
  // THIS DELETES THE ENTIRE JOB IF YOU CLICK ON THE RED BUTTON
  function handleDelete(id) {
    console.log(id);
    setBotValues(bots1.filter(bot=> id !== bot.id));
  }
  
  // -----------------------------------------
  
  return(
    <div className="container">
    
      <h1>Job Counter</h1>
      
      <p>Count: {currentNumber}</p> 
      
      <p>Status: {jobMessage}</p>
      
      <button className="up" onClick={addJob}>Add Job</button>
      
      <button className="up" onClick={removeJob}>Remove Job</button>
      
      <button className="up" onClick={reset}>Reset</button>
      
      <h2>Type something in the input below: {inputVal}</h2>
      
      {/* INPUT 1*/}
      <input className="one" type="text" onChange={handleChange}></input>
      
      {/* These are the 3 <li> that in the page are "bots1, bots2, bots3" */}
      <ul>
        {
          bots2.map( bot=> 
            <li key={bot}> {bot} </li>
          )
        }
      </ul>
      
      {/* ------------------------------------------------------ */}
      <hr></hr>
      
      {/* INPUT 2*/}
      <input className="two" type="text" value={newBot.id} onChange={(e)=>setNewBot({... newBot,id:e.target.value})} placeholder='Enter ID' ></input>
      <input className="two" type="text" value={newBot.botName} onChange={(e)=>setNewBot({... newBot,botName:e.target.value})} placeholder='Enter name' ></input>
      <input className="two" type="text" value={newBot.status} onChange={(e)=>setNewBot({... newBot,status:e.target.value})} placeholder='Enter status' ></input>
      
      {/* This adds the bots to the input above 2*/}
      <button className="add-bot" onClick={addBotToList}>Add bot</button>
      
      {/* button that shows the list of bots on click*/}
      <button className="show-bots" onClick={() => setShow(!show)}>CLICK HERE TO SHOW THE BOTS!</button>
      
      {/* These are the list of jobs with the green button on the right */}
      <ul className="list-of-jobs">
        {
          show && bots1.map( bot => (
            <li key={bot.id} 
            className= {
              bot.status === "Completed" ? "Completed" : 
              bot.status === "Running" ? "Running" :
              bot.status === "Stopped" ? "Stopped" :
              "Pending"
            }
            > 
              {bot.id} - {bot.botName} - {bot.status} 
              <button className="down" onClick={() => handleDelete(bot.id)}>DELETE</button>
            </li>
          ))
        }
      </ul>
      
    </div>
  );
};