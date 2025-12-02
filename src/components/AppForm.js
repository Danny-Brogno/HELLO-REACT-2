import React from 'react';

export const AppForm = () => {
  return (
    <div className="formHeader">
      <form>
        <input type="text" className="bot_input" placeholder="write here"></input>
        <div className="formDetails">
          <div className="bottomLine">
            <button className="button-tag">Read emails</button>
            <button className="button-tag">Web parsing</button>
            <button className="button-tag">Send emails</button>
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