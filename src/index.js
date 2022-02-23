import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import todosComponent from './components/todosComponent';
ReactDOM.render(
  <React.StrictMode>

     <App />
    <todosComponent />
  
    
  </React.StrictMode>,
  document.getElementById('root')
);


