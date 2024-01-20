import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  pokemonId='';

  constructor(private route:Router){

  }
  getValue(){
    console.log('value : '+this.pokemonId);

    this.route.navigateByUrl(`/details/${this.pokemonId.toLowerCase()}`);
  }

}
