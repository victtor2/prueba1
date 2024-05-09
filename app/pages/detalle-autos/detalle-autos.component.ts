import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-autos.component.html',
  styleUrl: './detalle-autos.component.css'
})
export class DetalleAutosComponent {

  ruta = inject(ActivatedRoute)

  autos=[
    {
        "placa":"PCQ123",
        "marca": "NISSAN",
        "color": "PLATEADO",
        "precio":22500,
        "url":"https://us.as.com/autos/wp-content/uploads/2024/03/2025-Nissan-Kicks-33b-1264x734.jpg"
    },
    {
        "placa":"PCQ456",
        "marca": "NISSAN",
        "color": "ROJO",
        "precio":20000,
        "url":"https://cdn.motor1.com/images/mgl/MrAOE/s1/critica-nissan-versa-exclusive-cvt-2020.webp"
    },
    {
        "placa":"PCQ789",
        "marca": "SONATA",
        "color": "PLATA",
        "precio":35000,
        "url":"https://www.motortrend.com/uploads/2022/08/2023-Hyundai-Sonata-22.jpg?fit=around%7C551:374"
    },
    {
        "placa":"PCQ890",
        "marca": "SANTAFE",
        "color": "PLATEADO",
        "precio":45000,
        "url":"https://www.hyundai.com.ec/static/media/santafe-banner-1.d8a74f354a2997ea598e.webp"
    },
    {
        "placa":"PCQ098",
        "marca": "PALISADE",
        "color": "ESMERALDA",
        "precio":70000,
        "url":"https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/Hyundai-HDC2-Grandmaster.jpg?tf=3840x"
    }
]
  auto: any
  placa:any
  ngOnInit(){
    this.ruta.params.subscribe(a=>{
      console.log(a['placaAutos']);
      this.placa = a['placaAutos']

      this.autos.forEach(element => {
        if(element.placa == this.placa){
          this.auto = element

        }
      });
    })
  }

}


