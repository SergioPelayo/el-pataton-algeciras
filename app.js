/* ==========================================================================
   EL PATATÓN ALGECIRAS — CARTA OFICIAL COMPLETA (42 PRODUCTOS CON FOTOS REALES)
   Y CONFIGURADOR DE COMANDA FIEL A ELPATATON.COM/PEDIDOS
   ========================================================================== */

const MENU_ITEMS = [
  // ================= 1. PATATAS CLÁSICAS (7,50 €) =================
  {
    id: 1,
    code: 'Nº 01',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    name: 'Nº 1. Patata Vegetal',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/76388521294a4e05af44c7c09997235d.webp',
    desc: 'Mahonesa, Tomate, Maíz, Remolacha, Aceitunas, Tomate Natural, Cebolla y Lechuga.',
    tags: ['Clásica 7,50 €', 'Opción Patatón +1 €']
  },
  {
    id: 2,
    code: 'Nº 02',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    name: 'Nº 2. Patata Tradicional',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/7c8ea8d84ecc46baa0c5c858a9ce10aa.webp',
    desc: 'Mahonesa, Tomate, Jamón, Atún, Maíz, Zanahoria, Remolacha, Aceitunas y Queso.',
    tags: ['Clásica 7,50 €', 'Opción Patatón +1 €']
  },
  {
    id: 3,
    code: 'Nº 03',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    featured: true,
    badge: 'MUY PEDIDA',
    name: 'Nº 3. Patata a la Mantequilla',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/fe635409f98844b795e0567dd30a3c94.webp',
    desc: 'Mantequilla, Jamón, Lomo, Bacon, Aceitunas, Maíz, Zanahoria y Queso.',
    tags: ['Mantequilla', 'Jamón, Lomo y Bacon']
  },
  {
    id: 4,
    code: 'Nº 04',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    featured: true,
    badge: 'TOP VENTAS',
    name: 'Nº 4. Patata al Roquefort',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/7ca06624442340e8885ac6f102b80269.webp',
    desc: 'Salsa Roquefort, Jamón, Lomo, Bacon, Maíz, Aceitunas, Pollo Relleno y Queso.',
    tags: ['Salsa Roquefort', 'Pollo Relleno']
  },
  {
    id: 5,
    code: 'Nº 05',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    name: 'Nº 5. Patata Completa',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/5a294e6d2a404637a06ed490ea8ebb3c.webp',
    desc: 'Salsa a elegir, Jamón, Atún, Palitos de Cangrejo, Zanahoria, Aceitunas, Maíz y Queso.',
    tags: ['Salsa a elegir', 'Opción Patatón +1 €']
  },
  {
    id: 6,
    code: 'Nº 06',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    name: 'Nº 6. Patata Brava',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/3abad0e8c1084166b9f7165c2028a7bd.webp',
    desc: 'Salsa de Tomate Picante, Jamón, Atún, Lomo, Zanahoria, Maíz, Aceitunas y Queso.',
    tags: ['Toque Picante', 'Opción Patatón +1 €']
  },
  {
    id: 7,
    code: 'Nº 07',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    name: 'Nº 7. Patata Ali-Oli',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/6d95b95e29ad45bfaba754866959c5d7.webp',
    desc: 'Salsa Ali-Oli, Jamón, Atún, Zanahoria, Lomo, Maíz, Aceitunas y Queso.',
    tags: ['Salsa Ali-Oli', 'Opción Patatón +1 €']
  },
  {
    id: 8,
    code: 'Nº 08',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    name: 'Nº 8. Patata Mediterránea',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/58039c1aeac244b38fa80c57f53f81de.webp',
    desc: 'Aceite de Oliva, Atún, Lechuga, Cebolla, Tomate Natural, Maíz, Aceitunas y Queso.',
    tags: ['Aceite de Oliva', 'Opción Patatón +1 €']
  },
  {
    id: 9,
    code: 'Nº 09',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    name: 'Nº 9. Patata Frankfurt',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/a4f88f5b1f384a38a6f0ce845e10f944.webp',
    desc: 'Mahonesa, Tomate, Salchichas, Lomo, Bacon, Aceitunas, Maíz, Lechuga y Queso.',
    tags: ['Salchichas, Lomo y Bacon', 'Opción Patatón +1 €']
  },
  {
    id: 10,
    code: 'Nº 10',
    category: 'clasicas',
    categoryLabel: 'Patatas Clásicas',
    featured: true,
    badge: 'CARNÍVORA',
    name: 'Nº 10. Patata Ibérica',
    price: 7.50,
    canPataton: true,
    img: 'assets/productos/f9b4cfaef6d84eb3bba9c31282f1adf2.webp',
    desc: 'Salsa a elegir, Jamón, Lomo, Bacon, Salchichas, Pollo Relleno y Queso.',
    tags: ['5 Carnes + Queso', 'Salsa a elegir']
  },

  // ================= 2. PATATAS ESPECIALES (8,00 €) =================
  {
    id: 11,
    code: 'Nº 11',
    category: 'especiales',
    categoryLabel: 'Patatas Especiales',
    name: 'Nº 11. Patata Marinera',
    price: 8.00,
    canPataton: true,
    img: 'assets/productos/c09f400ccc91414b96aab8f4908c5be4.webp',
    desc: 'Salsa Rosa, Gambas, Palitos de Cangrejo, Atún, Maíz, Lechuga y Queso.',
    tags: ['Con Gambas', 'Salsa Rosa']
  },
  {
    id: 12,
    code: 'Nº 12',
    category: 'especiales',
    categoryLabel: 'Patatas Especiales',
    name: 'Nº 12. Patata Tropical',
    price: 8.00,
    canPataton: true,
    img: 'assets/productos/0658a57d5e074b8781a268be3b4128d9.webp',
    desc: 'Salsa Rosa, Gambas, Palitos de Cangrejo, Atún, Maíz, Lechuga, Piña y Queso.',
    tags: ['Gambas y Piña', 'Salsa Rosa']
  },
  {
    id: 13,
    code: 'Nº 13',
    category: 'especiales',
    categoryLabel: 'Patatas Especiales',
    name: 'Nº 13. Patata Africana',
    price: 8.00,
    canPataton: true,
    img: 'assets/productos/0d3660bb759241c18bc10eca0f39a86d.webp',
    desc: 'Salsa Africanita, Kebab, Aceitunas, Maíz, Lechuga, Cebolla y Queso.',
    tags: ['Salsa Africanita', 'Con Kebab']
  },
  {
    id: 14,
    code: 'Nº 14',
    category: 'especiales',
    categoryLabel: 'Patatas Especiales',
    featured: true,
    badge: 'CON PULPO',
    name: 'Nº 14. Patata Gallega',
    price: 8.00,
    canPataton: true,
    img: 'assets/productos/5d4919085dbb47d6ad2d9c5a91577cf6.webp',
    desc: 'Salsa a elegir, Pulpo, Maíz, Tomate Natural, Aceitunas, Lechuga y Queso.',
    tags: ['Con Pulpo', 'Salsa a elegir']
  },
  {
    id: 15,
    code: 'Nº 15',
    category: 'especiales',
    categoryLabel: 'Patatas Especiales',
    name: 'Nº 15. Patata Gaucha',
    price: 8.00,
    canPataton: true,
    img: 'assets/productos/57c7c44b3e104918b20d196849fd6b16.webp',
    desc: 'Salsa Gaucha, Jamón, Pollo de Kebab, Salchichas, Cebolla Crispy y Queso.',
    tags: ['Salsa Gaucha', 'Kebab y Cebolla Crispy']
  },
  {
    id: 16,
    code: 'Nº 16',
    category: 'especiales',
    categoryLabel: 'Patatas Especiales',
    name: 'Nº 16. Patata Rusa',
    price: 8.00,
    canPataton: true,
    img: 'assets/productos/da87a537ed9048fc9d2e6fcaeb590fd8.webp',
    desc: 'Salsa a elegir, Huevo Cocido, Atún, Maíz, Aceitunas, Zanahoria y Queso.',
    tags: ['Con Huevo Cocido', 'Salsa a elegir']
  },
  {
    id: 17,
    code: 'Nº 17',
    category: 'especiales',
    categoryLabel: 'Patatas Especiales',
    featured: true,
    badge: 'FAVORITA',
    name: 'Nº 17. Patata Kebab',
    price: 8.00,
    canPataton: true,
    img: 'assets/productos/281e59d4eb8946f7892dab0d7a70941a.webp',
    desc: 'Salsa a elegir, Kebab, Queso, Cebolla Crispy, Maíz, Lechuga y Tomate Natural.',
    tags: ['Carne Kebab', 'Cebolla Crispy']
  },

  // ================= 3. PATATAS AL GUSTO (3,00 € a 8,50 €) =================
  {
    id: 18,
    code: 'Nº 18',
    category: 'gusto',
    categoryLabel: 'Patatas al Gusto',
    name: 'Nº 18. Patata al Gusto',
    price: 7.00,
    canPataton: false,
    img: 'assets/productos/0fbb438b5057410ebb05ed546d01e5cf.webp',
    desc: 'Hasta 5 ingredientes (sin ingredientes especiales). Elige tu salsa e ingredientes.',
    tags: ['Hasta 5 Ingredientes', 'Personalizable']
  },
  {
    id: 19,
    code: 'Nº 19',
    category: 'gusto',
    categoryLabel: 'Patatas al Gusto',
    name: 'Nº 19. Patata al Gusto +',
    price: 7.50,
    canPataton: false,
    img: 'assets/productos/8ec33570dbee4a0da36dea07c1b6cbd8.webp',
    desc: 'Más de 5 ingredientes (sin ingredientes especiales). Elige tu salsa e ingredientes.',
    tags: ['+5 Ingredientes', 'Personalizable']
  },
  {
    id: 20,
    code: 'Nº 20',
    category: 'gusto',
    categoryLabel: 'Patatas al Gusto',
    name: 'Nº 20. Patata al Gusto Especial',
    price: 8.00,
    canPataton: false,
    img: 'assets/productos/633959ad8fd74175892abed72b65b3b3.webp',
    desc: 'Con ingredientes especiales (gambas, kebab, pulpo o huevo). Elige tu salsa e ingredientes.',
    tags: ['Con Especiales', 'Gambas / Kebab / Pulpo / Huevo']
  },
  {
    id: 21,
    code: 'Nº 21',
    category: 'gusto',
    categoryLabel: 'Patatas al Gusto',
    featured: true,
    badge: 'CON TODO',
    name: 'Nº 21. Patata Completa con Todo',
    price: 8.50,
    canPataton: false,
    img: 'assets/productos/7d7e4377a2914594b4278bf0c020e627.webp',
    desc: 'La patata más completa. Todos los ingredientes disponibles.',
    tags: ['Todos los Ingredientes', 'Completa']
  },
  {
    id: 22,
    code: 'Nº 25',
    category: 'gusto',
    categoryLabel: 'Patatas al Gusto',
    name: 'Nº 25. Patata Sola',
    price: 3.00,
    canPataton: false,
    img: 'assets/productos/eb0e4d5bede84134a2cc53906380a1fe.webp',
    desc: 'Aceite de Oliva y Pimienta. Sin ingredientes adicionales.',
    tags: ['Aceite y Pimienta', '3,00 €']
  },
  {
    id: 23,
    code: 'Nº 26',
    category: 'gusto',
    categoryLabel: 'Patatas al Gusto',
    name: 'Nº 26. Patata Simple',
    price: 3.50,
    canPataton: false,
    img: 'assets/productos/e723a248c6774a108f349c1c8f691c64.webp',
    desc: 'Aceite de Oliva, Ajo y Perejil.',
    tags: ['Ajo y Perejil', '3,50 €']
  },

  // ================= 4. PATATÓN (8,50 € a 9,50 €) =================
  {
    id: 24,
    code: 'Nº 22',
    category: 'pataton',
    categoryLabel: 'Patatón',
    featured: true,
    badge: 'TAMAÑO GIGANTE',
    name: 'Nº 22. Patatón',
    price: 8.50,
    canPataton: false,
    img: 'assets/productos/6ad2fe78c5274f03bb91a58254b49802.webp',
    desc: 'Patata más grande. Elige tu salsa e ingredientes.',
    tags: ['Formato Gigante', 'Al Gusto']
  },
  {
    id: 25,
    code: 'Nº 23',
    category: 'pataton',
    categoryLabel: 'Patatón',
    featured: true,
    badge: 'GIGANTE ESPECIAL',
    name: 'Nº 23. Patatón Especial',
    price: 9.00,
    canPataton: false,
    img: 'assets/productos/ae5588950cc8442b815eb89640c1ba24.webp',
    desc: 'Patatón con ingredientes especiales (gambas, kebab, pulpo o huevo).',
    tags: ['Formato Gigante', 'Con Especiales']
  },
  {
    id: 26,
    code: 'Nº 24',
    category: 'pataton',
    categoryLabel: 'Patatón',
    featured: true,
    badge: 'LA REINA DESDE 2005',
    name: 'Nº 24. Patatón Completo con Todo',
    price: 9.50,
    canPataton: false,
    img: 'assets/productos/debc4595b79b481a9b4d854420f7b963.webp',
    desc: 'El patatón más completo. Todos los ingredientes disponibles.',
    tags: ['El Más Grande', 'Con Todos los Ingredientes']
  },

  // ================= 5. KEBAB (5,50 € a 6,50 €) =================
  {
    id: 27,
    code: 'Nº 27',
    category: 'kebab',
    categoryLabel: 'Kebab',
    name: 'Nº 27. Kebab de Pollo Simple',
    price: 5.50,
    canPataton: false,
    img: 'assets/productos/339e4325d9184784b579e135c2608e90.jpeg',
    desc: 'Kebab de pollo sin ingredientes adicionales.',
    tags: ['Kebab Pollo', 'Simple']
  },
  {
    id: 28,
    code: 'Nº 28',
    category: 'kebab',
    categoryLabel: 'Kebab',
    featured: true,
    badge: 'COMPLETO A ELEGIR',
    name: 'Nº 28. Kebab de Pollo',
    price: 6.50,
    canPataton: false,
    img: 'assets/productos/9199bae08680436d85ba718679f3476a.jpeg',
    desc: 'Kebab de pollo con ingredientes y salsas a elegir.',
    tags: ['Kebab Pollo', 'Ingredientes a elegir']
  },

  // ================= 6. PERRITO CALIENTE (2,50 € a 3,00 €) =================
  {
    id: 29,
    code: 'Nº 29',
    category: 'perrito',
    categoryLabel: 'Perrito Caliente',
    name: 'Nº 29. Perrito Caliente Simple',
    price: 2.50,
    canPataton: false,
    img: 'assets/productos/glv_perrito_simple.jpg',
    desc: 'Salchicha simple sin ingredientes adicionales.',
    tags: ['Perrito Simple', '2,50 €']
  },
  {
    id: 30,
    code: 'Nº 30',
    category: 'perrito',
    categoryLabel: 'Perrito Caliente',
    featured: true,
    badge: 'CLÁSICO DEL LOCAL',
    name: 'Nº 30. Perrito Caliente Completo',
    price: 3.00,
    canPataton: false,
    img: 'assets/productos/glv_perrito_completo.jpg',
    desc: 'Salchicha con salsa e ingredientes a elegir.',
    tags: ['Ingredientes a elegir', '3,00 €']
  },

  // ================= 7. BEBIDAS (1,00 € a 2,20 €) =================
  {
    id: 31,
    code: 'BEB-01',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Agua 330ml',
    price: 1.00,
    canPataton: false,
    img: 'assets/productos/glv_agua330.jpg',
    desc: 'Botellín de agua mineral 330ml.',
    tags: ['330ml', '1,00 €']
  },
  {
    id: 32,
    code: 'BEB-02',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Agua 1.5L',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_agua15.jpg',
    desc: 'Botella de agua mineral 1,5 litros.',
    tags: ['1.5L', '1,50 €']
  },
  {
    id: 33,
    code: 'BEB-03',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Coca-Cola lata',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_cocacola.jpg',
    desc: 'Lata refrigerada de 330ml.',
    tags: ['Lata 330ml', '1,50 €']
  },
  {
    id: 34,
    code: 'BEB-04',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Coca-Cola Zero',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_cocacola_zero.jpg',
    desc: 'Lata refrigerada de 330ml.',
    tags: ['Lata 330ml', '1,50 €']
  },
  {
    id: 35,
    code: 'BEB-05',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'KAS Naranja Zero',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_kas_naranja.jpg',
    desc: 'Lata refrigerada de 330ml.',
    tags: ['Lata 330ml', '1,50 €']
  },
  {
    id: 36,
    code: 'BEB-06',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'KAS Limón',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_kas_limon.jpg',
    desc: 'Lata refrigerada de 330ml.',
    tags: ['Lata 330ml', '1,50 €']
  },
  {
    id: 37,
    code: 'BEB-07',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Aquarius Limón',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_aquarius_limon.jpg',
    desc: 'Lata refrigerada de 330ml.',
    tags: ['Lata 330ml', '1,50 €']
  },
  {
    id: 38,
    code: 'BEB-08',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Aquarius Naranja',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_aquarius_naranja.jpg',
    desc: 'Lata refrigerada de 330ml.',
    tags: ['Lata 330ml', '1,50 €']
  },
  {
    id: 39,
    code: 'BEB-09',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Nestea Limón',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_nestea.jpg',
    desc: 'Lata refrigerada de 330ml.',
    tags: ['Lata 330ml', '1,50 €']
  },
  {
    id: 41,
    code: 'BEB-10',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Nestea Maracuyá',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/cad270be8c6f43958b2aa69462b1e19d.jpg',
    desc: 'Lata refrigerada.',
    tags: ['Lata', '1,50 €']
  },
  {
    id: 40,
    code: 'BEB-11',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Cerveza Cruzcampo',
    price: 1.50,
    canPataton: false,
    img: 'assets/productos/glv_cruzcampo.jpg',
    desc: 'Lata 330ml (Solo mayores de 18 años).',
    tags: ['Lata 330ml', '+18 Años']
  },
  {
    id: 42,
    code: 'BEB-12',
    category: 'bebidas',
    categoryLabel: 'Bebidas',
    name: 'Cerveza 1 litro',
    price: 2.20,
    canPataton: false,
    img: 'assets/productos/1d04ad942a414cec9c6e2eb397005d01.jpg',
    desc: 'Formato litrona 1 litro (Solo mayores de 18 años).',
    tags: ['1 Litro', '+18 Años']
  }
];

