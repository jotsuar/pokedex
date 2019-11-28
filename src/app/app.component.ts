import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemon: any;
  pokemons: any[] = [];
  
  constructor(private service: PokemonService) {
    this.pokemon = this.service.pokemon;
    this.pokemons = this.service.others_pokemons;
  }

  

  

}
