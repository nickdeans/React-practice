import { useState, useEffect } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon';

const Pokemon = () => {
    const [pokemons, setPokemon] = useState([]);

    const fetchPokemon = async () => {
        const response = await fetch(url);
        const pokemons = await response.json();
        const data = pokemons.results;
        setPokemon(data)
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return (
        <main style={{display:'block'}}>
            <h1>Pokemon</h1>
            <div>
                {pokemons.map((pokemon) => {
                    const {name, url} = pokemon;

                    return (
                        <article key={name}>
                            <h4>{name}</h4>
                            <h4>{url}</h4>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export default Pokemon;