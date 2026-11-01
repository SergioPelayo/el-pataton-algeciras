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
    badge: 'MUY PEDIDA', // <!-- CONFIRMAR CON ISA Y CRISTINA -->
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
    badge: 'TOP VENTAS', // <!-- CONFIRMAR CON ISA Y CRISTINA -->
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
    badge: 'CARNÍVORA', // <!-- CONFIRMAR CON ISA Y CRISTINA -->
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
    badge: 'FAVORITA', // <!-- CONFIRMAR CON ISA Y CRISTINA -->
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
  { id: 'Gambas', name: 'Gambas', extra: 0.20 }, // <!-- CONFIRMAR CON ISA Y CRISTINA -->
  { id: 'Kebab', name: 'Kebab', extra: 0.25 }, // <!-- CONFIRMAR CON ISA Y CRISTINA -->
  { id: 'Pulpo', name: 'Pulpo', extra: 0.00 },
  { id: 'Huevo Cocido', name: 'Huevo Cocido', extra: 0.00 }
];

// Ficha de producto: salsas que se ofrecen en los platos con «Salsa a elegir»
// <!-- CONFIRMAR CON ISA Y CRISTINA -->
const SAUCE_CHOICE_TEXT = 'Salsa a elegir';
const SHEET_SAUCES = BUILDER_SAUCES.filter(s => !['Sal', 'Pimienta', 'Orégano', 'Comino', 'Tabasco'].includes(s));
// Categorías cuyos ingredientes se pueden quitar desde la ficha
const SHEET_CUSTOMIZABLE_CATEGORIES = ['clasicas', 'especiales'];

function productHasSauceChoice(prod) {
  return SHEET_CUSTOMIZABLE_CATEGORIES.includes(prod.category) && prod.desc.includes(SAUCE_CHOICE_TEXT);
}

function splitDescIngredients(desc) {
  return String(desc || '')
    .replace(/\.$/, '')
    .split(/,\s*|\s+y\s+/)
    .map(s => s.trim())
    .filter(Boolean);
}

function getProductIngredients(prod) {
  if (!SHEET_CUSTOMIZABLE_CATEGORIES.includes(prod.category)) return [];
  return splitDescIngredients(prod.desc).filter(s => s !== SAUCE_CHOICE_TEXT);
}

function buildProductDetails(prod, options = {}) {
  const desc = prod.desc || '';
  const removed = options.removed || [];
  if (removed.length === 0) {
    return options.sauce ? desc.replace(SAUCE_CHOICE_TEXT, options.sauce) : desc;
  }
  // Rehacer la lista sin los ingredientes quitados para que la cocina no se confunda
  const kept = splitDescIngredients(desc)
    .map(s => (s === SAUCE_CHOICE_TEXT && options.sauce ? options.sauce : s))
    .filter(s => !removed.includes(s));
  const list = kept.length > 1 ? `${kept.slice(0, -1).join(', ')} y ${kept[kept.length - 1]}` : kept.join('');
  return `SIN ${removed.join(', ').toUpperCase()} · ${list}.`;
}

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

const STORAGE_KEY_CART = 'elpataton_orderCart';
const STORAGE_KEY_BIZUM = 'elpataton_bizumPeopleCount';
const STORAGE_KEY_LAST_ORDER = 'elpataton_lastOrder';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(orderCart));
    localStorage.setItem(STORAGE_KEY_BIZUM, String(bizumPeopleCount));
  } catch (err) {
    // Continuar sin fallo si localStorage no está disponible
  }
}

function sanitizeCartItems(list) {
  if (!Array.isArray(list)) return [];
  return list
    .filter(item => item && typeof item.title === 'string' && typeof item.price === 'number')
    .map(item => ({
      title: String(item.title),
      details: typeof item.details === 'string' ? item.details : '',
      price: Number(item.price),
      foilOwner: typeof item.foilOwner === 'string' ? item.foilOwner : ''
    }));
}

