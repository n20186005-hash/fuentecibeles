export type Photo = {
  src: string;
  localName: string;
  alt: string;
  credit: string;
  license: string;
  source: string;
};

export const attraction = {
  name: 'Fuente de Cibeles',
  formalName: 'Fuente de Cibeles — Plaza Villa de Madrid',
  englishName: 'Cibeles Fountain',
  slug: 'fuente-de-cibeles',
  country: 'México',
  city: 'Ciudad de México',
  borough: 'Cuauhtémoc',
  neighborhood: 'Roma Norte',
  type: 'Fuente monumental y arte público',
  address: 'Pl. Villa de Madrid, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX, México',
  latitude: 19.42,
  longitude: -99.16639,
  rating: 4.6,
  reviewCount: 22693,
  mapUrl: 'https://maps.app.goo.gl/Wc3EJ1uiKpjejoFE9'
} as const;

export const photos: Photo[] = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/FuenteDeLasCibelesp4v2.jpg/1280px-FuenteDeLasCibelesp4v2.jpg',
    localName: 'fuente-cibeles-vista-general.jpg',
    alt: 'Vista general de la Fuente de Cibeles en la Plaza Villa de Madrid, Roma Norte',
    credit: 'Carlos Valenzuela',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:FuenteDeLasCibelesp4v2.jpg'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FuenteDeLasCibelesP2v2.jpg/1280px-FuenteDeLasCibelesP2v2.jpg',
    localName: 'fuente-cibeles-escultura.jpg',
    alt: 'Detalle de Cibeles sobre su carro y los leones de la fuente en Ciudad de México',
    credit: 'Carlos Valenzuela',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:FuenteDeLasCibelesP2v2.jpg'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vista_general_de_la_Fuente_de_los_Cibeles_Ciudad_de_M%C3%A9xico.jpg/1280px-Vista_general_de_la_Fuente_de_los_Cibeles_Ciudad_de_M%C3%A9xico.jpg',
    localName: 'fuente-cibeles-plaza.jpg',
    alt: 'La fuente y su contexto urbano arbolado en Roma Norte',
    credit: 'Ximena Herand',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Vista_general_de_la_Fuente_de_los_Cibeles_Ciudad_de_M%C3%A9xico.jpg'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Fuente_de_los_Cibeles_en_la_CDMX_vista_de_frente.jpg/1280px-Fuente_de_los_Cibeles_en_la_CDMX_vista_de_frente.jpg',
    localName: 'fuente-cibeles-frontal.jpg',
    alt: 'Vista frontal de la Fuente de Cibeles en Ciudad de México',
    credit: 'Luis Mejía Castañeda',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Fuente_de_los_Cibeles_en_la_CDMX_vista_de_frente.jpg'
  }
];

export const faqs = [
  {
    q: '¿Cuánto cuesta visitar la Fuente de Cibeles?',
    a: 'La visita al espacio público es gratuita. No hay taquilla ni boleto de entrada para contemplar la fuente o recorrer la Plaza Villa de Madrid.'
  },
  {
    q: '¿A qué hora conviene ir?',
    a: 'La mañana ofrece menos tránsito peatonal y luz suave; la última parte de la tarde suma ambiente de cafés y una luz lateral agradable. El funcionamiento de los chorros puede variar por mantenimiento o eventos.'
  },
  {
    q: '¿Cuánto tiempo se necesita?',
    a: 'Reserva de 20 a 40 minutos para la fuente y la glorieta. Si combinas el paseo con Roma Norte, cafés, galerías o Paseo de la Reforma, conviene destinar de dos a cuatro horas.'
  },
  {
    q: '¿Cuál es el transporte público más práctico?',
    a: 'Metrobús sobre Avenida Insurgentes y Metro Línea 1 son opciones útiles para llegar caminando a Roma Norte. También hay estaciones de ECOBICI en el entorno inmediato.'
  },
  {
    q: '¿Es la misma fuente que la de Madrid?',
    a: 'No. La de Ciudad de México es una réplica del conjunto madrileño y fue inaugurada en 1980 como símbolo de los vínculos entre México y España.'
  },
  {
    q: '¿Se puede visitar con niñas, niños o movilidad reducida?',
    a: 'La fuente se observa desde un espacio urbano a nivel de calle. Como la glorieta está rodeada de tránsito, conviene cruzar únicamente por pasos señalizados y mantener atención especial con menores.'
  }
] as const;
