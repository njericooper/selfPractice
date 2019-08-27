import React from 'react';
import ReactDOM from 'react-dom'; 

import Log from './pages/log.js';

const App = () => (
  <div>
    <Log />
  </div>
)

ReactDOM.render(
	<App />,
  document.getElementById("site")
);