import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CulturasComponent } from './culturas/culturas.component';
import { ProductosComponent } from './productos/productos.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RecetasComponent } from './recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    CulturasComponent,
    ProductosComponent,
    RestaurantesComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
