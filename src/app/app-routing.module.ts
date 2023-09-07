import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturasComponent } from './culturas/culturas.component';
import { ProductosComponent } from './productos/productos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

const routes: Routes = [
  { path: 'culturas', component: CulturasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: '', redirectTo: '/culturas', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
