import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodosComponent from './components/TodosComponent';
import Name from "./components/Name";
import Table from "./components/Table";
import IsGoal from "./components/IsGoal";
import Logical from './components/Logical';
import CarMap from './components/CarMap';
import UseState from './components/UseState';


let  person={name:"Collins", girl:"Herty"}
let logics=["and","or","not"];
let cars =[{id:1,brand:"Mustang"},{id:2,brand:"BMW"},{id:3,brand:"Ford"}];

ReactDOM.render(
  <React.StrictMode>

     <App />
    <TodosComponent />
  <Name info={person}/>
    <Table />
    <IsGoal  isGoal={false}/>
    <Logical  logics={logics}/>
<CarMap  cars={cars}/>
<UseState />
  </React.StrictMode>,
  document.getElementById('root')
);


