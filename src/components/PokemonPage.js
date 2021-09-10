import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(setPokemon)
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  }
  const handlePokemonFormSubmit = (newPokemon) => {
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(data => setPokemon([...pokemon, data]))

  }
  const pokemonList = pokemon.filter(mon => mon.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonFormSubmit={handlePokemonFormSubmit} />
      <br />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <br />
      <PokemonCollection pokemon={pokemonList} />
    </Container>
  );
}

export default PokemonPage;
