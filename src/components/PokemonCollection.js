import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  return (
    <>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemon.map(mon => <PokemonCard key={mon.id} pokemon={mon} />)}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
