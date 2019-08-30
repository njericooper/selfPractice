import React from 'react';
import ReactDOM from 'react-dom'; 

import Log from './log'; 
var twilio = require('twilio');


const App = () => (
  <div>
    <Log />
  </div>
)

ReactDOM.render(
	<App />,
  document.getElementById("site")
);