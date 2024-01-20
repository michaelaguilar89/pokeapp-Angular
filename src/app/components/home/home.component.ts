import { Component, OnInit ,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ipokemon } from 'src/app/models/ipokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonId='';
  pokemon$:Ipokemon[]|any[]=[];
  error=false;
  loading=true;
  errorMessage='';
  counter=1;
  constructor(private service:PokemonService,
              private route:Router){

  }
  ngOnInit(): void {
    this.getList();
  }
  
  

    getList():void{


      if(!this.loading){
        this.loading=true;
      }
      for(let i=0;i<=8;i++){//init for

        setTimeout(() => {
          //initialize service
  
          
          this.service.getPokemon(this.counter.toString()).subscribe(
            data=>{
              this.pokemon$.push(data);
              this.loading=false;
              console.log(this.pokemon$);
            },error=>{
              this.error=true;
              this.errorMessage=error;
            }
          )//end of service
            this.counter++;
        }, 1000);
      }  //end for
     
    }//end of getList


     @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Verificar si el usuario ha llegado al final de la página
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      this.getList();
    }
  }  


}
