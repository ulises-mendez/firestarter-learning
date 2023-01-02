import React from 'react'
export default(sec) => {

    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    return(
        <span>{hours > 0 ? hours + 'h ' + minutes + 'm ' + seconds + 's' : minutes > 0 ? minutes + 'm ' + seconds + 's' : seconds + 's' }</span>
    )
}