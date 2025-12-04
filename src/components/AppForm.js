import React from 'react';
import {FormButtons} from './formButtons.js';

export const AppForm = () => {
  return (
    <div className="formHeader">
      <form>
        <input type="text" className="bot_input" placeholder="write here"></input>
        <div className="formDetails">
          <div className="bottomLine">
            {/*COMPONENT INSIDE ANOTHER COMPONENT*/}
            <FormButtons value="Read emails" />
            <FormButtons value="Send emails" />
            <FormButtons value="Web parsing" />
          </div>
          <div>
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
      </form>
    </div>
  )
}