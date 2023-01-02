import React from 'react'
export default(date) => {
    const dateString = new Date(date);
    const d = ('0' + dateString.getDate()).slice(-2);
    const m = dateString.getMonth();
    const y = dateString.getFullYear();
    return (<span className="text-sm">{m + 1}/{d}/{y}</span>)
  }