import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutosService } from '../../../services/autos.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor( private servicios: AutosService){}

  autos: any

  ngOnInit() {
    this.servicios.getAutos().subscribe( au => {
      this.autos = au
    })
  }

}
