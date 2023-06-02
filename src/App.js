import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCards from './components/PokemonCards';
import './App.css';

function App() {
    const [data, setData] = useState({});
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    const [nextToggle, setNextToggle] = useState('');
    const [previousToggle, setPreviousToggle] = useState('');
    // const [link, setLink] = useState('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')


    useEffect(() => {
        async function getPokemon() {
            try {
                const response = await axios.get( endpoint);
                setData(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        getPokemon();
    }, [endpoint]);

    // const handleNextClick = async () => {
    //     try {
    //         if (nextToggle) {
    //             const response = await axios.get(nextToggle);
    //             setData(response.data.results);
    //             setNextToggle(response.data.next);
    //             setPreviousToggle(response.data.previous);
    //         }
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    //
    // const handlePreviousClick = async () => {
    //     try {
    //
    //
    //         if (previousToggle) {
    //             const response = await axios.get(previousToggle);
    //             setData(response.data.results);
    //             setNextToggle(response.data.next);
    //             setPreviousToggle(response.data.previous);
    //         }
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };



    return (
        <div>
            {console.log(endpoint)}
            <button onClick={() => setEndpoint(data.previous)}>
                Vorige
            </button>
            <button onClick={() => setEndpoint(data.next)}>
                Volgende
            </button>

            {Object.keys(data).length > 0 && data.results.map((morePokemon) => {
                return <PokemonCards key={morePokemon.name} pokemon={morePokemon.name} />;
            })}
        </div>
    );
}

export default App;