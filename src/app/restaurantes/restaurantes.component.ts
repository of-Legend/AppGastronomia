import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service'; // Importa el servicio de restaurantes
import { Restaurante } from '../models/restaurante.model'; // Importa el modelo de Restaurante

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
})
export class RestaurantesComponent implements OnInit {
  restaurantes: Restaurante[] = [];

  constructor(private restaurantesService: RestaurantesService) {} // Inyecta el servicio de restaurantes

  ngOnInit(): void {
    this.restaurantes = this.restaurantesService.getRestaurantes();
  }
}
