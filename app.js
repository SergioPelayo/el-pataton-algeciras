/* ==========================================================================
   EL PATATÓN ALGECIRAS — INTERACTIVIDAD DE CARTA Y COMANDA AL GUSTO
   ========================================================================== */

const MENU_ITEMS = [
  {
    id: 'PAT-01',
    category: 'especiales',
    featured: true,
    badge: 'LA REINA DE LA CASA',
    name: 'El Patatón (Completa con Todo)',
    price: '11,50 €',
    desc: 'Para los que no quieren dejarse nada fuera. Patata gigante asada al horno con mantequilla, queso fundido, jamón, lomo, bacon, carne kebab, atún, maíz, aceitunas, zanahoria y salsa a elegir.',
    tags: ['+1 KG Aprox', 'Ideal Compartir', 'Con Todo']
  },
  {
    id: 'PAT-02',
    category: 'especiales',
    featured: true,
    badge: 'TOP VENTAS',
    name: 'Patata al Roquefort',
    price: '10,50 €',
    desc: 'Cremosa salsa roquefort fundida con el calor de la patata, jamón en tacos, lomo adobado, bacon crujiente, maíz dulce, aceitunas, pollo relleno y queso.',
    tags: ['Salsa Roquefort', 'Pollo Relleno', 'Lomo y Bacon']
  },
  {
    id: 'PAT-03',
    category: 'especiales',
    featured: true,
    badge: 'MUY PEDIDA',
    name: 'Patata Kebab',
    price: '11,00 €',
    desc: 'Lo mejor de dos mundos: base de patata gigante al horno rellena de carne de kebab especiada, queso fundido, cebolla crujiente, maíz, lechuga, tomate natural y salsa a elegir.',
    tags: ['Carne Kebab', 'Cebolla Crujiente', 'Salsa Blanca']
  },
  {
    id: 'PAT-04',
    category: 'clasicas',
    featured: false,
    name: 'Patata a la Mantequilla',
    price: '10,00 €',
    desc: 'La tradicional que nunca falla. Mantequilla fundida al corte, jamón york, lomo, bacon, aceitunas, maíz, zanahoria y abundante queso.',
    tags: ['Clásica', 'Mantequilla', 'Jamón y Lomo']
  },
  {
    id: 'PAT-05',
    category: 'clasicas',
    featured: false,
    name: 'Patata Completa Tradicional',
    price: '10,00 €',
    desc: 'Salsa a elegir, jamón en tacos, atún, palitos de cangrejo, zanahoria rallada, aceitunas, maíz dulce y queso rallado.',
    tags: ['Atún y Cangrejo', 'Fresca y Cremosa']
  },
  {
    id: 'PAT-06',
    category: 'clasicas',
    featured: false,
    name: 'Patata al Alioli',
    price: '10,50 €',
    desc: 'Con auténtica salsa alioli, jamón, atún, lomo, zanahoria, maíz, aceitunas y queso fundido.',
    tags: ['Amantes del Ajo', 'Lomo y Atún']
  },
  {
    id: 'PAT-07',
    category: 'especiales',
    featured: false,
    name: 'Patata Brava (Picante)',
    price: '10,50 €',
    desc: 'Con ese toque cañero de salsa de tomate picante, jamón, atún, lomo, zanahoria, maíz, aceitunas y queso.',
    tags: ['Toque Picante', 'Salsa Brava']
  },
  {
    id: 'PAT-08',
    category: 'especiales',
    featured: false,
    name: 'Patata Ibérica / Gaucha',
    price: '10,50 €',
    desc: 'Cargada de sabor con selección de embutidos y carnes, queso fundido, toque de salsa especial y guarnición clásica de la casa.',
    tags: ['Sabor Intenso', 'Carnes']
  },
  {
    id: 'PAT-09',
    category: 'clasicas',
    featured: false,
    name: 'Patata Tropical / Africana',
    price: '10,50 €',
    desc: 'El contraste dulce y salado perfecto con salsa rosa o mayonesa, maíz, piña/guarnición fresca, jamón, pollo y queso.',
    tags: ['Contraste Suave', 'Salsa Rosa']
  },
  {
    id: 'PAT-10',
    category: 'clasicas',
    featured: false,
    name: 'Patata Sola Asada al Horno',
    price: '3,50 €',
    desc: 'Para disfrutar de la pureza del horno: patata gigante abierta en su papel albal con aceite de oliva, ajo, perejil o pimienta y sal gorda.',
    tags: ['Sencilla', '100% Horno']
  },
  {
    id: 'BOC-01',
    category: 'bocatas',
    featured: false,
    badge: 'OTRO CLÁSICO',
    name: 'Kebab de Pollo Completo',
    price: '6,50 €',
    desc: 'Jugosa carne de kebab de pollo asada, verdura fresca, queso y nuestras salsas especiales. También disponible en formato bocadillo grande.',
    tags: ['Kebab Pollo', 'Bien Cargado']
  },
  {
    id: 'BOC-02',
    category: 'bocatas',
    featured: false,
    name: 'Perrito Caliente Especial',
    price: '3,50 €',
    desc: 'El complemento obligatorio de cualquier pedido en El Patatón: pan tierno, salchicha, lluvia de patatas paja crujientes, cebolla, queso y salsas (Simple por 3,00 €).',
    tags: ['Con Patatas Paja', 'Por solo 3,50 €']
  }
];

