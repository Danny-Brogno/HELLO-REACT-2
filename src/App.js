import React, { useState } from 'react';
import './App.css';

const JobCounter = () => {
  
  // let jobCount = 0;
  // const handleAddJob = () => {
  //   jobCount++;
  //   console.log(jobCount); 
  // }
  
  const [currentNumber, updateNumber] = useState(0);
  const [jobMessage, setJobMessage] = useState("No jobs available");
  const [inputVal, setInputValue] = useState('');
  const [bots1, setBotValues] = useState([
    {id : 1, botName : "Extraction emails", status:"Running"},
    {id : 2, botName : "Sending emails", status:"Completed"},
    {id : 3, botName : "Reading emails", status:"Stopped"}
  ]);
  const bots2 = ["bots1", "bots2", "bots3"];
  
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
    let newNumber = currentNumber - 1;
    updateNumber(newNumber);
    updateJobMessage(newNumber);
    console.log(newNumber);
  }
  
  function reset() {
    let newNumber = 0;
    updateNumber(newNumber);
    updateJobMessage(newNumber);
    console.log(newNumber);
  }
  
  function handleChange(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  
  // -----------------------------------------
  
  return(
    <div>
    
      <h1>Job Counter</h1>
      
      <p>Count: {currentNumber}</p> 
      
      <p>Status: {jobMessage}</p>
      
      <button onClick={addJob}>Add Job</button>
      
      <button onClick={removeJob}>Remove Job</button>
      
      <button onClick={reset}>Reset</button>
      
      <h2>Type something in the input below: {inputVal}</h2>
      
      <input type="text" onChange={handleChange}></input>
      
      <ul>
        {
          bots2.map( bot=> <li key={bot}> {bot} </li>)
        }
      </ul>
      
      <ul>
        {
          bots1.map( bot=> <li>{bot.id} - {bot.botName} - {bot.status}</li>)
        }
      </ul>
      
    </div>
  );
};

export default JobCounter;