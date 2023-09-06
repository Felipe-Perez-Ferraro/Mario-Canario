import yerba1kg from './assets/canarias1kg.png';
import yerba500g from './assets/canarias500g.png';
import yerba250g from './assets/canarias250g.png';
import serena1kg from './assets/serena1kg.png';
import serena500g from './assets/serena500g.png';

const yerbas = [
  {
    id: 1,
    yerba: 'Yerba Canarias 1kg',
    g: 1000,
    desciption:
      'Yerba mate Canarias por 1 kg, sabor tradicional, importada y sin palo',
    price: 4500,
    stock: 40,
    type: 'Tradicional',
    img: yerba1kg,
  },
  {
    id: 2,
    yerba: 'Yerba Canarias 500g',
    g: 500,
    desciption:
      'Yerba mate Canarias por 500 gramos, sabor tradicional, importada y sin palo',
    price: 3500,
    stock: 40,
    type: 'Tradicional',
    img: yerba500g,
  },
  {
    id: 3,
    yerba: 'Yerba Canarias 250g',
    g: 250,
    desciption:
      'Yerba mate Canarias por 250 gramos, sabor tradicional, importada y sin palo',
    price: 2500,
    stock: 40,
    type: 'Tradicional',
    img: yerba250g,
  },
  {
    id: 4,
    yerba: 'Yerba Canarias 1000g',
    g: 1000,
    desciption:
      'Yerba mate Canarias por 1000 gramos, sabor serena, importada y sin palo',
    price: 5000,
    stock: 40,
    type: 'Serena',
    img: serena1kg,
  },
  {
    id: 5,
    yerba: 'Yerba Canarias 500g',
    g: 500,
    desciption:
      'Yerba mate Canarias por 500 gramos, sabor serena, importada y sin palo',
    price: 4000,
    stock: 40,
    type: 'Serena',
    img: serena500g,
  },
];

export default yerbas;