/* Datos para el simulador "Haz tu Patata al Gusto" */
const BUILDER_BASES = [
  { id: 'base-gusto', name: 'Patata al Gusto (Estándar)', basePrice: 10.0, weight: 650 },
  { id: 'base-pataton', name: 'Formato Patatón Extra Grande', basePrice: 11.0, weight: 780 }
];

const BUILDER_SAUCES = [
  'Mantequilla al corte',
  'Salsa Alioli',
  'Salsa Roquefort',
  'Salsa Kebab Blanca',
  'Salsa Brava Picante',
  'Mayonesa',
  'Salsa Rosa',
  'Aceite, Ajo y Perejil'
];

const BUILDER_TOPPINGS = [
  { id: 'jamon', name: 'Jamón en tacos', extra: 0, weight: 45 },
  { id: 'queso', name: 'Queso fundido', extra: 0, weight: 50 },
  { id: 'bacon', name: 'Bacon crujiente', extra: 0, weight: 40 },
  { id: 'lomo', name: 'Lomo adobado', extra: 0, weight: 50 },
  { id: 'kebab', name: 'Carne de Kebab', extra: 0.5, weight: 65 },
  { id: 'pollo', name: 'Pollo relleno', extra: 0, weight: 50 },
  { id: 'atun', name: 'Atún', extra: 0, weight: 45 },
  { id: 'maiz', name: 'Maíz dulce', extra: 0, weight: 30 },
  { id: 'aceitunas', name: 'Aceitunas', extra: 0, weight: 30 },
  { id: 'cebolla', name: 'Cebolla crujiente', extra: 0, weight: 25 },
  { id: 'zanahoria', name: 'Zanahoria', extra: 0, weight: 25 },
  { id: 'cangrejo', name: 'Palitos de cangrejo', extra: 0, weight: 35 },
  { id: 'huevo', name: 'Huevo cocido', extra: 0.5, weight: 50 },
  { id: 'gambas', name: 'Gambas', extra: 0.5, weight: 45 }
];

// Estado actual del simulador
const builderState = {
  baseId: 'base-gusto',
  sauces: ['Mantequilla al corte', 'Salsa Alioli'],
  toppings: ['jamon', 'queso', 'bacon', 'lomo', 'maiz']
};

/* ==========================================================================
   1. ESTADO EN VIVO DEL HORNO DE AV. VENECIA (SIN EMOJIS)
   ========================================================================== */