function loadCartFromStorage() {
  try {
    const rawCart = localStorage.getItem(STORAGE_KEY_CART);
    if (rawCart) {
      const parsedCart = JSON.parse(rawCart);
      if (Array.isArray(parsedCart)) {
        orderCart.length = 0;
        orderCart.push(...sanitizeCartItems(parsedCart));
      }
    }
    const rawBizum = localStorage.getItem(STORAGE_KEY_BIZUM);
    if (rawBizum !== null) {
      const parsedCount = parseInt(rawBizum, 10);
      if (!Number.isNaN(parsedCount) && parsedCount >= 1 && parsedCount <= 20) {
        bizumPeopleCount = parsedCount;
      }
    }
  } catch (err) {
    // Continuar sin fallo si localStorage no está disponible
  }
}

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
    text.textContent = 'Abierto ahora en Av. Venecia · Pedidos hasta las 02:00';
  } else if (day === 0 && timeFloat >= 2.0) {
    dot.classList.remove('is-open');
    text.textContent = 'Domingo cerrado por descanso · Volvemos el lunes a las 20:00';
  } else {
    dot.classList.remove('is-open');
    text.textContent = 'Preparando hornos hoy · Abrimos de 20:00 a 02:00 en Av. Venecia';
  }
}

/* ==========================================================================
   2. FILTRADO Y BÚSQUEDA SOBRE LAS 42 TARJETAS ESTÁTICAS EN EL HTML (SEO)
   ========================================================================== */
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const q = activeSearchQuery.trim().toLowerCase();
  const cards = grid.querySelectorAll('.menu-card');
  const emptyState = document.getElementById('menu-empty-state');
  let visibleCount = 0;

  cards.forEach(card => {
    const id = Number(card.dataset.id);
    const cat = card.dataset.category || '';
    const item = MENU_ITEMS.find(m => m.id === id);

    let matches = true;

    if (activeCravingFilter && CRAVING_IDS[activeCravingFilter]) {
      if (!CRAVING_IDS[activeCravingFilter].includes(id)) {
        matches = false;
      }
    } else if (activeCategoryFilter !== 'all' && cat !== activeCategoryFilter) {
      matches = false;
    }

    if (matches && q) {
      if (item) {
        matches =
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q);
      } else {
        matches = card.textContent.toLowerCase().includes(q);
      }
    }

    card.hidden = !matches;
    if (matches) visibleCount++;
  });

  if (emptyState) {
    emptyState.hidden = visibleCount > 0;
  }
}

let currentLightboxProductId = null;

function addMenuProductToCart(id, makePataton, triggerBtn, options = {}) {
  const prod = MENU_ITEMS.find(m => m.id === id);
  if (!prod) return;

  const finalName = makePataton ? `${prod.name} (en PATATÓN +1€)` : prod.name;
  const finalPrice = makePataton ? prod.price + 1.0 : prod.price;

  orderCart.push({
    title: finalName,
    details: buildProductDetails(prod, options),
    price: finalPrice,
    foilOwner: options.foilOwner || ''
  });

  if (triggerBtn) {
    const originalText = triggerBtn.dataset.origLabel || triggerBtn.textContent;
    triggerBtn.dataset.origLabel = originalText;
    triggerBtn.textContent = '✓ Añadido';
    setTimeout(() => {
      triggerBtn.textContent = triggerBtn.dataset.origLabel || originalText;
    }, 1100);
  }

  updateTicketReceipt();
  triggerFloatingCartBump();
}

function getVisibleProductIds() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return MENU_ITEMS.map(m => m.id);
  const visibleCards = Array.from(grid.querySelectorAll('.menu-card')).filter(c => !c.hidden);
  if (visibleCards.length === 0) return MENU_ITEMS.map(m => m.id);
  return visibleCards.map(c => Number(c.dataset.id));
}

// Estado de la ficha de producto abierta
const sheetState = {
  pataton: false,
  removed: []
};

function getSheetProduct() {
  return MENU_ITEMS.find(m => m.id === currentLightboxProductId) || null;
}

