import React from 'react'
export default(date) => {
    const dateString = new Date(date);
    const d = ('0' + dateString.getDate()).slice(-2);
    const m = dateString.getMonth();
    const y = dateString.getFullYear();
    const h = ('0' + dateString.getHours()).slice(-2);
    const min = ('0' + dateString.getMinutes()).slice(-2);
    const s = ('0' + dateString.getSeconds()).slice(-2);
    const months = ['Junuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (<span className="text-sm italic font-semibold">{months[m]} {d}, {y}</span>)
  }