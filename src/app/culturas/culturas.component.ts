import { Component, OnInit } from '@angular/core';
import { CulturasService } from '../culturas.service';

@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.component.html',
  styleUrls: ['./culturas.component.css'],
})
export class CulturasComponent implements OnInit {
  culturas: any[] = [];; // Asegúrate de utilizar el tipo de datos correcto

  constructor(private culturasService: CulturasService) {}

  ngOnInit(): void {
    this.culturas = this.culturasService.getCulturas();
  }
}
