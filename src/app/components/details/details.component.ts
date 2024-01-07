import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipokemon } from 'src/app/models/ipokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokemon:Ipokemon|any;
  loading=true;
  error=false;
  constructor(private route:ActivatedRoute,private service:PokemonService){
    

  }
  ngOnInit(): void {
    let id= this.route.snapshot.paramMap.get('id');
    console.log('id : '+id);
setTimeout(() => {
  
  if(id!=null){
    
    this.service.getPokemon(id).subscribe(
      data=>{
        
        this.pokemon=data;
        this.loading=false;
      },error=>{
        this.error=true;
        this.loading=false;
        console.log(error.error);
        
      }
    )
  }
}, 1000);
    
  }//end of ngOnInit

  

}