function updateSheetPrice() {
  const prod = getSheetProduct();
  if (!prod) return;
  const price = sheetState.pataton && prod.canPataton ? prod.price + 1.0 : prod.price;
  const priceEl = document.getElementById('lightbox-price');
  const addBtn = document.getElementById('lightbox-add');
  if (priceEl) priceEl.textContent = formatPrice(price);
  if (addBtn) {
    const label = `+ Añadir · ${formatPrice(price)}`;
    addBtn.textContent = label;
    addBtn.dataset.origLabel = label;
  }
}

function renderSheetRemoveChips(prod) {
  const group = document.getElementById('sheet-remove');
  const chipsEl = document.getElementById('sheet-remove-chips');
  if (!group || !chipsEl) return;

  const ingredients = getProductIngredients(prod);
  group.hidden = ingredients.length === 0;
  chipsEl.innerHTML = ingredients.map(ing => {
    const isRemoved = sheetState.removed.includes(ing);
    return `<button type="button" class="product-sheet__chip${isRemoved ? ' is-removed' : ''}" data-ingredient="${escapeHtml(ing)}" aria-pressed="${isRemoved}">${isRemoved ? 'Sin ' : ''}${escapeHtml(ing)}</button>`;
  }).join('');

  chipsEl.querySelectorAll('[data-ingredient]').forEach(chip => {
    chip.addEventListener('click', () => {
      const ing = chip.dataset.ingredient;
      if (sheetState.removed.includes(ing)) {
        sheetState.removed = sheetState.removed.filter(r => r !== ing);
      } else {
        sheetState.removed.push(ing);
      }
      renderSheetRemoveChips(prod);
    });
  });
}

function openProductLightbox(id, preset = {}) {
  const modal = document.getElementById('product-lightbox');
  const prod = MENU_ITEMS.find(m => m.id === id);
  if (!modal || !prod) return;

  currentLightboxProductId = prod.id;
  sheetState.pataton = Boolean(preset.pataton && prod.canPataton);
  sheetState.removed = [];

  const imgEl = document.getElementById('lightbox-img');
  const catEl = document.getElementById('lightbox-cat');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const sizeGroup = document.getElementById('sheet-size');
  const sauceGroup = document.getElementById('sheet-sauce');
  const sauceSelect = document.getElementById('sheet-sauce-select');
  const foilInput = document.getElementById('sheet-foil-owner');
  const feedbackEl = document.getElementById('sheet-feedback');

  if (imgEl) {
    imgEl.src = prod.img;
    imgEl.alt = prod.name;
  }
  if (catEl) catEl.textContent = prod.categoryLabel;
  if (titleEl) titleEl.textContent = prod.name;
  if (descEl) descEl.textContent = prod.desc;
  if (feedbackEl) feedbackEl.textContent = '';
  if (foilInput) foilInput.value = '';

  if (sizeGroup) {
    sizeGroup.hidden = !prod.canPataton;
    const normalPriceEl = document.getElementById('sheet-size-normal-price');
    const patatonPriceEl = document.getElementById('sheet-size-pataton-price');
    if (normalPriceEl) normalPriceEl.textContent = formatPrice(prod.price);
    if (patatonPriceEl) patatonPriceEl.textContent = formatPrice(prod.price + 1.0);
    sizeGroup.querySelectorAll('input[name="sheet-size"]').forEach(radio => {
      radio.checked = radio.value === (sheetState.pataton ? 'pataton' : 'normal');
    });
  }

  if (sauceGroup && sauceSelect) {
    const hasChoice = productHasSauceChoice(prod);
    sauceGroup.hidden = !hasChoice;
    if (hasChoice) {
      sauceSelect.innerHTML = `<option value="">Elige una salsa…</option>` +
        SHEET_SAUCES.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
      sauceSelect.value = '';
    }
  }

  renderSheetRemoveChips(prod);
  updateSheetPrice();

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  if (preset.focusSauce && sauceSelect && !sauceGroup.hidden) {
    sauceSelect.focus();
  }
}

function closeProductLightbox() {
  const modal = document.getElementById('product-lightbox');
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = '';
}

