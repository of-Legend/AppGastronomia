
import { Injectable } from '@angular/core';
import { Receta } from './models/receta.model';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private recetas: Receta[] = [
    {
      nombre: 'Ajiaco',
      descripcion: 'Sopa tradicional colombiana elaborada con pollo, papa, mazorca, calabaza, cilantro, cebolla y ajo. Se suele servir en ocasiones especiales.',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.AFVzXoiexux2THTXiL-2_AHaE8%26pid%3DApi&f=1&ipt=b66d7aceece1be3852d6ffe10867807ce988fe401bffe59a1f97f0358ac94358&ipo=images',
      proceso: '1-Cocinar el pollo en agua hasta que esté cocido. 2-Agregar las papas, la mazorca y las alcaparras. 3-Cocinar hasta que las papas estén suaves. 4-Desmenuzar el pollo y agregarlo a la sopa. 5-Sazonar con sal y pimienta al gusto. 6-Servir con crema de leche.',
      video: 'https://www.youtube.com/watch?v=70LzcExLcQo',
    },
    {
      nombre: 'Wonton de carne',
      descripcion: 'Pasta rellena de carne, verduras o marisco. Se puede servir en sopa o frito.',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fBUa-bM5Wn-8JKUtVW3zLAHaHa%26pid%3DApi&f=1&ipt=c37ec3a3c26dce2b6c1728ee00489a97502f9c116cf5e79017870f2aaf29fb49&ipo=images',
      proceso: '1-Preparar la mezcla de carne. 2-Colocar una cucharada de la mezcla de carne en cada hoja de wonton. 3-Doblar los wonton y sellarlos. -4Cocinar los wonton en agua hirviendo o freírlos.',
      video: 'https://www.youtube.com/watch?v=rZI5sLbqC3Q',
    },
    {
      nombre: 'Pizza margarita',
      descripcion: 'Pizza tradicional italiana elaborada con masa de pan, salsa de tomate, queso mozzarella y hojas de albahaca.',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WZzAMKDjzhhyAf9D2dhpEQHaE7%26pid%3DApi&f=1&ipt=2d24a047c7245ca267217be28f1360cb78ddbbb0a3e057c7802c2e48208e3efd&ipo=images',
      proceso: '1-Preparar la masa de pizza. 2-Extender la masa de pizza.  3-Cubrir la masa con salsa de tomate.4-Colocar el queso mozzarella y las hojas de albahaca. 5-Hornear la pizza.',
      video: 'https://youtu.be/xKDnD8sJsuY',
    },
    {
      nombre: 'Tacos de pastor',
      descripcion: 'Tacos elaborados con carne de cerdo marinada en adobo de chiles, especias y frutas. Se sirven en tortillas de maíz con cebolla, cilantro y salsa.',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.y-dXCFWoMM_DmNI5tfyiHgHaE8%26pid%3DApi&f=1&ipt=45c2ebb06de0b903605e26feeac48afbd7af1badf2f18dde490518e8ed458718&ipo=images',
      proceso: '1-Marinar la carne de cerdo. 2-Asar la carne. 3-Cortar la carne en tiras. 4-Servir la carne en tortillas de maíz con cebolla, cilantro y salsa.',
      video: 'https://youtu.be/Zc_erAQybB0',
    },
    {
      nombre: 'Crêpe',
      descripcion: 'Masa fina y delicada elaborada con harina de trigo, huevos, leche y sal. Se puede servir dulce o salada. ',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qYZCCLfvi5eH_PKZJdH_IwHaD7%26pid%3DApi&f=1&ipt=09b876191163d6acfef4ddd3479852e924b76a25876a939a9e5fc8730d003341&ipo=images',
      proceso: '1-Mezclar los ingredientes de la masa. 2-Calentar una sartén antiadherente. 3-Verter una capa fina de masa en la sartén. 4-Cocinar la crepe por un lado hasta que esté dorada. 5-Voltear la crepe y cocinar por el otro lado. 6-Rellenar la crepe con el ingrediente deseado. 7-Doblar la crepe por la mitad.',
      video: 'https://youtu.be/H_k_QutlKoE',
    },
    {
      nombre: 'Hamburguesa',
      descripcion: 'Sándwich elaborado con carne picada, pan de hamburguesa, queso, lechuga, tomate y cebolla. ',
      foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1yIIVkH91E9f0R_b_lxqbQHaE8%26pid%3DApi&f=1&ipt=7866aa0a284a2c25156e4bd2ac154c4ad6d6b68fb1d54e18a8dea62ceeef69e5&ipo=images',
      proceso: '1-Cocinar la carne picada a fuego medio. 2-Colocar la carne picada en un bollo de pan. 3-Agregar el queso, la lechuga, el tomate y la cebolla. 4-Servir la hamburguesa.',
      video: 'https://youtu.be/DCuCIn9wWLE',
    },
  ];
  

  getRecetas() {
    return this.recetas;
  }
}
