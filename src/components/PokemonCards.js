import React, {useEffect, useState} from 'react';
import './PokemonCards.css';
import axios from "axios";

const PokemonCards = ({pokemon}) => {
    const [data, setData] = useState({});

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                setData(response.data)
                // console.log(response.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()

    }, [pokemon]);


    return (
        <section className="card">
            {Object.keys(data).length > 0 &&
                <>
                    <h3>{data.name}</h3>
                    <img
                        alt={`${data.species.name}`}
                        src={data.sprites.front_shiny}
                    />
                    <h4>Moves:{data.moves.length}</h4>
                    <h4>Weight:{data.weight}</h4>
                    <h4>Abilities:</h4>
                    <ul>
                        {data.abilities.map((array) => {
                            return <li>{array.ability.name} </li>
                        })
                        }
                    </ul>
                </>
            }
        </section>
    );
};

export default PokemonCards;