/* ==========================================================================
   DATOS EXACTOS DEL CONFIGURADOR (ELPATATON.COM/PEDIDOS)
   ========================================================================== */
const BUILDER_BASES = [
  { id: 'patata', name: 'Tamaño Patata Estándar (Nº 18 / 19 / 20)' },
  { id: 'pataton', name: 'Tamaño PATATÓN Gigante (Nº 22 / 23 / 24)' }
];

// Grupo 1: Los 21 Condimentos y Salsas oficiales
const BUILDER_SAUCES = [
  'Sal', 'Pimienta', 'Orégano', 'Comino', 'Tabasco', 'Mostaza',
  'Aceite de Oliva', 'Mantequilla', 'Ketchup', 'Ali-Oli', 'Mahonesa',
  'Tomate Frito', 'Salsa Gaucha', 'Salsa Africanita', 'Salsa Brava',
  'Salsa Ranchera', 'Salsa Rosa', 'Salsa Roquefort', 'Salsa Yogurt',
  'Salsa Cheddar', 'Salsa Barbacoa'
];

// Grupo 2: Los 20 Ingredientes normales oficiales
const BUILDER_TOPPINGS = [
  'Aceitunas Negras', 'Aceitunas', 'Maíz', 'Zanahoria', 'Remolacha',
  'Lechuga', 'Tomate Natural', 'Cebolla', 'Champiñones', 'Pimientos Asados',
  'Cebolla Crispy', 'Salchichas', 'Pollo Relleno', 'Jamón', 'Lomo al Horno',
  'Bacon', 'Atún', 'Palitos de Cangrejo', 'Queso', 'Piña'
];

