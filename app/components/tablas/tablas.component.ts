import { Component, inject } from '@angular/core';
import { AutosService } from '../../../services/autos.service';

@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.css'
})
export class TablasComponent {

  servivio = inject(AutosService)
  autos: any

  ngOnInit(): void {
    this.servivio.getAutos().subscribe(as => {
      this.autos = as
    })
    
  }

  


}
