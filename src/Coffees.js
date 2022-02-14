import React, {useState, useEffect} from 'react';


function Coffees() {
    const [coffeeList, setCoffeeList] = useState();
    const [temp, setTemp] = useState('hot')
    useEffect(() => {
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
            //changed to a template literal to read the temperatures
        .then(response => response.json())
        .then(data => setCoffeeList(data))
                //now the coffee list will be the array, instead of console logging it to see in inspect
        .catch(err => console.error(err))
    },[temp])
    //it will moniter and change when you change the temperature
    return (
        <section className='coffee-container' id="coffees">
            {/* We need our JSX to be inside a SINGLE CONTAINING TAG. That tag can be a react.Fragment
            <></> if we dont want any HTML to render */}
        <h2> Coffees Recipes</h2>
        <button onClick={() => setTemp('hot')}>Hot</button> <button onClick={() => setTemp('iced')}>Iced</button>
        {/* this will follow the useEffect when you click the buttons to change the temperature */}
        {!coffeeList

        ?
            <h3> Loading...</h3>
        :
        <ol>
        {coffeeList.map(coffee => {
            return <li key={coffee.id}>{coffee.title}</li>
        })}
        </ol>
        }
        
        {/* you use the ternary saying not coffee to handle the loading state, so you dont get an undefined map */}
        {/* so it will say if there is no list showing loading if not show the list */}
        {/* this will show the list of coffees, changing the shape of the array, 99% of the time you want to use .map in JSX, react can't read a list without a key */}
        </section>
    )
 }

export default Coffees;