import { Injectable } from '@angular/core';
import { Restaurante } from './models/restaurante.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantesService {
  private restaurantes: Restaurante[] = [
    {
      nombre: 'La Puerta Falsa, es un restaurante de comida tradicional colombiana ubicado en el centro histórico de Bogotá. El restaurante ofrece un menú que incluye platos típicos de todo el país, como ajiaco, bandeja paisa, sancocho de gallina y chicharrón.',
      ciudad: 'Bogota DC',
      pais: 'Colombia',
      foto:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0xHg2AmXDlzEJ_5YF495zAFZC1%26pid%3DApi&f=1&ipt=155993f2b35b428e2fc0352780201663ff0ac09e4ca9cc2a0a81c2e2e8096846&ipo=images',
      estrellasMichelin: 1,
      fechaConsecucion: '2023',
    },
    {
      nombre: 'Ming Court, Ming Court es un restaurante de cocina imperial china ubicado en el hotel Shangri-La, en Pekín. El restaurante ofrece un menú que incluye platos tradicionales de la corte imperial, como pato laqueado, dim sum y wonton.      ',
      ciudad: 'Pekin',
      pais: 'China',
      foto:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xFkbYOYQg4FKG27Cggy79gHaE7%26pid%3DApi&f=1&ipt=82137405363007c121ad15c97bffde3c9137d443efeef7c500a4c98831e5b7fe&ipo=images',
      estrellasMichelin: 3,
      fechaConsecucion: '2020', 
    },
    {
      nombre: 'Da Vittorio es un restaurante de cocina italiana ubicado en Brusaporto, Italia. El restaurante ofrece un menú que incluye platos clásicos de la cocina italiana, como pasta, pizza y risotto.      ',
      ciudad: 'Brusaporto',
      pais: 'Italia',
      foto:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YjcINO_o60m2soX_enKUrwHaDt%26pid%3DApi&f=1&ipt=4d92e4d649d05b82e19acee4211ea614db782e00ffc947c8b586b71e02fa2b21&ipo=images',
      estrellasMichelin: 3,
      fechaConsecucion: '1996', 
    }, {
      nombre: 'Quintonil es un restaurante de cocina mexicana ubicado en la Ciudad de México. El restaurante ofrece un menú que incluye platos tradicionales de México, preparados con ingredientes locales y de temporada.   ',
      ciudad: 'Ciudad de México',
      pais: ' México',
      foto:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QfD2WWPu8NdTu1j_cnPEHAHaFj%26pid%3DApi&f=1&ipt=a4ca12ac068de8ef891553f5040c6c041bbb62daac1683a6d4e201163d9b70ec&ipo=images',
      estrellasMichelin: 2,
      fechaConsecucion: '2018', 
    },
    {
      nombre: 'L`Arpège es un restaurante de cocina francesa ubicado en París. El restaurante ofrece un menú que incluye platos clásicos de la cocina francesa, preparados con ingredientes de alta calidad.      ',
      ciudad: 'Paris',
      pais: 'France',
      foto:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.PFF_wVDePnd7UXf-VEimxgHaEK%26pid%3DApi&f=1&ipt=b71ced2a2308f7cfba824d217fba7cc7d0e713c9f9872dcb8fa1681d1e6d4d53&ipo=images',
      estrellasMichelin: 3,
      fechaConsecucion: '1996', 
    },
    {
      nombre: 'Eleven Madison Park es un restaurante de cocina estadounidense ubicado en Nueva York. El restaurante ofrece un menú que incluye platos modernos de la cocina estadounidense, preparados con ingredientes de temporada.',
      ciudad: 'New York',
      pais: 'EEUU',
      foto:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.E3WAzkiy4ovzHPPSFO3htwHaFj%26pid%3DApi&f=1&ipt=bc1ad89f306886824b4c95a2c4b5c9abec9143d4becbbcf4caff4ac92c003725&ipo=images',
      estrellasMichelin: 3,
      fechaConsecucion: '2011', 
    }
  ];

  getRestaurantes() {
    return this.restaurantes;
  }
}
