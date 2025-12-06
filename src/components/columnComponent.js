import React from 'react';

export const ColumnComponent = ({ className, value }) => {
  return (
    // Template literals are combined to the static class "colonna" with the dynamic class passed via props.
    <div className={`colonna ${className}`}>
      <h4>{value}</h4>
    </div>
  )
}