import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';

function App() {
    const [data, setData] = useState({});

    useEffect(() => {

       async function fetchData(){
         try {
             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/jigglypuff`)
             setData(response.data)
             console.log(response.data)
         }
         catch (e){
            console.error(e);
         }
        }
        fetchData ()

    }, []);


    return (
    <section className="card">
      <h3>{data.name}</h3>
        <img
            alt="Afbeelding Pokemon"
            src={data.sprites.front_shiny}
        />
        <h4>Moves: {data.moves.length}</h4>
        <h4>Weight: {data.weight}</h4>
        <h4>Abilities:</h4>
        <ul>
            <li> {data.abilities[0].ability.name} </li>
            <li> {data.abilities[1].ability.name} </li>
            <li> {data.abilities[2].ability.name} </li>
        </ul>
    </section>
  );
}

export default App;
