import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent   {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbService: DbzService){}
  //@Output() OnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if( this.nuevo.nombre.trim().length === 0 ) {return;}
    
    this.dbService.agregarPersonaje( this.nuevo );

    //this.OnNuevoPersonaje.emit( this.nuevo );
  
    // Para setear inputs
    this.nuevo = {
      nombre: '',
      poder: 0,
    }
}


}
