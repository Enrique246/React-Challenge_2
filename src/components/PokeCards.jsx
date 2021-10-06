import React from "react";
import { mockPokemonsData } from "../mock/pokeData";

export default function PokeCard() {
  return (
    <div>
      {mockPokemonsData.map((poke) => (
        <div>
          <h1> {poke.name} </h1>
          <img src={poke.sprites.front_default} alt="pic" />
          <img src={poke.sprites.front_shiny} alt="pic" />
          <img src={poke.sprites.back_default} alt="pic" />
          <img src={poke.sprites.back_shiny} alt="pic" />
        </div>
      ))}
    </div>
  );
}
