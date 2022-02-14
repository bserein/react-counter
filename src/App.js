import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0); //You use a state because this keeps track of the state that its in, the 0 is for what the initial value is, so count has an initial value of 0
  // the setCounter is a setter and it is a function that allows us to modify what is inside of the count variable
  //The convention is to use set and the variable of what you are using, you are also using a destructured array 
  // const [cars, setCars] = useState(['Audi', 'Tesla', 'Ford']);
  // const [person, setPerson] = useState({ name: 'Jeremiah', age: 31, shirt: 'tan' });
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
        </div>
      </header>
    </div>
   

  );
}

export default App;
