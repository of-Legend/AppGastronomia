import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CulturasService {
  getCulturas() {
    return [
      {
        nombre: 'La cultura gastronómica andina',
        descripcion: 'Se caracteriza por el uso de ingredientes de altura, como la papa, el maíz y el trigo. Algunos de los platos más populares de esta cultura son el tamal, la arepa y el sancocho de gallina.',
        paises: ['Colombia'],imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8mUkuLXiyRI7CbNRZDU1kwHaE8%26pid%3DApi&f=1&ipt=0edbe3a8c6ffbde52712e1cd0230d8aead1051e7a1ec47a7eb532d89aeda3f1d&ipo=images',
      },
      {
        nombre: 'La cultura gastronómica china',
        descripcion: 'Es una de las más antiguas y diversas del mundo. Se caracteriza por el uso de arroz, fideos, verduras y carne, y por sus técnicas de cocina como el salteado y el wok.',
        paises: ['China'],imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CO8X808AzCcjVd-GSqRBLAHaEK%26pid%3DApi&f=1&ipt=89ee8360b303fea2a11aa062c12b51550eea97984a57c3dce49bb3ebabd9b986&ipo=images',
      },
      {
        nombre: 'La cultura gastronómica Italiana',
        descripcion: 'Es conocida por sus platos frescos y sabrosos. Se caracteriza por el uso de pasta, pizza, pescado y verduras, y por sus técnicas de cocina como la salsa de tomate y la pasta fresca.',
        paises: ['Italia'],imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UP9qidAF0H1gcUy51wiVJwHaEz%26pid%3DApi&f=1&ipt=d3eabf05d3357bde6b90e0662e4fe1f6041dfd0b9315c806f752b33238c6db4a&ipo=images',
      },
      {
        nombre: 'La cultura gastronómica Mexicana',
        descripcion: 'es una de las más coloridas y vibrantes del mundo. Se caracteriza por el uso de tortillas, frijoles, chiles y maíz, y por sus técnicas de cocina como la nixtamalización y el mole.',
        paises: ['Mexico'],imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4S3Oguok9gZA3LVCzRC_AgHaEC%26pid%3DApi&f=1&ipt=6b1692c06295adebc9370d3816349252c7e4085268b31fb620a3dc911d6f6b62&ipo=images',
      },
      {
        nombre: 'La cultura gastronómica Francesa',
        descripcion: 'La cultura gastronómica francesa se caracteriza por su uso de ingredientes frescos y de temporada, sus técnicas de cocina tradicionales y su atención al detalle. ',
        paises: ['Francia'],imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bWiWbo4YD6DkWmMW31ihOwHaGF%26pid%3DApi&f=1&ipt=e60082eb42979140a813279d5112e1f231239eb3313141f56538c69952169e5c&ipo=images',
      },{
        nombre: 'La cultura gastronómica Norteamericana',
        descripcion: 'La cultura gastronómica estadounidense es una mezcla de influencias europeas, africanas, asiáticas y latinoamericanas.',
        paises: ['EEUU'],imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d8oEw4pw5h8Qg_VPMmiclAHaEK%26pid%3DApi&f=1&ipt=71963b3391e77bdb43ddf30e7eda9e6d94cbddd5d090ed484a0ae6ab2c90c04e&ipo=images',
      },
    ];
  }
}
