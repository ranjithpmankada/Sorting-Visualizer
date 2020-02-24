import React from 'react';

function Disabled(originalComponent) {
    isRunning ?  return (<originalComponent style= {{opacity: 0.1}} disabled={true} />) : return <originalComponent/>;
}