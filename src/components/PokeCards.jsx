import React from "react";
import { mockPokemonsData } from "../mock/pokeData";

const pokemons = mockPokemonsData.map(function (poke) {
  return poke.name;
});

export default function PokeCard() {
  return (
    <div>
      {mockPokemonsData.map((poke) => (
        <div>
          <h1> {poke.name} </h1>
          <img src={poke.sprites.back_default} alt="pic" />
          <img 
        </div>
      ))}
    </div>
  );
}
