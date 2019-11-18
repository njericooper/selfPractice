import React from 'react';
import ReactDOM from 'react-dom';
//import Pet from './Pet';
import SearchParams from './SearchParams' 

const App = () => {


return(
    <div>
        <h1 id="something-important"></h1>
        {/*<Pet name="Wolfgang" animal="Dog" breed="Akita"/>
        <Pet name="Ty" animal="Dog" breed="Boston T"/>
<Pet name="Fletch" animal="Dog" breed="Great Per"/> */}
        <SearchParams />
    </div>
)

};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
