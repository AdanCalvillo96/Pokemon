import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit  {
//Declaracion de variables
  pokemons: any[] = [];
  selectedPokemon: any;
  offset = 0;
  limit = 20;
  totalPokemons = 0;
//Constructor
  constructor(private pokemonService: PokemonService) {}

  //Metodos
  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getPokemons(this.offset, this.limit).subscribe(data => {
      this.pokemons = data.results;
      this.totalPokemons = data.count;
    });
  }

  //Direccionamiento Pokemon
  nextPage(): void {
    if (this.offset + this.limit < this.totalPokemons) {
      this.offset += this.limit;
      this.loadPokemons();
    }
  }

  prevPage(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  //Modal
  openModal(pokemon: any): void {
    const id = this.pokemons.indexOf(pokemon) + 1; // +1 porque la API comienza en 1
    this.pokemonService.getPokemonDetails(id).subscribe(data => {
      this.selectedPokemon = data;
    });
  }

}