// Grupo 3: Los 4 Ingredientes Especiales / Extras oficiales
const BUILDER_SPECIALS = [
  { id: 'Gambas', name: 'Gambas', extra: 0.20 },
  { id: 'Kebab', name: 'Kebab', extra: 0.25 },
  { id: 'Pulpo', name: 'Pulpo', extra: 0.00 },
  { id: 'Huevo Cocido', name: 'Huevo Cocido', extra: 0.00 }
];

// Estado actual del configurador y carrito
const builderState = {
  size: 'patata', // 'patata' o 'pataton'
  sauces: ['Sal', 'Mantequilla', 'Salsa Roquefort'],
  toppings: ['Jamón', 'Lomo al Horno', 'Bacon', 'Pollo Relleno', 'Queso'],
  specials: []
};

const orderCart = [];

let activeCategoryFilter = 'all';
let activeSearchQuery = '';
let activeCravingFilter = '';
let bizumPeopleCount = 2;

const CRAVING_IDS = {
  queso: [3, 4, 5, 22],
  mar: [11, 14, 8, 20],
  carnivoro: [9, 10, 15, 17, 24, 28, 30],
  picante: [6, 13, 15, 23]
};

function formatPrice(num) {
  return num.toFixed(2).replace('.', ',') + ' €';
}

