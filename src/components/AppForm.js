import React from 'react';
import {FormButtons} from './formButtons.js';
import {ColumnComponent} from './columnComponent.js';

export const AppForm = () => {
  return (
    
    <div className="formHeader">
      <form>

        <div className="form-container">
        
          <input type="text" className="bot_input" placeholder="write here"></input>
          
          <div className="formDetails">

            <div className="bottomLine">
              {/*COMPONENT INSIDE ANOTHER COMPONENT*/}
              <FormButtons value="Read emails"/>
              <FormButtons value="Send emails"/>
              <FormButtons value="Web parsing"/>
            </div>

            <div className="select-container">
              <select className="jobStatus">
                <option value="start">
                  START PROCESS
                </option>
                <option value="stop">
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