function updateLiveOvenStatus() {
  const dot = document.getElementById('live-status-dot');
  const text = document.getElementById('live-status-text');
  if (!dot || !text) return;

  const now = new Date();
  const day = now.getDay(); // 0 Dom, 1 Lun, 2 Mar, 3 Mié, 4 Jue, 5 Vie, 6 Sáb
  const hour = now.getHours();
  const mins = now.getMinutes();
  const timeFloat = hour + mins / 60;

  const isOpenDay = day === 0 || day >= 3; // Miércoles (3) a Domingo (0)
  const isOpenHour = timeFloat >= 20 && timeFloat <= 23.99;

  if (isOpenDay && isOpenHour) {
    dot.classList.add('is-open');
    text.textContent = 'ABIERTO AHORA EN AV. VENECIA · PEDIDOS HASTA LAS 00:00';
  } else if (!isOpenDay) {
    dot.classList.remove('is-open');
    text.textContent = 'HORNO EN DESCANSO (LUN-MAR) · VOLVEMOS EL MIÉRCOLES A LAS 20:00';
  } else if (timeFloat < 20) {
    dot.classList.remove('is-open');
    text.textContent = 'PREPARANDO HORNOS HOY · ABRIMOS A LAS 20:00 EN AV. VENECIA';
  } else {
    dot.classList.remove('is-open');
    text.textContent = 'HORARIO DE MIÉRCOLES A DOMINGO DE 20:00 A 00:00 · AV. VENECIA, 1';
  }
}

/* ==========================================================================
   2. RENDERIZADO Y FILTRADO DE LA CARTA
   ========================================================================== */
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === filter);

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card ${item.featured ? 'menu-card--featured' : ''}">
      ${item.badge ? `<span class="menu-card__badge">${item.badge}</span>` : ''}
      <div>
        <div class="menu-card__top">
          <div>
            <span class="menu-card__code">REF // ${item.id}</span>
            <h3 class="menu-card__title">${item.name}</h3>
          </div>
          <span class="menu-card__price">${item.price}</span>
        </div>
        <p class="menu-card__desc">${item.desc}</p>
      </div>
      <div class="menu-card__tags">
        ${item.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function setupMenuFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderMenu(btn.dataset.filter);
    });
  });
}

/* ==========================================================================
   3. SIMULADOR INTERACTIVO "HAZ TU PATATA AL GUSTO"
   ========================================================================== */
function renderBuilderControls() {
  const baseContainer = document.getElementById('base-chips');
  const sauceContainer = document.getElementById('sauce-chips');
  const toppingContainer = document.getElementById('topping-chips');

  if (!baseContainer || !sauceContainer || !toppingContainer) return;

  // Bases
  baseContainer.innerHTML = BUILDER_BASES.map(b => {
    const selected = builderState.baseId === b.id;
    return `
      <button type="button" class="ing-chip ${selected ? 'is-selected' : ''}" data-base="${b.id}">
        <span>${b.name}</span>
        <span class="ing-chip__extra">${b.basePrice.toFixed(2).replace('.', ',')} €</span>
      </button>
    `;
  }).join('');

  // Salsas
  sauceContainer.innerHTML = BUILDER_SAUCES.map(sauce => {
    const selected = builderState.sauces.includes(sauce);
    return `
      <button type="button" class="ing-chip ${selected ? 'is-selected' : ''}" data-sauce="${sauce}">
        <span>${sauce}</span>
      </button>
    `;
  }).join('');

  // Rellenos
  toppingContainer.innerHTML = BUILDER_TOPPINGS.map(top => {
    const selected = builderState.toppings.includes(top.id);
    const extraLabel = top.extra > 0 ? `<span class="ing-chip__extra">+${top.extra.toFixed(2).replace('.', ',')} €</span>` : '';
    return `
      <button type="button" class="ing-chip ${selected ? 'is-selected' : ''}" data-topping="${top.id}">
        <span>${top.name}</span>
        ${extraLabel}
      </button>
    `;
  }).join('');

  // Listeners
  baseContainer.querySelectorAll('[data-base]').forEach(btn => {
    btn.addEventListener('click', () => {
      builderState.baseId = btn.dataset.base;
      renderBuilderControls();
      updateTicketReceipt();
    });
  });

  sauceContainer.querySelectorAll('[data-sauce]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.sauce;
      if (builderState.sauces.includes(s)) {
        if (builderState.sauces.length > 1) {
          builderState.sauces = builderState.sauces.filter(item => item !== s);
        }
      } else {
        if (builderState.sauces.length >= 2) {
          builderState.sauces.shift();
        }
        builderState.sauces.push(s);
      }
      renderBuilderControls();
      updateTicketReceipt();
    });
  });

  toppingContainer.querySelectorAll('[data-topping]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.topping;
      if (builderState.toppings.includes(id)) {
        builderState.toppings = builderState.toppings.filter(item => item !== id);
      } else {
        builderState.toppings.push(id);
      }
      renderBuilderControls();
      updateTicketReceipt();
    });
  });
}

