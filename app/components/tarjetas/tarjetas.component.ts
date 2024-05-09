import { Component } from '@angular/core';
import { EmpleadosService } from '../../../services/empleados.service';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

  constructor( private servicios: EmpleadosService){}

  empleado: any

  ngOnInit() {
    this.servicios.getEmpleados().subscribe( em => {
      this.empleado = em
    })
  }

}