/* ==========================================================================
   1. ESTADO EN VIVO DEL HORNO (LUNES A SÁBADO 20:00 – 02:00 · DOMINGO CERRADO)
   ========================================================================== */
function updateLiveOvenStatus() {
  const dot = document.getElementById('live-status-dot');
  const text = document.getElementById('live-status-text');
  if (!dot || !text) return;

  const now = new Date();
  const day = now.getDay(); // 0 Dom, 1 Lun .. 6 Sáb
  const hour = now.getHours();
  const mins = now.getMinutes();
  const timeFloat = hour + mins / 60;

  // Abierto de Lunes (1) a Sábado (6) de 20:00 a 02:00 (madrugada siguiente)
  const isEveningOpen = (day >= 1 && day <= 6) && (timeFloat >= 20);
  const isLateNightOpen = ((day >= 2 && day <= 6) || day === 0) && (timeFloat < 2.0);

  if (isEveningOpen || isLateNightOpen) {
    dot.classList.add('is-open');
    text.textContent = 'ABIERTO AHORA EN AV. VENECIA · PEDIDOS HASTA LAS 02:00';
  } else if (day === 0 && timeFloat >= 2.0) {
    dot.classList.remove('is-open');
    text.textContent = 'DOMINGO CERRADO POR DESCANSO · VOLVEMOS EL LUNES A LAS 20:00';
  } else {
    dot.classList.remove('is-open');
    text.textContent = 'PREPARANDO HORNOS HOY · ABRIMOS DE 20:00 A 02:00 EN AV. VENECIA';
  }
}