function stepProductLightbox(direction) {
  if (currentLightboxProductId === null) return;
  const ids = getVisibleProductIds();
  if (ids.length === 0) return;
  const idx = ids.indexOf(currentLightboxProductId);
  const nextIdx = idx === -1 ? 0 : (idx + direction + ids.length) % ids.length;
  openProductLightbox(ids[nextIdx]);
}

function addSheetProductToCart() {
  const prod = getSheetProduct();
  if (!prod) return;
  const sauceSelect = document.getElementById('sheet-sauce-select');
  const feedbackEl = document.getElementById('sheet-feedback');
  const foilInput = document.getElementById('sheet-foil-owner');
  const addBtn = document.getElementById('lightbox-add');

  const sauce = productHasSauceChoice(prod) && sauceSelect ? sauceSelect.value : '';
  if (productHasSauceChoice(prod) && !sauce) {
    if (feedbackEl) feedbackEl.textContent = 'Elige la salsa antes de añadirla.';
    if (sauceSelect) sauceSelect.focus();
    return;
  }

  addMenuProductToCart(prod.id, sheetState.pataton && prod.canPataton, addBtn, {
    sauce,
    removed: [...sheetState.removed],
    foilOwner: foilInput ? foilInput.value.trim() : ''
  });
  if (feedbackEl) feedbackEl.textContent = '';
  setTimeout(closeProductLightbox, 650);
}

function setupMenuCardActions() {
  const grid = document.getElementById('menu-grid');
  if (grid) {
    grid.querySelectorAll('[data-add-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.addId);
        const makePataton = btn.dataset.pataton === '1';
        const prod = MENU_ITEMS.find(m => m.id === id);
        // Los platos con «Salsa a elegir» abren la ficha para que se elija la salsa
        if (prod && productHasSauceChoice(prod)) {
          openProductLightbox(id, { pataton: makePataton, focusSauce: true });
          return;
        }
        addMenuProductToCart(id, makePataton, btn);
      });
    });

    grid.querySelectorAll('.menu-card__photo-wrap').forEach(photoWrap => {
      const card = photoWrap.closest('.menu-card');
      if (!card) return;
      const id = Number(card.dataset.id);
      photoWrap.setAttribute('role', 'button');
      photoWrap.setAttribute('tabindex', '0');
      photoWrap.setAttribute('aria-label', 'Ver el plato y elegir tamaño, salsa o ingredientes');
      photoWrap.addEventListener('click', () => openProductLightbox(id));
      photoWrap.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProductLightbox(id);
        }
      });
    });
  }

  // También permitir ampliar la foto principal del Hero (Nº 24 Patatón Completo con Todo)
  const heroPhotoWrap = document.querySelector('.photo-card__img-wrap');
  if (heroPhotoWrap) {
    heroPhotoWrap.setAttribute('role', 'button');
    heroPhotoWrap.setAttribute('tabindex', '0');
    heroPhotoWrap.setAttribute('aria-label', 'Ver foto de Nº 24 Patatón Completo con Todo en grande');
    heroPhotoWrap.addEventListener('click', () => openProductLightbox(24));
    heroPhotoWrap.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProductLightbox(24);
      }
    });
  }

  // Eventos del modal Lightbox
  const modal = document.getElementById('product-lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const addBtn = document.getElementById('lightbox-add');
  const sizeGroup = document.getElementById('sheet-size');
  const sauceSelect = document.getElementById('sheet-sauce-select');

  if (closeBtn) closeBtn.addEventListener('click', closeProductLightbox);
  if (modal) {
    modal.querySelectorAll('[data-lightbox-close]').forEach(el => {
      el.addEventListener('click', closeProductLightbox);
    });
  }
  if (prevBtn) prevBtn.addEventListener('click', () => stepProductLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => stepProductLightbox(1));

  if (addBtn) addBtn.addEventListener('click', addSheetProductToCart);
  if (sizeGroup) {
    sizeGroup.querySelectorAll('input[name="sheet-size"]').forEach(radio => {
      radio.addEventListener('change', () => {
        sheetState.pataton = radio.value === 'pataton' && radio.checked;
        updateSheetPrice();
      });
    });
  }
  if (sauceSelect) {
    sauceSelect.addEventListener('change', () => {
      const feedbackEl = document.getElementById('sheet-feedback');
      if (feedbackEl) feedbackEl.textContent = '';
    });
  }

  document.addEventListener('keydown', e => {
    if (!modal || modal.hidden) return;
    // No cambiar de plato con las flechas mientras se escribe o se elige salsa
    const tag = (e.target && e.target.tagName) || '';
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && ['INPUT', 'SELECT', 'TEXTAREA'].includes(tag)) return;
    if (e.key === 'Escape') {
      closeProductLightbox();
    } else if (e.key === 'ArrowLeft') {
      stepProductLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      stepProductLightbox(1);
    }
  });
}

