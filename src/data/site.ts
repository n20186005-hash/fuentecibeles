export type Photo = {
  src: string;
  localName: string;
  alt: string;
  credit: string;
  license: string;
  source: string;
};

export const attraction = {
  // Nombres
  name: 'Fuente de Cibeles',
  formalName: 'Fuente de Cibeles — Plaza Villa de Madrid',
  shortName: 'Fuente de Cibeles',
  englishName: 'Cibeles Fountain',
  slug: 'fuente-de-cibeles',

  // Jerarquía geográfica (full → barrio → alcaldía → ciudad → país)
  country: 'México',
  countryCode: 'MX',
  city: 'Ciudad de México',
  region: 'Ciudad de México',
  regionShort: 'CDMX',
  borough: 'Cuauhtémoc',
  neighborhood: 'Roma Norte',

  type: 'Fuente monumental y arte público',
  address: 'Pl. Villa de Madrid, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX, México',
  streetAddress: 'Pl. Villa de Madrid, Roma Nte.',
  postalCode: '06700',
  latitude: 19.42,
  longitude: -99.16639,
  rating: 4.6,
  reviewCount: 22693,

  // Mapas
  mapUrl: 'https://maps.app.goo.gl/Wc3EJ1uiKpjejoFE9',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52739740.91450794!2d-138.18974899999998!3d19.420009799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff378aa470c1%3A0xbd10aad29abc63c3!2sFuente%20de%20Cibeles!5e1!3m2!1sen!2s!4v1788742591749!5m2!1sen!2s',

  // Referencias oficiales / autoridades
  govUrl: 'https://mexicocity.cdmx.gob.mx/venues/cibeles/?lang=en',
  govLabel: 'Gobierno de la Ciudad de México — portal turístico',
  boroughUrl: 'https://mexicocity.cdmx.gob.mx/venues/colonia-roma/',
  boroughLabel: 'Gobierno de la Ciudad de México — ficha de Roma Norte',
  wikidataUrl: 'https://www.wikidata.org/wiki/Q129506',
  imagePath: '/images/fuente-cibeles-vista-general.jpg'
} as const;

export const photos: [Photo, Photo, Photo, Photo] = [
  {
    src: '/images/fuente-cibeles-vista-general.jpg',
    localName: 'fuente-cibeles-vista-general.jpg',
    alt: 'Fuente de Cibeles (réplica de la fuente de Madrid) en la Plaza Villa de Madrid, Roma Norte, Ciudad de México — vista general',
    credit: 'Carlos Valenzuela',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:FuenteDeLasCibelesp4v2.jpg'
  },
  {
    src: '/images/fuente-cibeles-escultura.jpg',
    localName: 'fuente-cibeles-escultura.jpg',
    alt: 'Detalle de la diosa Cibeles sobre su carro y los leones de la Fuente de Cibeles en Ciudad de México',
    credit: 'Carlos Valenzuela',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:FuenteDeLasCibelesP2v2.jpg'
  },
  {
    src: '/images/fuente-cibeles-plaza.jpg',
    localName: 'fuente-cibeles-plaza.jpg',
    alt: 'Contexto urbano arbolado de la Fuente de Cibeles y su plaza en Roma Norte, Ciudad de México',
    credit: 'Ximena Herand',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Vista_general_de_la_Fuente_de_los_Cibeles_Ciudad_de_M%C3%A9xico.jpg'
  },
  {
    src: '/images/fuente-cibeles-frontal.jpg',
    localName: 'fuente-cibeles-frontal.jpg',
    alt: 'Vista frontal de la Fuente de Cibeles (réplica madrileña) en la Ciudad de México',
    credit: 'Luis Mejía Castañeda',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Fuente_de_los_Cibeles_en_la_CDMX_vista_de_frente.jpg'
  }
];

export const faqs = [
  {
    q: '¿Dónde está la Fuente de Cibeles?',
    a: 'Está en la Plaza Villa de Madrid, en la colonia Roma Norte, alcaldía Cuauhtémoc, código postal 06700, en la Ciudad de México, México. Es una réplica de la fuente homónima de Madrid.'
  },
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
    a: 'Metrobús sobre Avenida Insurgentes (estación Durango) y Metro Línea 1 (Insurgentes o Sevilla) son opciones útiles para llegar caminando a Roma Norte. También hay estaciones de ECOBICI en el entorno inmediato.'
  },
  {
    q: '¿Es la misma fuente que la de Madrid?',
    a: 'No. La de Ciudad de México es una réplica del conjunto madrileño diseñado por Ventura Rodríguez; se inauguró en 1980 como símbolo de los vínculos entre México y España.'
  },
  {
    q: '¿Se puede visitar con niñas, niños o movilidad reducida?',
    a: 'La fuente se observa desde un espacio urbano a nivel de calle. Como la glorieta está rodeada de tránsito, conviene cruzar únicamente por pasos señalizados y mantener atención especial con menores.'
  }
] as const;
