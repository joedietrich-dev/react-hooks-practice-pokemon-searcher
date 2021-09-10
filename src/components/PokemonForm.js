import React from "react";
import { useState } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";

function PokemonForm({ onPokemonFormSubmit = f => f }) {
  const [pokemon, setPokemon] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  })
  const handleFieldChange = (e) => {
    if (e.target.name === 'frontUrl') {
      setPokemon({ ...pokemon, sprites: { back: pokemon.sprites.back, front: e.target.value } });
    } else if (e.target.name === 'backUrl') {
      setPokemon({ ...pokemon, sprites: { ...pokemon.sprites, back: e.target.value } });
    } else {
      setPokemon({ ...pokemon, [e.target.name]: e.target.value });
    }
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onPokemonFormSubmit(pokemon);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={pokemon.name}
            onChange={handleFieldChange} />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={pokemon.hp}
            onChange={handleFieldChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokemon.sprites.front}
            onChange={handleFieldChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokemon.sprites.back}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
