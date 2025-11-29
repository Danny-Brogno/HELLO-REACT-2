import React from 'react';

export const EachBot = ({bot,handleDelete}) => {
  return (
    <li
      className= {
        bot.status === "Completed" ? "Completed" : 
        bot.status === "Running" ? "Running" :
        bot.status === "Stopped" ? "Stopped" :
        "Pending"
      }
      > 
      {bot.id} - {bot.botName} - {bot.status} 
      <button className="down" onClick={()=> handleDelete(bot.id)}>DELETE</button>
    </li>
  )
}