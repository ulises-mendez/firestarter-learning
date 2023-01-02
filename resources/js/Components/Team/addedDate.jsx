import React from 'react'
export default(date) => {
    const dateString = new Date(date);
    const d = ('0' + dateString.getDate()).slice(-2);
    const m = dateString.getMonth();
    const y = dateString.getFullYear();
    const months = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (<span>{months[m]} {d}, {y}</span>)
  }