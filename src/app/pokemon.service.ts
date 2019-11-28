import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  pokemon = {
    id: 1,
    name: "CHARIZARD",
    number: "006",
    level: "100",
    type: "FIRE",
    hability: "FLAMES",
    height: "1.7 m",
    weight: "90.5 kg",
    img: "charizard.png"
  };

  others_pokemons = [
    {
      name: "Charmander",
      img: "Charmander.png"
    },
    {
      name:"Mewtwo",
      img: "Mewtwo.png"
    },
    {
      name:"Bulbasaur",
      img: "Bulbasaur.png"
    },
    {
      name:"Arcanine",
      img: "Arcanine.png"
    },
  ]

}