function triggerFloatingCartBump() {
  ['floating-cart-btn', 'tabbar-ticket'].forEach(elId => {
    const el = document.getElementById(elId);
    if (!el) return;
    el.classList.remove('is-bumping');
    void el.offsetWidth; // Reflow para reiniciar animación
    el.classList.add('is-bumping');
    setTimeout(() => {
      el.classList.remove('is-bumping');
    }, 550);
  });
}

/* ==========================================================================
   «LO DE SIEMPRE»: ÚLTIMO PEDIDO GUARDADO EN ESTE MÓVIL
   ========================================================================== */
function saveLastOrder() {
  try {
    localStorage.setItem(STORAGE_KEY_LAST_ORDER, JSON.stringify({
      savedAt: new Date().toISOString(),
      items: orderCart
    }));
  } catch (err) {
    // Continuar sin fallo si localStorage no está disponible
  }
  renderRepeatOrder();
}

function loadLastOrderItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LAST_ORDER);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return sanitizeCartItems(parsed && parsed.items);
  } catch (err) {
    return [];
  }
}

function renderRepeatOrder() {
  const box = document.getElementById('repeat-order');
  const summaryEl = document.getElementById('repeat-order-summary');
  if (!box || !summaryEl) return;
  const items = loadLastOrderItems();
  if (items.length === 0) {
    box.hidden = true;
    return;
  }
  const total = items.reduce((acc, item) => acc + item.price, 0);
  const firstNames = items.slice(0, 2).map(i => i.title.replace(/^Nº \d+\.\s*/, '')).join(' + ');
  const more = items.length > 2 ? ` y ${items.length - 2} más` : '';
  summaryEl.textContent = `${firstNames}${more} · ${formatPrice(total)}`;
  box.hidden = false;
}

