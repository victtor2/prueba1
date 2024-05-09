import { Routes } from '@angular/router';
import { AutosComponent } from './pages/autos/autos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { EmpeladosComponent } from './pages/empelados/empelados.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetalleAutosComponent } from './pages/detalle-autos/detalle-autos.component';

export const routes: Routes = [
    { path:"autos", component:AutosComponent},
    { path:"gestion", component:GestionComponent},
    { path:"empleados", component:EmpeladosComponent},
    {path: 'detalles-autos/:placaAutos', component: DetalleAutosComponent},

    { path:"", redirectTo: "autos", pathMatch: "full" },
    { path: "**", component:Error404Component}
];
