import React, { useState } from 'react';
import './App.css';

const JobCounter = () => {
  
  // let jobCount = 0;
  // const handleAddJob = () => {
  //   jobCount++;
  //   console.log(jobCount); 
  // }
  
  const [first, second] = useState(0);
  
  function handleAddJob() {
    second(first + 1);
    console.log(first + 1);
  }

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {first}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default JobCounter;