import { Component } from '@angular/core';
import { TablasComponent } from '../../components/tablas/tablas.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [TablasComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
