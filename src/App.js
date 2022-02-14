import { useState, useEffect } from 'react';
import Coffees from './Coffees';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0); //You use a state because this keeps track of the state that its in, the 0 is for what the initial value is, so count has an initial value of 0
  // the setCounter is a setter and it is a function that allows us to modify what is inside of the count variable
  //The convention is to use set and the variable of what you are using, you are also using a destructured array 
  // const [cars, setCars] = useState(['Audi', 'Tesla', 'Ford']);
  // const [person, setPerson] = useState({ name: 'Jeremiah', age: 31, shirt: 'tan' });

useEffect(() => {
  setCounter(500)
},[])

  // useEffect(() => {
  //   console.log('use effect was run', counter)
  // },[counter]) //<-- this is a dependency
  //with out the empty array it would have run everytime I change the button 
  // with the counter it will change or show the console log everytime the counter is changed
  //adding the counter to the console log will tell it where it is in the counter 
  //without a dependency the useEffect will run for every change that is made
  return (
    <div className="App">
      <header className="App-header">
        
        <h1> Counter: {counter}</h1>
        {/* <h2>Hello {person.name}</h2>
       <h2>{cars.toString()}</h2> */}
      {/* adding new buttons to get the  */}
        
        <div className='buttonContainer'>
        {/* <button onClick={() => setCars([...cars, 'Kia'])}>Add Kia</button>&nbsp; */}
       
        <button
          onClick={() => {setCounter(counter + 1)}}
        > + </button>
        <button
        onClick={() => {setCounter(0)}}>
          reset
        </button>
        {counter > 0 &&
        <button
        onClick={() => {setCounter(counter - 1)}}>
          -
        </button>}
        <Coffees />
        </div>
      </header>
    </div>
   

  );
}

export default App;