/* ==========================================================================
   2. RENDERIZADO DE LAS 42 TARJETAS CON SUS FOTOS REALES Y BUSCADOR
   ========================================================================== */
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const q = activeSearchQuery.trim().toLowerCase();

  const filtered = MENU_ITEMS.filter(item => {
    if (activeCravingFilter && CRAVING_IDS[activeCravingFilter]) {
      if (!CRAVING_IDS[activeCravingFilter].includes(item.id)) return false;
    } else {
      const matchCat = activeCategoryFilter === 'all' || item.category === activeCategoryFilter;
      if (!matchCat) return false;
    }
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q)
    );
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; background: #FFFDF9; border: var(--border-ink);">
        <p style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.5rem;">No hemos encontrado platos con esa búsqueda.</p>
        <p style="color: var(--ink-muted); font-size: 0.9rem;">Prueba buscando otro ingrediente (ej. Roquefort, Kebab, Pulpo, Gambas) o pulsa en «Todas (42)».</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card ${item.featured ? 'menu-card--featured' : ''}">
      ${item.badge ? `<span class="menu-card__badge">${item.badge}</span>` : ''}
      
      <div class="menu-card__photo-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy" class="menu-card__photo" />
        <span class="menu-card__cat-pill">${item.categoryLabel}</span>
      </div>

      <div class="menu-card__body">
        <div class="menu-card__top">
          <div>
            <span class="menu-card__code">REF // ${item.code}</span>
            <h3 class="menu-card__title">${item.name}</h3>
          </div>
          <span class="menu-card__price">${formatPrice(item.price)}</span>
        </div>

        ${item.desc ? `<p class="menu-card__desc">${item.desc}</p>` : ''}

        <div class="menu-card__actions">
          <button type="button" class="btn btn--paper menu-card__btn" data-add-id="${item.id}" data-pataton="0">
            + Añadir (${formatPrice(item.price)})
          </button>
          ${item.canPataton ? `
            <button type="button" class="btn btn--butter menu-card__btn" data-add-id="${item.id}" data-pataton="1">
              + Hacerla PATATÓN (${formatPrice(item.price + 1.0)})
            </button>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');

  // Listeners para añadir platos directamente al ticket de comanda
  grid.querySelectorAll('[data-add-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.addId);
      const makePataton = btn.dataset.pataton === '1';
      const prod = MENU_ITEMS.find(m => m.id === id);
      if (!prod) return;

      const finalName = makePataton ? `${prod.name} (en PATATÓN +1€)` : prod.name;
      const finalPrice = makePataton ? prod.price + 1.0 : prod.price;

      orderCart.push({
        title: finalName,
        details: prod.desc || '',
        price: finalPrice,
        foilOwner: ''
      });

      const originalText = btn.textContent;
      btn.textContent = 'Añadido al Ticket';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 1100);

      updateTicketReceipt();
      triggerFloatingCartBump();
    });
  });
}

function triggerFloatingCartBump() {
  const floatBtn = document.getElementById('floating-cart-btn');
  if (!floatBtn) return;
  floatBtn.classList.remove('is-bumping');
  void floatBtn.offsetWidth; // Reflow para reiniciar animación
  floatBtn.classList.add('is-bumping');
  setTimeout(() => {
    floatBtn.classList.remove('is-bumping');
  }, 550);
}

function scrollToTicketWithFlash() {
  const ticketAside = document.getElementById('zona-ticket');
  if (!ticketAside) return;
  ticketAside.scrollIntoView({ behavior: 'smooth', block: 'center' });
  ticketAside.classList.remove('is-highlighted');
  void ticketAside.offsetWidth;
  ticketAside.classList.add('is-highlighted');
  setTimeout(() => {
    ticketAside.classList.remove('is-highlighted');
  }, 1600);
}

function setupMenuFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cravingButtons = document.querySelectorAll('[data-craving]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      cravingButtons.forEach(cb => cb.classList.remove('is-active'));
      activeCravingFilter = '';
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeCategoryFilter = btn.dataset.filter;
      renderMenu();
    });
  });

  cravingButtons.forEach(cbtn => {
    cbtn.addEventListener('click', () => {
      const craving = cbtn.dataset.craving;
      if (activeCravingFilter === craving) {
        activeCravingFilter = '';
        cbtn.classList.remove('is-active');
      } else {
        activeCravingFilter = craving;
        cravingButtons.forEach(cb => cb.classList.remove('is-active'));
        cbtn.classList.add('is-active');
      }
      renderMenu();
    });
  });

  const comboParejaBtn = document.getElementById('btn-combo-pareja');
  if (comboParejaBtn) {
    comboParejaBtn.addEventListener('click', () => {
      orderCart.push(
        { title: 'Nº 4. Patata al Roquefort', details: 'Patata asada, mantequilla, sal, pimienta, jamón, queso y salsa roquefort', price: 7.50, foilOwner: 'Persona 1' },
        { title: 'Nº 17. Patata Kebab', details: 'Patata asada, mantequilla, sal, pimienta, pollo kebab, queso y salsa yogurt', price: 8.00, foilOwner: 'Persona 2' },
        { title: 'Coca-Cola lata', details: 'Lata refrigerada 330ml', price: 1.50, foilOwner: 'Persona 1' },
        { title: 'Coca-Cola Zero', details: 'Lata refrigerada 330ml', price: 1.50, foilOwner: 'Persona 2' }
      );
      bizumPeopleCount = 2;
      updateTicketReceipt();
      triggerFloatingCartBump();
      scrollToTicketWithFlash();
    });
  }

  const comboAmigosBtn = document.getElementById('btn-combo-amigos');
  if (comboAmigosBtn) {
    comboAmigosBtn.addEventListener('click', () => {
      orderCart.push(
        { title: 'Nº 4. Patata al Roquefort', details: 'Jamón, queso y salsa roquefort', price: 7.50, foilOwner: 'Carlos' },
        { title: 'Nº 14. Patata Gallega', details: 'Pulpo, aceite de oliva y pimentón', price: 8.00, foilOwner: 'Isa' },
        { title: 'Nº 17. Patata Kebab (en PATATÓN +1€)', details: 'Pollo kebab, queso y salsa yogurt', price: 9.00, foilOwner: 'Javi' },
        { title: 'Nº 6. Patata Brava', details: 'Pollo relleno, queso y salsa brava', price: 7.50, foilOwner: 'Marta' }
      );
      bizumPeopleCount = 4;
      updateTicketReceipt();
      triggerFloatingCartBump();
      scrollToTicketWithFlash();
    });
  }

  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value || '';
      renderMenu();
    });
  }
}

/* ==========================================================================
   3. CONFIGURADOR OFICIAL DE PATATA / PATATÓN AL GUSTO (Nº 18 A Nº 24)
   ========================================================================== */
function calculateCustomPotatoPricing() {
  const isPataton = builderState.size === 'pataton';
  const numNormal = builderState.toppings.length;
  const hasSpecials = builderState.specials.length > 0;

  // Extras con recargo adicional (Gambas +0.20, Kebab +0.25)
  const extraFees = builderState.specials.reduce((sum, spId) => {
    const sp = BUILDER_SPECIALS.find(s => s.id === spId);
    return sum + (sp ? sp.extra : 0);
  }, 0);

  let tariffName = '';
  let basePrice = 7.00;

  if (isPataton) {
    if (numNormal >= 12 && hasSpecials) {
      tariffName = 'Nº 24. Patatón Completo con Todo';
      basePrice = 9.50;
    } else if (hasSpecials) {
      tariffName = 'Nº 23. Patatón Especial';
      basePrice = 9.00;
    } else {
      tariffName = 'Nº 22. Patatón al Gusto';
      basePrice = 8.50;
    }
  } else {
    if (numNormal >= 12 && hasSpecials) {
      tariffName = 'Nº 21. Patata Completa con Todo';
      basePrice = 8.50;
    } else if (hasSpecials) {
      tariffName = 'Nº 20. Patata al Gusto Especial';
      basePrice = 8.00;
    } else if (numNormal > 5) {
      tariffName = 'Nº 19. Patata al Gusto + (>5 ing.)';
      basePrice = 7.50;
    } else {
      tariffName = 'Nº 18. Patata al Gusto (hasta 5 ing.)';
      basePrice = 7.00;
    }
  }

  return {
    tariffName,
    totalPrice: basePrice + extraFees
  };
}

function renderBuilderControls() {
  const baseContainer = document.getElementById('base-chips');
  const sauceContainer = document.getElementById('sauce-chips');
  const toppingContainer = document.getElementById('topping-chips');
  const specialContainer = document.getElementById('special-chips');

  if (!baseContainer || !sauceContainer || !toppingContainer || !specialContainer) return;

  // 1. Tamaño Base
  baseContainer.innerHTML = BUILDER_BASES.map(b => {
    const selected = builderState.size === b.id;
    return `
      <button type="button" class="ing-chip ${selected ? 'is-selected' : ''}" data-size="${b.id}">
        <span>${b.name}</span>
      </button>
    `;
  }).join('');

  // 2. Condimentos y Salsas (21)
  sauceContainer.innerHTML = BUILDER_SAUCES.map(sauce => {
    const selected = builderState.sauces.includes(sauce);
    return `
      <button type="button" class="ing-chip ${selected ? 'is-selected' : ''}" data-sauce="${sauce}">
        <span>${sauce}</span>
      </button>
    `;
  }).join('');

  // 3. Ingredientes Normales (20)
  toppingContainer.innerHTML = BUILDER_TOPPINGS.map(top => {
    const selected = builderState.toppings.includes(top);
    return `
      <button type="button" class="ing-chip ${selected ? 'is-selected' : ''}" data-topping="${top}">
        <span>${top}</span>
      </button>
    `;
  }).join('');

  // 4. Ingredientes Especiales (4)
  specialContainer.innerHTML = BUILDER_SPECIALS.map(sp => {
    const selected = builderState.specials.includes(sp.id);
    const extraLabel = sp.extra > 0 ? `<span class="ing-chip__extra">+${formatPrice(sp.extra)}</span>` : `<span class="ing-chip__extra">Especial</span>`;
    return `
      <button type="button" class="ing-chip ${selected ? 'is-selected' : ''}" data-special="${sp.id}">
        <span>${sp.name}</span>
        ${extraLabel}
      </button>
    `;
  }).join('');

  // Listeners
  baseContainer.querySelectorAll('[data-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      builderState.size = btn.dataset.size;
      renderBuilderControls();
      updateTicketReceipt();
    });
  });

  sauceContainer.querySelectorAll('[data-sauce]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.sauce;
      if (builderState.sauces.includes(s)) {
        builderState.sauces = builderState.sauces.filter(item => item !== s);
      } else {
        builderState.sauces.push(s);
      }
      renderBuilderControls();
      updateTicketReceipt();
    });
  });

  toppingContainer.querySelectorAll('[data-topping]').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.topping;
      if (builderState.toppings.includes(t)) {
        builderState.toppings = builderState.toppings.filter(item => item !== t);
      } else {
        builderState.toppings.push(t);
      }
      renderBuilderControls();
      updateTicketReceipt();
    });
  });

  specialContainer.querySelectorAll('[data-special]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sp = btn.dataset.special;
      if (builderState.specials.includes(sp)) {
        builderState.specials = builderState.specials.filter(item => item !== sp);
      } else {
        builderState.specials.push(sp);
      }
      renderBuilderControls();
      updateTicketReceipt();
    });
  });
}

function updateTicketReceipt() {
  const baseNameEl = document.getElementById('ticket-base-name');
  const customPriceEl = document.getElementById('ticket-custom-price');
  const btnCustomPriceEl = document.getElementById('btn-custom-price-label');
  const detailsEl = document.getElementById('ticket-SaucesAndToppings');
  const cartCountEl = document.getElementById('ticket-cart-count');
  const cartListEl = document.getElementById('ticket-cart-list');
  const totalPriceEl = document.getElementById('ticket-price');
  const bizumPeopleEl = document.getElementById('bizum-people-count');
  const bizumBreakdownEl = document.getElementById('ticket-bizum-breakdown');

  if (!baseNameEl) return;

  const customCalc = calculateCustomPotatoPricing();
  baseNameEl.textContent = customCalc.tariffName;
  customPriceEl.textContent = formatPrice(customCalc.totalPrice);
  if (btnCustomPriceEl) {
    btnCustomPriceEl.textContent = formatPrice(customCalc.totalPrice);
  }

  const allChosenToppings = [...builderState.toppings, ...builderState.specials];
  detailsEl.innerHTML = `
    <div style="margin-top: 0.35rem;"><strong>Salsas/Cond.:</strong> ${builderState.sauces.length ? builderState.sauces.join(', ') : 'Ninguna'}</div>
    <div style="margin-top: 0.25rem;"><strong>Ingredientes (${allChosenToppings.length}):</strong> ${allChosenToppings.length ? allChosenToppings.join(', ') : 'Solo base'}</div>
  `;

  cartCountEl.textContent = String(orderCart.length);

  const grandTotal = orderCart.reduce((acc, item) => acc + item.price, 0);

  if (orderCart.length === 0) {
    cartListEl.innerHTML = `<li style="color: var(--ink-muted); font-size: 0.76rem; padding: 0.35rem 0;">Tu carro está vacío (0,00 €). Pulsa <strong>«+ Añadir»</strong> en cualquier plato de la carta o pulsa el botón amarillo del configurador para meter platos aquí.</li>`;
  } else {
    cartListEl.innerHTML = orderCart.map((item, idx) => `
      <li class="ticket-cart-item">
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.4rem;">
            <strong>1x ${item.title}</strong>
            <div class="ticket-cart-item__right">
              <span>${formatPrice(item.price)}</span>
              <button type="button" class="ticket-cart-remove" data-remove-idx="${idx}" title="Quitar plato">[x]</button>
            </div>
          </div>
          ${item.details ? `<div class="ticket-cart-item__sub">${item.details}</div>` : ''}
          <div class="ticket-foil-tag-row">
            <span class="ticket-foil-tag-label">ROTULAR ALBAL:</span>
            <input
              type="text"
              class="ticket-foil-tag-input"
              data-foil-idx="${idx}"
              value="${item.foilOwner || ''}"
              placeholder="¿De quién es? (ej. Carlos)"
              maxlength="24"
            />
          </div>
        </div>
      </li>
    `).join('');

    cartListEl.querySelectorAll('[data-remove-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.removeIdx);
        orderCart.splice(idx, 1);
        updateTicketReceipt();
      });
    });

    cartListEl.querySelectorAll('[data-foil-idx]').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = Number(inp.dataset.foilIdx);
        if (orderCart[idx]) {
          orderCart[idx].foilOwner = e.target.value;
          updateBizumSection(grandTotal);
        }
      });
    });
  }

  totalPriceEl.textContent = formatPrice(grandTotal);

  if (bizumPeopleEl) {
    bizumPeopleEl.textContent = String(bizumPeopleCount);
  }
  if (bizumBreakdownEl) {
    updateBizumSection(grandTotal);
  }

  // Actualizar también el Carrito / Ticket Flotante siempre accesible
  const floatBtn = document.getElementById('floating-cart-btn');
  const floatBadge = document.getElementById('floating-cart-badge');
  const floatSub = document.getElementById('floating-cart-sub');
  const floatTotal = document.getElementById('floating-cart-total');

  if (floatBadge) floatBadge.textContent = String(orderCart.length);
  if (floatTotal) floatTotal.textContent = formatPrice(grandTotal);
  if (floatSub) {
    if (orderCart.length === 0) {
      floatSub.textContent = '0 platos en tu carro';
    } else if (orderCart.length === 1) {
      floatSub.textContent = '1 plato añadido al ticket';
    } else {
      floatSub.textContent = `${orderCart.length} platos añadidos al ticket`;
    }
  }
  if (floatBtn) {
    floatBtn.classList.toggle('has-items', orderCart.length > 0);
  }
}

function updateBizumSection(grandTotal) {
  const bizumBreakdownEl = document.getElementById('ticket-bizum-breakdown');
  if (!bizumBreakdownEl) return;

  const perPersonEqual = grandTotal / Math.max(1, bizumPeopleCount);

  // Agrupar por nombre escrito en el papel de plata (si hay nombres)
  const byOwner = {};
  let unnamedTotal = 0;
  orderCart.forEach(item => {
    const cleanName = (item.foilOwner || '').trim();
    if (cleanName) {
      byOwner[cleanName] = (byOwner[cleanName] || 0) + item.price;
    } else {
      unnamedTotal += item.price;
    }
  });

  const ownerNames = Object.keys(byOwner);
  let html = `
    <div class="bizum-equal-line">
      <span>A escote entre ${bizumPeopleCount} personas:</span>
      <strong>${formatPrice(perPersonEqual)} / pers.</strong>
    </div>
  `;

  if (ownerNames.length > 0) {
    html += `<div class="bizum-named-list">`;
    ownerNames.forEach(name => {
      html += `
        <div class="bizum-named-item">
          <span>Albal «${name}»:</span>
          <strong>Bizum de ${formatPrice(byOwner[name])}</strong>
        </div>
      `;
    });
    if (unnamedTotal > 0) {
      html += `
        <div class="bizum-named-item">
          <span>Para compartir / sin nombre:</span>
          <strong>${formatPrice(unnamedTotal)}</strong>
        </div>
      `;
    }
    html += `</div>`;
  }

  bizumBreakdownEl.innerHTML = html;
}

function buildOrderSummaryLines() {
  const pickupMode = document.getElementById('ticket-pickup-mode')?.value || 'Recoger en Local (Av. Venecia, 1)';
  const ovenSlot = document.getElementById('ticket-oven-slot')?.value || 'Lo antes posible (~20 min)';

  const lines = [
    'PEDIDO OFICIAL — EL PATATÓN ALGECIRAS (956 65 81 22)',
    `Modalidad: ${pickupMode}`,
    `Hornada solicitada: ${ovenSlot}`,
    '-----------------------------------'
  ];

  if (orderCart.length > 0) {
    orderCart.forEach((item, i) => {
      const ownerTag = item.foilOwner && item.foilOwner.trim()
        ? ` [ROTULAR EN ALBAL: "${item.foilOwner.trim().toUpperCase()}"]`
        : '';
      lines.push(`${i + 1}. ${item.title}${ownerTag} — ${formatPrice(item.price)}`);
      if (item.details) lines.push(`   (${item.details})`);
    });
  } else {
    const customCalc = calculateCustomPotatoPricing();
    const allChosenToppings = [...builderState.toppings, ...builderState.specials];
    const customOwner = document.getElementById('custom-foil-owner')?.value.trim();
    const ownerTag = customOwner ? ` [ROTULAR EN ALBAL: "${customOwner.toUpperCase()}"]` : '';
    lines.push(`1. ${customCalc.tariffName}${ownerTag} — ${formatPrice(customCalc.totalPrice)}`);
    lines.push(`   Salsas: ${builderState.sauces.join(', ') || 'Ninguna'}`);
    lines.push(`   Ingredientes: ${allChosenToppings.join(', ') || 'Solo base'}`);
  }

  const totalText = document.getElementById('ticket-price')?.textContent || '7,00 €';
  lines.push('-----------------------------------');
  lines.push(`TOTAL PEDIDO: ${totalText}`);

  // Añadir desglose Bizum si hay varios comensales
  const byOwner = {};
  orderCart.forEach(item => {
    const cleanName = (item.foilOwner || '').trim();
    if (cleanName) byOwner[cleanName] = (byOwner[cleanName] || 0) + item.price;
  });
  const ownerKeys = Object.keys(byOwner);
  if (ownerKeys.length > 0) {
    lines.push('CUENTA BIZUM POR PERSONA:');
    ownerKeys.forEach(k => {
      lines.push(`- ${k}: ${formatPrice(byOwner[k])}`);
    });
  }

  return lines;
}

function setupTicketActions() {
  const addCustomBtn = document.getElementById('btn-add-custom-to-order');
  const copyBtn = document.getElementById('btn-copy-ticket');
  const whatsappBtn = document.getElementById('btn-whatsapp-group');
  const clearBtn = document.getElementById('btn-clear-cart');
  const feedback = document.getElementById('copy-feedback');
  const floatCartBtn = document.getElementById('floating-cart-btn');
  const bizumMinus = document.getElementById('bizum-minus');
  const bizumPlus = document.getElementById('bizum-plus');

  if (floatCartBtn) {
    floatCartBtn.addEventListener('click', scrollToTicketWithFlash);
  }

  if (bizumMinus) {
    bizumMinus.addEventListener('click', () => {
      if (bizumPeopleCount > 1) {
        bizumPeopleCount--;
        updateTicketReceipt();
      }
    });
  }

  if (bizumPlus) {
    bizumPlus.addEventListener('click', () => {
      if (bizumPeopleCount < 20) {
        bizumPeopleCount++;
        updateTicketReceipt();
      }
    });
  }

  if (addCustomBtn) {
    addCustomBtn.addEventListener('click', () => {
      const customCalc = calculateCustomPotatoPricing();
      const allChosenToppings = [...builderState.toppings, ...builderState.specials];
      const ownerInput = document.getElementById('custom-foil-owner');
      const foilOwner = ownerInput ? ownerInput.value.trim() : '';

      orderCart.push({
        title: customCalc.tariffName,
        details: `Salsas: ${builderState.sauces.join(', ') || 'Sin salsa'} | Ing.: ${allChosenToppings.join(', ') || 'Solo base'}`,
        price: customCalc.totalPrice,
        foilOwner
      });
      if (ownerInput) ownerInput.value = '';
      updateTicketReceipt();
      triggerFloatingCartBump();
      if (feedback) {
        feedback.textContent = 'Patata configurada añadida al ticket con su etiqueta de papel albal.';
        setTimeout(() => { feedback.textContent = ''; }, 3000);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      orderCart.length = 0;
      updateTicketReceipt();
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const lines = buildOrderSummaryLines();
      const url = `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const lines = buildOrderSummaryLines();
      try {
        await navigator.clipboard.writeText(lines.join('\n'));
        feedback.textContent = 'Comanda completa y desglose Bizum copiados al portapapeles.';
        setTimeout(() => { feedback.textContent = ''; }, 4000);
      } catch {
        feedback.textContent = 'Comanda lista en pantalla para llamar al 956 65 81 22.';
      }
    });
  }
}

function setupFoilEntrance() {
  const curtain = document.getElementById('foil-curtain');
  if (!curtain) {
    document.body.classList.remove('is-unwrapping');
    return;
  }

  let opened = false;
  const openFoil = () => {
    if (opened) return;
    opened = true;
    curtain.classList.add('is-opened');
    document.body.classList.remove('is-unwrapping');
    setTimeout(() => {
      curtain.remove();
    }, 1100);
  };

  curtain.addEventListener('click', openFoil);
  setTimeout(openFoil, 1150);
}

document.addEventListener('DOMContentLoaded', () => {
  setupFoilEntrance();
  updateLiveOvenStatus();
  renderMenu();
  setupMenuFilters();
  renderBuilderControls();
  updateTicketReceipt();
  setupTicketActions();
});
