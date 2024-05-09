import { Component, inject } from '@angular/core';
import { AutosService } from '../../../services/autos.service';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule, GaleriaComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

  servicios = inject(AutosService)

  autos: any

  ngOnInit() {
    this.servicios.getAutos().subscribe( a => {
      this.autos = a
    })
  }
}