function updateTicketReceipt() {
  const baseObj = BUILDER_BASES.find(b => b.id === builderState.baseId) || BUILDER_BASES[0];
  const baseNameEl = document.getElementById('ticket-base-name');
  const saucesListEl = document.getElementById('ticket-sauces-list');
  const toppingsListEl = document.getElementById('ticket-toppings-list');
  const weightEl = document.getElementById('ticket-weight');
  const priceEl = document.getElementById('ticket-price');

  if (!baseNameEl) return;

  baseNameEl.textContent = baseObj.name;

  saucesListEl.innerHTML = builderState.sauces.map(s => `
    <li><span>— ${s}</span><span>INCL.</span></li>
  `).join('');

  const selectedToppings = BUILDER_TOPPINGS.filter(t => builderState.toppings.includes(t.id));

  if (selectedToppings.length === 0) {
    toppingsListEl.innerHTML = `<li><span>(Sin rellenos adicionales)</span><span>—</span></li>`;
  } else {
    toppingsListEl.innerHTML = selectedToppings.map(t => `
      <li>
        <span>— ${t.name}</span>
        <span>${t.extra > 0 ? '+' + t.extra.toFixed(2).replace('.', ',') + ' €' : 'INCL.'}</span>
      </li>
    `).join('');
  }

  // Cálculo de peso y precio orientativo
  const totalWeight = baseObj.weight + selectedToppings.reduce((acc, t) => acc + t.weight, 0);
  const extrasCost = selectedToppings.reduce((acc, t) => acc + t.extra, 0);
  const extraCountFee = Math.max(0, selectedToppings.length - 6) * 0.25;
  const totalPrice = baseObj.basePrice + extrasCost + extraCountFee;

  weightEl.textContent = totalWeight >= 1000
    ? `~${(totalWeight / 1000).toFixed(2).replace('.', ',')} kg`
    : `~${totalWeight} g`;

  priceEl.textContent = `${totalPrice.toFixed(2).replace('.', ',')} €`;
}

function setupCopyTicket() {
  const copyBtn = document.getElementById('btn-copy-ticket');
  const feedback = document.getElementById('copy-feedback');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const baseObj = BUILDER_BASES.find(b => b.id === builderState.baseId) || BUILDER_BASES[0];
    const selectedToppings = BUILDER_TOPPINGS
      .filter(t => builderState.toppings.includes(t.id))
      .map(t => t.name);

    const summary = [
      'COMANDA — EL PATATÓN ALGECIRAS (956 65 81 22)',
      `- Base: ${baseObj.name}`,
      `- Salsas: ${builderState.sauces.join(', ')}`,
      `- Ingredientes: ${selectedToppings.length ? selectedToppings.join(', ') : 'Solo base y salsa'}`,
      `- Precio aprox.: ${document.getElementById('ticket-price')?.textContent || '10,50 €'}`
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      feedback.textContent = 'Comanda copiada al portapapeles.';
      setTimeout(() => {
        feedback.textContent = '';
      }, 4000);
    } catch {
      feedback.textContent = 'Comanda lista en pantalla para llamar al 956 65 81 22.';
    }
  });
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
  renderMenu('all');
  setupMenuFilters();
  renderBuilderControls();
  updateTicketReceipt();
  setupCopyTicket();
});