function setupRepeatOrder() {
  const btn = document.getElementById('btn-repeat-order');
  if (btn) {
    btn.addEventListener('click', () => {
      const items = loadLastOrderItems();
      if (items.length === 0) return;
      orderCart.push(...items);
      updateTicketReceipt();
      triggerFloatingCartBump();
      scrollToTicketWithFlash();
    });
  }
  renderRepeatOrder();
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

  const buildMenuExampleItem = (id, foilOwner, asPataton = false) => {
    const found = MENU_ITEMS.find(m => m.id === id);
    if (!found) return null;
    const isPatatonUpgrade = asPataton && found.canPataton;
    return {
      title: isPatatonUpgrade ? `${found.name} (en PATATÓN +1€)` : found.name,
      details: found.desc || '',
      price: isPatatonUpgrade ? found.price + 1.00 : found.price,
      foilOwner
    };
  };

  const parejaRecipe = [
    { id: 4, foilOwner: 'Persona 1', asPataton: false },
    { id: 17, foilOwner: 'Persona 2', asPataton: false },
    { id: 33, foilOwner: 'Persona 1', asPataton: false },
    { id: 34, foilOwner: 'Persona 2', asPataton: false }
  ];

  const amigosRecipe = [
    { id: 4, foilOwner: 'Carlos', asPataton: false },
    { id: 14, foilOwner: 'Isa', asPataton: false },
    { id: 17, foilOwner: 'Javi', asPataton: true },
    { id: 6, foilOwner: 'Marta', asPataton: false }
  ];

  const comboParejaBtn = document.getElementById('btn-combo-pareja');
  if (comboParejaBtn) {
    const parejaItems = parejaRecipe.map(r => buildMenuExampleItem(r.id, r.foilOwner, r.asPataton)).filter(Boolean);
    const parejaTotal = parejaItems.reduce((sum, item) => sum + item.price, 0);
    comboParejaBtn.textContent = `+ Ejemplo Pareja (${formatPrice(parejaTotal)})`;

    comboParejaBtn.addEventListener('click', () => {
      const itemsToAdd = parejaRecipe.map(r => buildMenuExampleItem(r.id, r.foilOwner, r.asPataton)).filter(Boolean);
      orderCart.push(...itemsToAdd);
      bizumPeopleCount = 2;
      updateTicketReceipt();
      triggerFloatingCartBump();
      scrollToTicketWithFlash();
    });
  }

  const comboAmigosBtn = document.getElementById('btn-combo-amigos');
  if (comboAmigosBtn) {
    const amigosItems = amigosRecipe.map(r => buildMenuExampleItem(r.id, r.foilOwner, r.asPataton)).filter(Boolean);
    const amigosTotal = amigosItems.reduce((sum, item) => sum + item.price, 0);
    comboAmigosBtn.textContent = `+ Ejemplo 4 Amigos (${formatPrice(amigosTotal)})`;

    comboAmigosBtn.addEventListener('click', () => {
      const itemsToAdd = amigosRecipe.map(r => buildMenuExampleItem(r.id, r.foilOwner, r.asPataton)).filter(Boolean);
      orderCart.push(...itemsToAdd);
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

  // <!-- CONFIRMAR CON ISA Y CRISTINA: los recargos de Gambas +0,20 € y Kebab +0,25 € -->
  const extraFees = builderState.specials.reduce((sum, spId) => {
    const sp = BUILDER_SPECIALS.find(s => s.id === spId);
    return sum + (sp ? sp.extra : 0);
  }, 0);

  let tariffName = '';
  let basePrice = 7.00;

  if (isPataton) {
    // <!-- CONFIRMAR CON ISA Y CRISTINA: la regla de calculateCustomPotatoPricing() que marca "Completa con Todo" a partir de 12 ingredientes + 1 especial -->
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
    // <!-- CONFIRMAR CON ISA Y CRISTINA: la regla de calculateCustomPotatoPricing() que marca "Completa con Todo" a partir de 12 ingredientes + 1 especial -->
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
  const btnTicketCustomPriceEl = document.getElementById('btn-ticket-custom-price');
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
  if (btnTicketCustomPriceEl) {
    btnTicketCustomPriceEl.textContent = formatPrice(customCalc.totalPrice);
  }

  const allChosenToppings = [...builderState.toppings, ...builderState.specials];
  detailsEl.innerHTML = `
    <div style="margin-top: 0.35rem;"><strong>Salsas/Cond.:</strong> ${builderState.sauces.length ? escapeHtml(builderState.sauces.join(', ')) : 'Ninguna'}</div>
    <div style="margin-top: 0.25rem;"><strong>Ingredientes (${allChosenToppings.length}):</strong> ${allChosenToppings.length ? escapeHtml(allChosenToppings.join(', ')) : 'Solo base'}</div>
  `;

  saveCartToStorage();

  cartCountEl.textContent = String(orderCart.length);

  const grandTotal = orderCart.reduce((acc, item) => acc + item.price, 0);

  if (orderCart.length === 0) {
    cartListEl.innerHTML = `<li style="color: var(--ink-muted); font-size: 0.76rem; padding: 0.35rem 0;">Tu carro está vacío (0,00 €). Pulsa <strong>«+ Añadir al Ticket»</strong> en cualquier plato de la carta o el botón amarillo de arriba para meter tu patata al gusto.</li>`;
  } else {
    cartListEl.innerHTML = orderCart.map((item, idx) => `
      <li class="ticket-cart-item">
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.4rem;">
            <strong>1x ${escapeHtml(item.title)}</strong>
            <div class="ticket-cart-item__right">
              <span>${formatPrice(item.price)}</span>
              <button type="button" class="ticket-cart-remove" data-remove-idx="${idx}" title="Quitar plato">[x]</button>
            </div>
          </div>
          ${item.details ? `<div class="ticket-cart-item__sub">${escapeHtml(item.details)}</div>` : ''}
          <div class="ticket-foil-tag-row">
            <span class="ticket-foil-tag-label">ROTULAR ALBAL:</span>
            <input
              type="text"
              class="ticket-foil-tag-input"
              data-foil-idx="${idx}"
              value="${escapeHtml(item.foilOwner || '')}"
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
          saveCartToStorage();
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

  // Barra inferior (móvil)
  const tabbarTicket = document.getElementById('tabbar-ticket');
  const tabbarCount = document.getElementById('tabbar-ticket-count');
  const tabbarTotal = document.getElementById('tabbar-ticket-total');
  if (tabbarCount) tabbarCount.textContent = String(orderCart.length);
  if (tabbarTotal) tabbarTotal.textContent = orderCart.length ? formatPrice(grandTotal) : 'Ticket';
  if (tabbarTicket) tabbarTicket.classList.toggle('has-items', orderCart.length > 0);
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
          <span>Albal «${escapeHtml(name)}»:</span>
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
    `Hora solicitada: ${ovenSlot}`,
    '-----------------------------------'
  ];

  orderCart.forEach((item, i) => {
    const ownerTag = item.foilOwner && item.foilOwner.trim()
      ? ` [ROTULAR EN ALBAL: "${item.foilOwner.trim().toUpperCase()}"]`
      : '';
    lines.push(`${i + 1}. ${item.title}${ownerTag} — ${formatPrice(item.price)}`);
    if (item.details) lines.push(`   (${item.details})`);
  });

  const totalText = document.getElementById('ticket-price')?.textContent || '0,00 €';
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
  const addCustomFromTicketBtn = document.getElementById('btn-add-custom-from-ticket');
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
  const tabbarTicketBtn = document.getElementById('tabbar-ticket');
  if (tabbarTicketBtn) {
    tabbarTicketBtn.addEventListener('click', scrollToTicketWithFlash);
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

  const handleAddConfiguredPotato = () => {
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
      feedback.textContent = '✓ Patata al gusto añadida a tu carro.';
      setTimeout(() => { feedback.textContent = ''; }, 3000);
    }
  };

  if (addCustomBtn) {
    addCustomBtn.addEventListener('click', handleAddConfiguredPotato);
  }
  if (addCustomFromTicketBtn) {
    addCustomFromTicketBtn.addEventListener('click', handleAddConfiguredPotato);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      orderCart.length = 0;
      updateTicketReceipt();
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      if (orderCart.length === 0) {
        if (feedback) {
          feedback.textContent = 'Añade al menos un plato a tu ticket';
        }
        return;
      }
      const lines = buildOrderSummaryLines();
      saveLastOrder();
      const url = `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      if (orderCart.length === 0) {
        if (feedback) {
          feedback.textContent = 'Añade al menos un plato a tu ticket';
        }
        return;
      }
      const lines = buildOrderSummaryLines();
      saveLastOrder();
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

  // El albal se abre cuando la página ha cargado de verdad (fuentes y portada),
  // visible al menos FOIL_MIN_MS y nunca más de FOIL_MAX_MS desde que se abrió la web.
  const FOIL_MIN_MS = 1000;
  const FOIL_MAX_MS = 3000;
  const openWhenReady = () => {
    const wait = Math.max(0, FOIL_MIN_MS - performance.now());
    setTimeout(openFoil, wait);
  };

  const pageLoaded = document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(resolve => window.addEventListener('load', resolve, { once: true }));
  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();

  curtain.addEventListener('click', openFoil);
  Promise.all([pageLoaded, fontsReady]).then(openWhenReady, openWhenReady);
  setTimeout(openFoil, Math.max(0, FOIL_MAX_MS - performance.now()));
}

document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  setupFoilEntrance();
  updateLiveOvenStatus();
  renderMenu();
  setupMenuCardActions();
  setupMenuFilters();
  renderBuilderControls();
  updateTicketReceipt();
  setupTicketActions();
  setupRepeatOrder();
});
