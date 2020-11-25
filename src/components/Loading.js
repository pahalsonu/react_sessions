import React from  "react";
import ripple from './ripple.gif';

function Loading() {
    return (
        <img src={ripple} alt="Loading ..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
    )
}

export default Loading;