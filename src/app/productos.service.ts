import { Injectable } from '@angular/core';
import { Producto } from './models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Producto[] = [
    {
      nombre: 'Ajiaco',
      descripcion: 'El ajiaco es una sopa espesa que se prepara con pollo, papa, mazorca, calabaza, cilantro, cebolla y ajo. Es un plato tradicional que se suele servir en ocasiones especiales, como Navidad y Año Nuevo..',
      historia: 'El ajiaco tiene una historia que se remonta a la época precolombina. En aquella época, los indígenas colombianos preparaban una sopa similar al ajiaco, pero con ingredientes diferentes. L.',
      categoria: 'Plato Fuerte',
      imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AI5DIxASrzHlgFaHCvby_wHaE8%26pid%3DApi&f=1&ipt=ebf8c56930d5c40b36038336c2f47525edef3544484e8df2790e422a181ef843&ipo=images',
      
    },
    {
      nombre: ' Wonton',
      descripcion: ' Los wonton son un tipo de pasta rellena que se suele servir en sopa o frito. Se pueden rellenar con carne, verduras o marisco.',
      historia: 'Los wonton se originaron en China y se remontan al siglo X. Se cree que fueron creados por monjes budistas que buscaban una forma de conservar la carne.',
      categoria: 'Plato principal',
      imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YXZXjA07NG_pqKZ197TFXgHaE8%26pid%3DApi&f=1&ipt=db5714cabd2b7f29193195cd1bbf29fe14ee9538730619401ddb9d8e96f3fd6b&ipo=images',
    },
    {
      nombre: 'Pizza',
      descripcion: ' La pizza es un plato tradicional italiano que se prepara con masa de pan, salsa de tomate, queso y otros ingredientes, como carne, verduras o marisco.',
      historia: ' La pizza se originó en Italia y se remonta a la antigua Roma. En aquella época, la pizza se preparaba con una masa de pan plana que se condimentaba con aceite de oliva, ajo y hierbas.',
      categoria: 'Plato principal',
      imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7%26pid%3DApi&f=1&ipt=9d9e225bb269adb5735aee8376e9ecbfec32ad44c1fb368cf068a9f7b25dd110&ipo=images',
    },{
      nombre: 'Tacos',
      descripcion: 'Los tacos son un plato tradicional mexicano que se prepara con tortillas de maíz rellenas de carne, verduras o marisco.      ',
      historia: ' Los tacos se originaron en México y se remontan a la época precolombina. En aquella época, los tacos se preparaban con tortillas de maíz y se rellenaban con carne de animales cazados.',
      categoria: 'Plato principal',
      imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Njy-lLsZNZEOaPu-sKcysAHaE8%26pid%3DApi&f=1&ipt=dbe43db069588653d5b917fcb49194668be9a63b289a8d79bd6e593ac074802b&ipo=images',
    },{
      nombre: 'Crêpe',
      descripcion: 'Las crêpes son una fina masa de harina, leche y huevos que se cocina en una sartén. Se pueden servir dulces o saladas.',
      historia: 'Las crêpes se originaron en Francia y se remontan al siglo XIV. En aquella época, las crêpes se preparaban con harina de avena y se cocinaban en una sartén de hierro.',
      categoria: 'Postre o plato principal',
      imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wGGFU-_dDwQFsfP3EQaVfwHaE8%26pid%3DApi&f=1&ipt=1674b55494302e323e68e1c5e18adef182fdc86f7247aa35f5fa823bdc88a8d0&ipo=images',
    },{
      nombre: 'Hamburguesa',
      descripcion: 'La hamburguesa es un sándwich que se prepara con carne picada, pan de hamburguesa, queso, lechuga, tomate y cebolla.',
      historia: 'La hamburguesa se originó en Estados Unidos y se remonta al siglo XIX. En aquella época, las hamburguesas se preparaban con carne picada de buey y se servían en un bollo de pan',
      categoria: 'Plato principal',
      imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GwBRpn4RiGs8z9sv2ZdwqQHaEf%26pid%3DApi&f=1&ipt=193c68705ffc9f35fd70745598d97bd87bfc8ad5e34b391b54885c08a5ad3b58&ipo=images',
    },
  ];

  getProductos() {
    return this.productos;
  }
}
