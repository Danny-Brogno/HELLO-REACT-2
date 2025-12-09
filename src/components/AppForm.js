import React, { useState } from 'react';
import {FormButtons} from './formButtons.js';
import {ColumnComponent} from './columnComponent.js';

export const AppForm = () => {
  
  // FIRST INPUT
  const [activity,setActivity] = useState('');
  
  const callChangeTextFunction = (e) => {
    setActivity(e.target.value);
  };
  console.log(activity);
  
  // SECOND INPUT 
  const [status,setStatus] = useState('');
  
  const callStatusChangeFunction = (e) => {
    setStatus(e.target.value);
  }
  console.log(status);
  
  return (
    
    <div className="formHeader">
      <form>

        <div className="form-container">
        
          <input type="text" className="bot_input" placeholder="write here" onChange={callChangeTextFunction}></input>
          
          <div className="formDetails">

            <div className="bottomLine">
              {/*COMPONENT INSIDE ANOTHER COMPONENT*/}
              <FormButtons value="Read emails"/>
              <FormButtons value="Send emails"/>
              <FormButtons value="Web parsing"/>
            </div>

            <div className="select-container">
              <select className="jobStatus" onChange={callStatusChangeFunction}>
                <option value="started">
                  START PROCESS
                </option>
                <option value="stopped">
                  STOP PROCESS
                </option>
                <option value="completed">
                  COMPLETED PROCESS
                </option>
              </select>
              <button type="submit" className="submitData">SUBMIT</button>
            </div>
            

          </div>
          <div className="contenitore">
          {/*COMPONENT INSIDE ANOTHER COMPONENT*/}
          <ColumnComponent value="uno" className="uno"/>
          <ColumnComponent value="due" className="due"/>
          <ColumnComponent value="tre" className="tre"/>
          </div>  

        </div>
        
      </form>
      
    </div>
  )
}