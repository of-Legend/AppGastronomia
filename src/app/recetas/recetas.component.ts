import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../recetas.service'; // Importa el servicio de recetas
import { Receta } from '../models/receta.model'; // Importa el modelo de Receta

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
})
export class RecetasComponent implements OnInit {
  recetas: Receta[] = [];

  constructor(private recetasService: RecetasService) {} // Inyecta el servicio de recetas

  ngOnInit(): void {
    this.recetas = this.recetasService.getRecetas();
  }
}
