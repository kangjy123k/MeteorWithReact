console.log('hello world!');
//import the react lib
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './main.html';

//create a component
const App = () =>{
    return (
        <div>
            React App #2
        </div>
    );
};
//render this component to the screen (adapt the browser)
Meteor.startup(() => {
    ReactDOM.render(<App />,document.querySelector('.container'));
});
