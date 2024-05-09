import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../../services/empleados.service';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from '../../components/tarjetas/tarjetas.component';

@Component({
  selector: 'app-empelados',
  standalone: true,
  imports: [CommonModule, TarjetasComponent],
  templateUrl: './empelados.component.html',
  styleUrl: './empelados.component.css'
})
export class EmpeladosComponent {

  servicios = inject(EmpleadosService)

  empleados: any

  ngOnInit() {
    this.servicios.getEmpleados().subscribe( e => {
      this.empleados = e
    })
  }

}
