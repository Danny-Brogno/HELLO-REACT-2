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
  
  // -----------------------------------------
  
  return(
    <div>
      <h1>Job Counter</h1>
      <p>Count: {currentNumber}</p> 
      <p>Status: {jobMessage}</p>
      <button onClick={addJob}>Add Job</button>
      <button onClick={removeJob}>Remove Job</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default JobCounter;