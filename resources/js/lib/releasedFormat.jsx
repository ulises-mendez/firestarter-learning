import React from 'react'
export default(date) => {
    const dateString = new Date(date);
    const d = ('0' + dateString.getDate()).slice(-2);
    const m = dateString.getMonth();
    const y = dateString.getFullYear();
    const months = ['Junuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (<span className="text-sm">{months[m]} {d}, {y}</span>)
  }