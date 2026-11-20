/**
 * MON CARNET VIDANGE & ENTRETIEN AUTO
 * Application Mobile Complète & Autonome
 */

// ==========================================================================
// 1. CONFIGURATION DES COMPOSANTS & PIÈCES D'USURE
// ==========================================================================
const STANDARD_PARTS = {
  courroie_distribution: {
    key: 'courroie_distribution',
    name: 'Kit Courroie de Distribution + Pompe à eau',
    shortName: 'Courroie Distribution',
    category: 'moteur',
    icon: '⚙️',
    defaultIntervalKm: 100000,
    defaultIntervalMonths: 60
  },
  courroie_accessoires: {
    key: 'courroie_accessoires',
    name: "Courroie d'Accessoires (Alternateur/Clim)",
    shortName: 'Courroie Accessoires',
    category: 'moteur',
    icon: '⛓️',
    defaultIntervalKm: 60000,
    defaultIntervalMonths: 48
  },
  plaquettes_avant: {
    key: 'plaquettes_avant',
    name: 'Plaquettes de Freins Avant',
    shortName: 'Plaquettes AV',
    category: 'freins',
    icon: '🛑',
    defaultIntervalKm: 35000,
    defaultIntervalMonths: 36
  },
  plaquettes_arriere: {
    key: 'plaquettes_arriere',
    name: 'Plaquettes de Freins Arrière',
    shortName: 'Plaquettes AR',
    category: 'freins',
    icon: '🛑',
    defaultIntervalKm: 45000,
    defaultIntervalMonths: 48
  },
  disques_avant: {
    key: 'disques_avant',
    name: 'Disques de Freins Avant',
    shortName: 'Disques AV',
    category: 'freins',
    icon: '🔘',
    defaultIntervalKm: 70000,
    defaultIntervalMonths: 60
  },
  disques_arriere: {
    key: 'disques_arriere',
    name: 'Disques de Freins Arrière',
    shortName: 'Disques AR',
    category: 'freins',
    icon: '🔘',
    defaultIntervalKm: 80000,
    defaultIntervalMonths: 72
  },
  kit_embrayage: {
    key: 'kit_embrayage',
    name: "Kit d'Embrayage (+ Butée)",
    shortName: 'Embrayage',
    category: 'transmission',
    icon: '🚗',
    defaultIntervalKm: 150000,
    defaultIntervalMonths: 96
  },
  amortisseurs_avant: {
    key: 'amortisseurs_avant',
    name: 'Amortisseurs Avant',
    shortName: 'Amortisseurs AV',
    category: 'suspension',
    icon: '🚙',
    defaultIntervalKm: 80000,
    defaultIntervalMonths: 60
  },
  amortisseurs_arriere: {
    key: 'amortisseurs_arriere',
    name: 'Amortisseurs Arrière',
    shortName: 'Amortisseurs AR',
    category: 'suspension',
    icon: '🚙',
    defaultIntervalKm: 80000,
    defaultIntervalMonths: 60
  },
  pneus_avant: {
    key: 'pneus_avant',
    name: 'Pneus Train Avant',
    shortName: 'Pneus AV',
    category: 'pneus',
    icon: '🛞',
    defaultIntervalKm: 40000,
    defaultIntervalMonths: 48
  },
  pneus_arriere: {
    key: 'pneus_arriere',
    name: 'Pneus Train Arrière',
    shortName: 'Pneus AR',
    category: 'pneus',
    icon: '🛞',
    defaultIntervalKm: 50000,
    defaultIntervalMonths: 60
  },
  batterie: {
    key: 'batterie',
    name: 'Batterie 12V',
    shortName: 'Batterie',
    category: 'electrique',
    icon: '🔋',
    defaultIntervalKm: 60000,
    defaultIntervalMonths: 48
  },
  liquide_frein: {
    key: 'liquide_frein',
    name: 'Liquide de Frein (Purge DOT4)',
    shortName: 'Liquide Frein',
    category: 'freins',
    icon: '🧪',
    defaultIntervalKm: 40000,
    defaultIntervalMonths: 24
  },
  bougies: {
    key: 'bougies',
    name: "Bougies d'allumage / Préchauffage",
    shortName: 'Bougies',
    category: 'moteur',
    icon: '⚡',
    defaultIntervalKm: 60000,
    defaultIntervalMonths: 48
  }
};

const VIDANGE_ITEMS_DEF = [
  { id: 'huile', label: 'Huile Moteur', default: true },
  { id: 'filtre_huile', label: 'Filtre à Huile', default: true },
  { id: 'filtre_air', label: 'Filtre à Air', default: false },
  { id: 'filtre_habitacle', label: "Filtre d'Habitacle (Pollen)", default: false },
  { id: 'filtre_carburant', label: 'Filtre à Carburant (Gazole/Essence)', default: false },
  { id: 'joint_bouchon', label: 'Joint de bouchon de carter', default: true },
  { id: 'lave_glace', label: 'Mise à niveau Lave-Glace', default: true },
  { id: 'reset_temoin', label: 'Remise à zéro indicateur vidange', default: true }
];

// ==========================================================================
// 2. DONNÉES PAR DÉFAUT & ÉTAT DE L'APPLICATION
// ==========================================================================
const STORAGE_KEY = 'carnet_vidange_auto_data_v1';

const DEFAULT_DATA = {
  activeVehicleId: 'veh_default',
  currency: 'MAD', // MAD, EUR, DZD, etc.
  vehicles: [
    {
      id: 'veh_default',
      name: 'Mon Véhicule',
      brand: 'Renault',
      model: 'Clio 4',
      year: 2018,
      plate: '12345-B-6',
      currentKm: 124500,
      fuel: 'diesel',
      motorisation: '1.5 dCi 90ch',
      vidangeInterval: 10000,
      vidangeTimeIntervalMonths: 12,
      createdAt: new Date().toISOString()
    }
  ],
  vidanges: [
    {
      id: 'vid_1',
      vehicleId: 'veh_default',
      date: '2026-08-15',
      mileage: 120000,
      nextMileage: 130000,
      nextDate: '2027-08-15',
      oilGrade: '5W30',
      oilBrand: 'Total Quartz Ineo ECS',
      oilQuantity: '4.5L',
      items: ['huile', 'filtre_huile', 'filtre_air', 'joint_bouchon', 'reset_temoin'],
      cost: 550,
      garage: 'Garage Rapide',
      notes: 'Huile 5W30 spéciale FAP, vidange propre.'
    }
  ],
  maintenanceRecords: [
    {
      id: 'maint_1',
      vehicleId: 'veh_default',
      partKey: 'plaquettes_avant',
      date: '2026-04-10',
      mileage: 115000,
      nextMileage: 150000,
      brand: 'Brembo',
      cost: 450,
      garage: 'Centre Auto',
      notes: 'Plaquettes avant neuves.'
    },
    {
      id: 'maint_2',
      vehicleId: 'veh_default',
      partKey: 'courroie_distribution',
      date: '2025-02-20',
      mileage: 95000,
      nextMileage: 195000,
      brand: 'Gates Kit PowerGrip',
      cost: 2200,
      garage: 'Mécano Spécialiste',
      notes: 'Kit complet avec pompe à eau et liquide de refroidissement neuf.'
    }
  ]
};

let appState = { ...DEFAULT_DATA };
let deferredPrompt = null; // Pour PWA installation

// ==========================================================================
// 3. PERSISTANCE & CHARGEMENT
// ==========================================================================
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = { ...DEFAULT_DATA, ...parsed };
      if (!Array.isArray(appState.vehicles)) {
        appState.vehicles = [];
      }
    } else {
      appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
      saveState();
    }
  } catch (e) {
    console.error('Erreur chargement localStorage', e);
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    syncToCloud();
  } catch (e) {
    console.error('Erreur sauvegarde localStorage', e);
  }
}

function getActiveVehicle() {
  if (!appState.vehicles || appState.vehicles.length === 0) return null;
  let car = appState.vehicles.find(v => v.id === appState.activeVehicleId);
  if (!car) {
    car = appState.vehicles[0];
    appState.activeVehicleId = car.id;
  }
  return car;
}

// ==========================================================================
// 4. NAVIGATION & GESTION DES VUES
// ==========================================================================
function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab-item[data-target]');
  navTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = tab.getAttribute('data-target');
      if (targetView) {
        switchView(targetView);
      }
    });
  });
}

function switchView(viewName) {
  if (!viewName) return;

  // Update nav buttons
  document.querySelectorAll('.nav-tab-item').forEach(tab => {
    if (tab.getAttribute('data-target') === viewName) {
      tab.classList.add('active');
    } else if (tab.hasAttribute('data-target')) {
      tab.classList.remove('active');
    }
  });

  // Update views
  document.querySelectorAll('.view-section').forEach(view => {
    if (view.id === `view-${viewName}`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  // Scroll smoothly to top of view
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-render relevant view
  if (viewName === 'dashboard') renderDashboard();
  if (viewName === 'parts') renderPartsView();
  if (viewName === 'history') renderHistoryView();
  if (viewName === 'vehicles') renderVehiclesView();
}

// ==========================================================================
// 5. RENDU DU TABLEAU DE BORD (DASHBOARD)
// ==========================================================================
function renderDashboard() {
  const car = getActiveVehicle();
  if (!car) {
    const carLabel = document.getElementById('header-car-label');
    if (carLabel) carLabel.textContent = 'Aucun véhicule';
    const carTitleEl = document.getElementById('dash-car-name');
    const carPlateEl = document.getElementById('dash-car-plate');
    const carKmValEl = document.getElementById('dash-odometer-val');
    if (carTitleEl) carTitleEl.textContent = 'Aucun véhicule';
    if (carPlateEl) carPlateEl.textContent = '---';
    if (carKmValEl) carKmValEl.textContent = '0';

    const cardContainer = document.getElementById('dash-vidange-status-card');
    if (cardContainer) {
      cardContainer.className = 'vidange-status-card';
      cardContainer.innerHTML = `
        <div class="empty-state" style="padding: 24px 16px;">
          <span class="empty-state-icon">🚗</span>
          <div class="empty-state-title">Aucun véhicule dans votre garage</div>
          <div class="empty-state-desc">Ajoutez votre voiture pour commencer le suivi des vidanges, filtres et pièces d'usure.</div>
          <button class="btn btn-primary" onclick="openCarModal()" style="margin-top: 10px;">
            <span>+ Ajouter un véhicule</span>
          </button>
        </div>
      `;
    }
    const urgentParts = document.getElementById('dash-urgent-parts-list');
    if (urgentParts) urgentParts.innerHTML = '';
    return;
  }

  // Header car switcher button text
  const carLabel = document.getElementById('header-car-label');
  if (carLabel) carLabel.textContent = `${car.brand} ${car.model}`;

  // Car Hero Card info
  const carTitleEl = document.getElementById('dash-car-name');
  const carPlateEl = document.getElementById('dash-car-plate');
  const carKmValEl = document.getElementById('dash-odometer-val');
  
  if (carTitleEl) carTitleEl.textContent = `${car.brand} ${car.model} (${car.year})`;
  if (carPlateEl) carPlateEl.textContent = car.plate ? car.plate : 'NON IMMATRICULÉ';
  if (carKmValEl) carKmValEl.textContent = formatNumber(car.currentKm);

  // Vidange Status calculation
  const carVidanges = appState.vidanges
    .filter(v => v.vehicleId === car.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const lastVidange = carVidanges[0];
  const cardContainer = document.getElementById('dash-vidange-status-card');

  if (!lastVidange) {
    // Aucune vidange enregistrée
    cardContainer.innerHTML = `
      <div class="empty-state" style="padding: 24px 16px;">
        <span class="empty-state-icon">🛢️</span>
        <div class="empty-state-title">Aucune vidange enregistrée</div>
        <div class="empty-state-desc">Enregistrez votre première vidange pour activer le suivi kilométrique et les rappels.</div>
        <button class="btn btn-primary" onclick="openVidangeModal()" style="margin-top: 8px;">
          <span>+ Enregistrer une vidange</span>
        </button>
      </div>
    `;
    cardContainer.className = 'vidange-status-card';
  } else {
    // Calcul des kilomètres et pourcentages
    const interval = car.vidangeInterval || 10000;
    const targetKm = lastVidange.nextMileage || (lastVidange.mileage + interval);
    const kmRemaining = targetKm - car.currentKm;
    const kmTraveled = car.currentKm - lastVidange.mileage;
    const progressPercent = Math.min(100, Math.max(0, Math.round((kmTraveled / interval) * 100)));

    let statusClass = 'ok';
    let statusText = 'Vidange à jour';
    let statusBadgeText = '✅ Parfait';

    if (kmRemaining <= 0) {
      statusClass = 'danger';
      statusText = 'Vidange DÉPASSÉE !';
      statusBadgeText = `🚨 Retard : +${Math.abs(kmRemaining).toLocaleString()} km`;
    } else if (kmRemaining <= 1500) {
      statusClass = 'warning';
      statusText = 'Vidange imminente';
      statusBadgeText = '⚠️ À prévoir bientôt';
    }

    cardContainer.className = `vidange-status-card status-${statusClass}`;
    cardContainer.innerHTML = `
      <div class="status-card-header">
        <span class="section-label">
          <span>🛢️</span> Suivi Huile Moteur
        </span>
        <span class="status-badge ${statusClass}">${statusBadgeText}</span>
      </div>

      <div class="progress-container">
        <div class="progress-info">
          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">
              ${kmRemaining >= 0 ? 'Kilomètres restants' : 'Dépassement de vidange'}
            </div>
            <div class="km-remaining-big ${statusClass}">
              ${Math.abs(kmRemaining).toLocaleString()} <span style="font-size: 0.95rem; font-weight: 600;">km</span>
            </div>
          </div>
          <div style="text-align: right; font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">
            ${progressPercent}% usure
          </div>
        </div>

        <div class="progress-track">
          <div class="progress-fill ${statusClass}" style="width: ${progressPercent}%;"></div>
        </div>
      </div>

      <div class="vidange-meta-grid">
        <div class="meta-item">
          <span class="meta-item-label">Dernière vidange le</span>
          <span class="meta-item-val">${formatDate(lastVidange.date)} à ${formatNumber(lastVidange.mileage)} km</span>
        </div>
        <div class="meta-item">
          <span class="meta-item-label">Prochaine échéance</span>
          <span class="meta-item-val">${formatNumber(targetKm)} km</span>
        </div>
        <div class="meta-item">
          <span class="meta-item-label">Type d'huile</span>
          <span class="meta-item-val">${lastVidange.oilGrade || '5W30'} ${lastVidange.oilBrand ? `(${lastVidange.oilBrand})` : ''}</span>
        </div>
        <div class="meta-item">
          <span class="meta-item-label">Coût vidange</span>
          <span class="meta-item-val" style="color: var(--accent-emerald-light);">${lastVidange.cost ? `${lastVidange.cost} ${appState.currency}` : 'Non précisé'}</span>
        </div>
      </div>
    `;
  }

  // Résumé rapide des organes / pièces prioritaires
  renderDashboardAlerts(car);
}

// Alertes prioritaires pour les pièces d'usure sur le dashboard
function renderDashboardAlerts(car) {
  const container = document.getElementById('dash-urgent-parts-list');
  if (!container) return;

  const partsStatus = calculateAllPartsStatus(car);
  // Filtrer les pièces qui ont besoin d'attention (danger ou warning)
  const urgentParts = partsStatus.filter(p => p.status === 'danger' || p.status === 'warning');

  if (urgentParts.length === 0) {
    container.innerHTML = `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 14px; display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 1.5rem;">🛡️</span>
        <div>
          <div style="font-size: 0.88rem; font-weight: 700; color: var(--accent-emerald-light);">Tous les organes sont à jour</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">Courroies, freins et amortisseurs sont dans les tolérances recommandées.</div>
        </div>
      </div>
    `;
    return;
  }

  let html = '';
  urgentParts.forEach(p => {
    const isDanger = p.status === 'danger';
    const badgeClass = isDanger ? 'danger' : 'warning';
    const textMsg = isDanger 
      ? `Échéance dépassée de ${Math.abs(p.kmRemaining).toLocaleString()} km !`
      : `À remplacer dans ${p.kmRemaining.toLocaleString()} km`;

    html += `
      <div class="part-card" onclick="openPartModal('${p.key}')" style="border-left: 4px solid ${isDanger ? 'var(--accent-rose)' : 'var(--accent-amber)'};">
        <div class="part-card-top">
          <div class="part-title-group">
            <span class="part-emoji-icon">${p.icon}</span>
            <div>
              <div class="part-name">${p.name}</div>
              <div class="part-last-change">${p.lastChangeText}</div>
            </div>
          </div>
          <span class="status-badge ${badgeClass}">${textMsg}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateGDriveModalUI();
}

// ==========================================================================
// 6. CALCUL DE L'ÉTAT D'USURE DES PIÈCES (ORGANES)
// ==========================================================================
function calculateAllPartsStatus(car) {
  const results = [];
  const records = appState.maintenanceRecords.filter(r => r.vehicleId === car.id);

  for (const key in STANDARD_PARTS) {
    const def = STANDARD_PARTS[key];
    const partRecords = records.filter(r => r.partKey === key).sort((a, b) => new Date(b.date) - new Date(a.date));
    const lastRecord = partRecords[0];

    if (!lastRecord) {
      // Jamais changé ou non renseigné
      results.push({
        key: def.key,
        name: def.name,
        shortName: def.shortName,
        category: def.category,
        icon: def.icon,
        hasRecord: false,
        lastChangeText: 'Aucun enregistrement',
        kmRemaining: def.defaultIntervalKm,
        percentUsed: 0,
        status: 'unknown',
        lastRecord: null
      });
    } else {
      const interval = def.defaultIntervalKm;
      const targetKm = lastRecord.nextMileage || (lastRecord.mileage + interval);
      const kmRemaining = targetKm - car.currentKm;
      const kmTraveled = car.currentKm - lastRecord.mileage;
      const percentUsed = Math.min(100, Math.max(0, Math.round((kmTraveled / interval) * 100)));

      let status = 'ok';
      if (kmRemaining <= 0) {
        status = 'danger';
      } else if (kmRemaining <= 3000) {
        status = 'warning';
      }

      results.push({
        key: def.key,
        name: def.name,
        shortName: def.shortName,
        category: def.category,
        icon: def.icon,
        hasRecord: true,
        lastDate: lastRecord.date,
        lastMileage: lastRecord.mileage,
        targetKm: targetKm,
        lastChangeText: `Remplacé le ${formatDate(lastRecord.date)} (${formatNumber(lastRecord.mileage)} km)`,
        kmRemaining: kmRemaining,
        percentUsed: percentUsed,
        status: status,
        lastRecord: lastRecord
      });
    }
  }

  return results;
}

// ==========================================================================
// 7. RENDU DE LA VUE PIÈCES D'USURE & ORGANES
// ==========================================================================
let currentPartsFilter = 'all';

function renderPartsView() {
  const container = document.getElementById('parts-cards-container');
  if (!container) return;

  const car = getActiveVehicle();
  if (!car) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🚗</span>
        <div class="empty-state-title">Aucun véhicule actif</div>
        <div class="empty-state-desc">Ajoutez un véhicule dans l'onglet Garage pour suivre ses pièces d'usure.</div>
        <button class="btn btn-primary" onclick="openCarModal()" style="margin-top: 10px;">
          <span>+ Ajouter un véhicule</span>
        </button>
      </div>
    `;
    return;
  }

  const allParts = calculateAllPartsStatus(car);
  const filtered = currentPartsFilter === 'all' 
    ? allParts 
    : allParts.filter(p => p.category === currentPartsFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🔧</span>
        <div class="empty-state-title">Aucune pièce dans cette catégorie</div>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(p => {
    let badgeHtml = '';
    let progressColor = 'ok';

    if (!p.hasRecord) {
      badgeHtml = `<span class="status-badge" style="background: rgba(148, 163, 184, 0.2); color: var(--text-secondary); border: 1px solid var(--border-color);">Non renseigné</span>`;
      progressColor = 'unknown';
    } else if (p.status === 'danger') {
      badgeHtml = `<span class="status-badge danger">🚨 Remplacement Requis (${Math.abs(p.kmRemaining).toLocaleString()} km dépassés)</span>`;
      progressColor = 'danger';
    } else if (p.status === 'warning') {
      badgeHtml = `<span class="status-badge warning">⚠️ Bientôt (${p.kmRemaining.toLocaleString()} km restants)</span>`;
      progressColor = 'warning';
    } else {
      badgeHtml = `<span class="status-badge ok">✅ Bon état (${p.kmRemaining.toLocaleString()} km restants)</span>`;
      progressColor = 'ok';
    }

    html += `
      <div class="part-card" onclick="openPartModal('${p.key}')">
        <div class="part-card-top">
          <div class="part-title-group">
            <span class="part-emoji-icon">${p.icon}</span>
            <div>
              <div class="part-name">${p.name}</div>
              <div class="part-last-change">${p.lastChangeText}</div>
            </div>
          </div>
          ${badgeHtml}
        </div>

        ${p.hasRecord ? `
          <div class="part-stats-row">
            <span>Usure estimée: <strong>${p.percentUsed}%</strong></span>
            <span>Échéance: <strong>${formatNumber(p.targetKm)} km</strong></span>
          </div>
          <div class="part-progress-track">
            <div class="part-progress-fill progress-fill ${progressColor}" style="width: ${p.percentUsed}%;"></div>
          </div>
        ` : `
          <div style="font-size: 0.75rem; color: var(--accent-blue-light); display: flex; align-items: center; gap: 4px;">
            <span>+ Toucher pour enregistrer la date et les km du changement</span>
          </div>
        `}
      </div>
    `;
  });

  container.innerHTML = html;
  updateGDriveModalUI();
}

function filterParts(category) {
  currentPartsFilter = category;
  document.querySelectorAll('.chip-filter').forEach(chip => {
    if (chip.getAttribute('data-cat') === category) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
  renderPartsView();
}

// ==========================================================================
// 8. RENDU DU JOURNAL D'HISTORIQUE & TIMELINE
// ==========================================================================
let currentHistoryFilter = 'all';

function renderHistoryView() {
  const container = document.getElementById('history-timeline-list');
  const countBadge = document.getElementById('history-total-count');
  const totalSpentEl = document.getElementById('history-total-spent');
  if (!container) return;

  const car = getActiveVehicle();
  if (!car) {
    if (totalSpentEl) totalSpentEl.textContent = `0 ${appState.currency || 'MAD'}`;
    if (countBadge) countBadge.textContent = '0 intervention';
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">📋</span>
        <div class="empty-state-title">Aucun véhicule actif</div>
        <div class="empty-state-desc">Ajoutez un véhicule dans l'onglet Garage pour consulter son historique d'entretien.</div>
      </div>
    `;
    return;
  }

  // Rassembler toutes les vidanges et tous les changements de pièces pour ce véhicule
  const vidanges = appState.vidanges
    .filter(v => v.vehicleId === car.id)
    .map(v => ({ ...v, type: 'vidange' }));

  const partRecords = appState.maintenanceRecords
    .filter(r => r.vehicleId === car.id)
    .map(r => ({ ...r, type: 'part' }));

  const allEvents = [...vidanges, ...partRecords].sort((a, b) => {
    // Tri décroissant par date ou kilométrage
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;
    return (b.mileage || 0) - (a.mileage || 0);
  });

  const totalSpent = allEvents.reduce((acc, curr) => acc + (parseFloat(curr.cost) || 0), 0);
  if (totalSpentEl) totalSpentEl.textContent = `${totalSpent.toLocaleString()} ${appState.currency}`;
  if (countBadge) countBadge.textContent = `${allEvents.length} intervention${allEvents.length > 1 ? 's' : ''}`;

  const filtered = currentHistoryFilter === 'all'
    ? allEvents
    : allEvents.filter(e => e.type === currentHistoryFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">📋</span>
        <div class="empty-state-title">Aucun historique disponible</div>
        <div class="empty-state-desc">Vos entretiens et vidanges enregistrés apparaîtront ici chronologiquement.</div>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    if (item.type === 'vidange') {
      const itemsChangedBadges = (item.items || []).map(itemId => {
        const def = VIDANGE_ITEMS_DEF.find(x => x.id === itemId);
        return `<span class="timeline-tag">${def ? def.label : itemId}</span>`;
      }).join('');

      html += `
        <div class="timeline-item">
          <div class="timeline-header">
            <span class="timeline-type-badge vidange">🛢️ Vidange Moteur</span>
            <div class="timeline-date-km">
              <div class="timeline-km">${formatNumber(item.mileage)} km</div>
              <div class="timeline-date">${formatDate(item.date)}</div>
            </div>
          </div>

          <div class="timeline-details">
            <div><strong>Huile:</strong> ${item.oilGrade || '5W30'} ${item.oilBrand ? `(${item.oilBrand})` : ''} ${item.oilQuantity ? `- ${item.oilQuantity}` : ''}</div>
            ${item.garage ? `<div><span style="color: var(--text-muted);">Garage / Lieu:</span> ${item.garage}</div>` : ''}
            ${item.notes ? `<div style="font-style: italic; color: var(--text-muted); margin-top: 4px;">« ${item.notes} »</div>` : ''}
          </div>

          ${itemsChangedBadges ? `<div class="timeline-tags-list">${itemsChangedBadges}</div>` : ''}

          <div class="timeline-footer">
            <span style="color: var(--text-muted);">Prochaine: ${formatNumber(item.nextMileage)} km</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="timeline-cost">${item.cost ? `${item.cost} ${appState.currency}` : ''}</span>
              <button onclick="deleteVidange('${item.id}')" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px;">🗑️</button>
            </div>
          </div>
        </div>
      `;
    } else {
      // Changement de pièce
      const partDef = STANDARD_PARTS[item.partKey] || { name: item.partKey, icon: '🔧' };

      html += `
        <div class="timeline-item">
          <div class="timeline-header">
            <span class="timeline-type-badge piece">${partDef.icon} ${partDef.name}</span>
            <div class="timeline-date-km">
              <div class="timeline-km">${formatNumber(item.mileage)} km</div>
              <div class="timeline-date">${formatDate(item.date)}</div>
            </div>
          </div>

          <div class="timeline-details">
            ${item.brand ? `<div><strong>Marque / Pièce:</strong> ${item.brand}</div>` : ''}
            ${item.garage ? `<div><span style="color: var(--text-muted);">Intervention:</span> ${item.garage}</div>` : ''}
            ${item.notes ? `<div style="font-style: italic; color: var(--text-muted); margin-top: 4px;">« ${item.notes} »</div>` : ''}
          </div>

          <div class="timeline-footer">
            <span style="color: var(--text-muted);">Échéance: ${formatNumber(item.nextMileage)} km</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="timeline-cost">${item.cost ? `${item.cost} ${appState.currency}` : ''}</span>
              <button onclick="deleteMaintenanceRecord('${item.id}')" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px;">🗑️</button>
            </div>
          </div>
        </div>
      `;
    }
  });

  container.innerHTML = html;
  updateGDriveModalUI();
}

function filterHistory(type) {
  currentHistoryFilter = type;
  document.querySelectorAll('.history-filter-chip').forEach(chip => {
    if (chip.getAttribute('data-type') === type) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
  renderHistoryView();
}

// ==========================================================================
// 9. GESTION DES VÉHICULES (AJOUTER, MODIFIER, SÉLECTIONNER)
// ==========================================================================
function renderVehiclesView() {
  const container = document.getElementById('vehicles-list-container');
  if (!container) return;

  if (!appState.vehicles || appState.vehicles.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🚗</span>
        <div class="empty-state-title">Aucun véhicule dans votre garage</div>
        <div class="empty-state-desc">Ajoutez votre voiture pour commencer le suivi d'entretien et des vidanges.</div>
        <button class="btn btn-primary" onclick="openCarModal()" style="margin-top: 10px;">
          <span>+ Ajouter un véhicule</span>
        </button>
      </div>
    `;
    updateGDriveModalUI();
    return;
  }

  let html = '';
  appState.vehicles.forEach(v => {
    const isActive = v.id === appState.activeVehicleId;
    html += `
      <div class="part-card" style="border-left: 4px solid ${isActive ? 'var(--accent-emerald)' : 'var(--border-color)'};">
        <div class="part-card-top">
          <div class="part-title-group">
            <span class="part-emoji-icon">🚗</span>
            <div>
              <div class="part-name">${v.brand} ${v.model} (${v.year})</div>
              <div class="part-last-change">${v.plate || 'Sans immatriculation'} • ${v.fuel ? v.fuel.toUpperCase() : ''}</div>
            </div>
          </div>
          ${isActive 
            ? `<span class="status-badge ok">Actif</span>`
            : `<button class="btn btn-secondary" onclick="setActiveVehicle('${v.id}')" style="padding: 4px 10px; font-size: 0.75rem;">Choisir</button>`
          }
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 0.82rem;">
          <span>Compteur actuel: <strong>${formatNumber(v.currentKm)} km</strong></span>
          <div style="display: flex; gap: 8px;">
            <button class="icon-button" onclick="openCarModal('${v.id}')" title="Modifier" style="width: 34px; height: 34px;">✏️</button>
            <button class="icon-button" onclick="deleteVehicle('${v.id}')" title="Supprimer ce véhicule" style="width: 34px; height: 34px; color: var(--accent-rose); border-color: rgba(239, 68, 68, 0.4);">🗑️</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateGDriveModalUI();
}

function setActiveVehicle(vehicleId) {
  appState.activeVehicleId = vehicleId;
  saveState();
  showToast('Véhicule actif sélectionné');
  renderDashboard();
  renderVehiclesView();
  closeCarSwitcherModal();
}

// ==========================================================================
// 10. MODAL VIDANGE (ENREGISTRER / COCHER CE QUI A ÉTÉ CHANGÉ)
// ==========================================================================
function openVidangeModal() {
  const car = getActiveVehicle();
  if (!car) {
    alert("Veuillez d'abord ajouter un véhicule dans le garage.");
    openCarModal();
    return;
  }

  const form = document.getElementById('vidange-form');
  form.reset();

  // Pré-remplir la date du jour et le kilométrage actuel du véhicule
  document.getElementById('vidange-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('vidange-mileage').value = car.currentKm;

  // Calcul automatique du prochain kilométrage
  const interval = car.vidangeInterval || 10000;
  document.getElementById('vidange-next-mileage').value = car.currentKm + interval;

  // Re-générer les cases à cocher avec cases par défaut cochées
  const checklistContainer = document.getElementById('vidange-checklist-tiles');
  let checklistHtml = '';
  VIDANGE_ITEMS_DEF.forEach(item => {
    const isChecked = item.default;
    checklistHtml += `
      <label class="check-tile ${isChecked ? 'checked' : ''}" onclick="toggleCheckTile(this)">
        <input type="checkbox" name="vidange_item" value="${item.id}" ${isChecked ? 'checked' : ''}>
        <span class="check-tile-label">${item.label}</span>
      </label>
    `;
  });
  checklistContainer.innerHTML = checklistHtml;

  openModal('modal-vidange');
}

function toggleCheckTile(tileEl) {
  const checkbox = tileEl.querySelector('input[type="checkbox"]');
  if (checkbox) {
    if (tileEl.classList.contains('checked')) {
      tileEl.classList.remove('checked');
    } else {
      tileEl.classList.add('checked');
    }
  }
}

function setVidangeIntervalQuick(addKm) {
  const currentMileage = parseInt(document.getElementById('vidange-mileage').value) || 0;
  document.getElementById('vidange-next-mileage').value = currentMileage + addKm;
}

function onVidangeMileageChange() {
  const car = getActiveVehicle();
  const currentMileage = parseInt(document.getElementById('vidange-mileage').value) || 0;
  const interval = (car && car.vidangeInterval) ? car.vidangeInterval : 10000;
  document.getElementById('vidange-next-mileage').value = currentMileage + interval;
}

function handleSaveVidange(event) {
  event.preventDefault();
  const car = getActiveVehicle();
  if (!car) return;

  const mileage = parseInt(document.getElementById('vidange-mileage').value);
  const nextMileage = parseInt(document.getElementById('vidange-next-mileage').value);
  const date = document.getElementById('vidange-date').value;
  const oilGrade = document.getElementById('vidange-oil-grade').value;
  const oilBrand = document.getElementById('vidange-oil-brand').value;
  const oilQuantity = document.getElementById('vidange-oil-qty').value;
  const cost = parseFloat(document.getElementById('vidange-cost').value) || 0;
  const garage = document.getElementById('vidange-garage').value;
  const notes = document.getElementById('vidange-notes').value;

  // Récupérer les cases cochées
  const checkedItems = [];
  document.querySelectorAll('input[name="vidange_item"]:checked').forEach(cb => {
    checkedItems.push(cb.value);
  });

  const newVidange = {
    id: 'vid_' + Date.now(),
    vehicleId: car.id,
    date: date,
    mileage: mileage,
    nextMileage: nextMileage,
    oilGrade: oilGrade,
    oilBrand: oilBrand,
    oilQuantity: oilQuantity,
    items: checkedItems,
    cost: cost,
    garage: garage,
    notes: notes,
    createdAt: new Date().toISOString()
  };

  // Mettre à jour le compteur kilométrique du véhicule si la vidange est plus récente
  if (mileage > car.currentKm) {
    car.currentKm = mileage;
  }

  appState.vidanges.unshift(newVidange);
  saveState();
  closeModal('modal-vidange');
  showToast('Vidange enregistrée avec succès !');

  renderDashboard();
}

function deleteVidange(vidangeId) {
  if (!confirm('Confirmez-vous la suppression de cette vidange ?')) return;
  appState.vidanges = appState.vidanges.filter(v => v.id !== vidangeId);
  saveState();
  showToast('Vidange supprimée');
  renderDashboard();
  renderHistoryView();
}

// ==========================================================================
// 11. MODAL CHANGEMENT DE PIÈCE / GROS ENTRETIEN
// (COURROIE, AMORTISSEURS, DISQUES, PLAQUETTES, EMBRAYAGE...)
// ==========================================================================
function openPartModal(defaultPartKey = null) {
  const car = getActiveVehicle();
  if (!car) {
    alert("Veuillez d'abord ajouter un véhicule dans le garage.");
    openCarModal();
    return;
  }

  const form = document.getElementById('part-form');
  form.reset();

  document.getElementById('part-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('part-mileage').value = car.currentKm;

  // Remplir le select des pièces
  const select = document.getElementById('part-key-select');
  select.innerHTML = '';
  for (const key in STANDARD_PARTS) {
    const p = STANDARD_PARTS[key];
    const option = document.createElement('option');
    option.value = p.key;
    option.textContent = `${p.icon} ${p.name}`;
    if (defaultPartKey && defaultPartKey === p.key) {
      option.selected = true;
    }
    select.appendChild(option);
  }

  // Pré-remplir l'échéance selon la pièce choisie
  updatePartNextMileage();

  openModal('modal-part');
}

function updatePartNextMileage() {
  const car = getActiveVehicle();
  const select = document.getElementById('part-key-select');
  const selectedKey = select.value;
  const def = STANDARD_PARTS[selectedKey];
  const mileage = parseInt(document.getElementById('part-mileage').value) || (car ? car.currentKm : 0);

  if (def) {
    document.getElementById('part-next-mileage').value = mileage + def.defaultIntervalKm;
    document.getElementById('part-interval-hint').textContent = `Recommandation constructeur : tous les ${formatNumber(def.defaultIntervalKm)} km`;
  }
}

function handleSavePart(event) {
  event.preventDefault();
  const car = getActiveVehicle();
  if (!car) return;

  const partKey = document.getElementById('part-key-select').value;
  const date = document.getElementById('part-date').value;
  const mileage = parseInt(document.getElementById('part-mileage').value);
  const nextMileage = parseInt(document.getElementById('part-next-mileage').value);
  const brand = document.getElementById('part-brand').value;
  const cost = parseFloat(document.getElementById('part-cost').value) || 0;
  const garage = document.getElementById('part-garage').value;
  const notes = document.getElementById('part-notes').value;

  const newRecord = {
    id: 'maint_' + Date.now(),
    vehicleId: car.id,
    partKey: partKey,
    date: date,
    mileage: mileage,
    nextMileage: nextMileage,
    brand: brand,
    cost: cost,
    garage: garage,
    notes: notes,
    createdAt: new Date().toISOString()
  };

  if (mileage > car.currentKm) {
    car.currentKm = mileage;
  }

  appState.maintenanceRecords.unshift(newRecord);
  saveState();
  closeModal('modal-part');
  showToast('Remplacement de pièce enregistré !');

  renderDashboard();
  renderPartsView();
}

function deleteMaintenanceRecord(recordId) {
  if (!confirm("Confirmez-vous la suppression de cet enregistrement d'entretien ?")) return;
  appState.maintenanceRecords = appState.maintenanceRecords.filter(r => r.id !== recordId);
  saveState();
  showToast('Enregistrement supprimé');
  renderDashboard();
  renderPartsView();
  renderHistoryView();
}

// ==========================================================================
// 12. MODAL MISE À JOUR RAPIDE DU COMPTEUR KILOMÉTRIQUE
// ==========================================================================
function openOdometerModal() {
  const car = getActiveVehicle();
  if (!car) {
    alert("Veuillez d'abord ajouter un véhicule dans le garage.");
    openCarModal();
    return;
  }

  document.getElementById('odometer-car-name').textContent = `${car.brand} ${car.model}`;
  document.getElementById('quick-odometer-input').value = car.currentKm;
  openModal('modal-odometer');
}

function handleSaveOdometer(event) {
  event.preventDefault();
  const car = getActiveVehicle();
  if (!car) return;

  const newKm = parseInt(document.getElementById('quick-odometer-input').value);
  if (isNaN(newKm) || newKm < 0) {
    alert('Veuillez entrer un kilométrage valide.');
    return;
  }

  car.currentKm = newKm;
  saveState();
  closeModal('modal-odometer');
  showToast('Compteur kilométrique mis à jour !');
  renderDashboard();
}

// ==========================================================================
// 13. MODAL VÉHICULE (AJOUT / MODIFICATION)
// ==========================================================================
let editingCarId = null;

function openCarModal(carId = null) {
  editingCarId = carId;
  const modalTitle = document.getElementById('car-modal-title');
  const deleteBtn = document.getElementById('btn-delete-car-modal');
  const form = document.getElementById('car-form');
  form.reset();

  if (carId) {
    const car = appState.vehicles.find(v => v.id === carId);
    if (car) {
      modalTitle.textContent = 'Modifier le véhicule';
      if (deleteBtn) deleteBtn.style.display = 'inline-flex';
      document.getElementById('car-brand').value = car.brand || '';
      document.getElementById('car-model').value = car.model || '';
      document.getElementById('car-year').value = car.year || '';
      document.getElementById('car-plate').value = car.plate || '';
      document.getElementById('car-km').value = car.currentKm || '';
      document.getElementById('car-fuel').value = car.fuel || 'diesel';
      document.getElementById('car-motorisation').value = car.motorisation || '';
      document.getElementById('car-interval').value = car.vidangeInterval || 10000;
    }
  } else {
    modalTitle.textContent = 'Ajouter un véhicule';
    if (deleteBtn) deleteBtn.style.display = 'none';
    document.getElementById('car-interval').value = 10000;
  }

  openModal('modal-car');
}

function deleteCurrentEditingCar() {
  if (!editingCarId) return;
  const idToDelete = editingCarId;
  closeModal('modal-car');
  deleteVehicle(idToDelete);
}

function handleSaveCar(event) {
  event.preventDefault();

  const brand = document.getElementById('car-brand').value.trim();
  const model = document.getElementById('car-model').value.trim();
  const year = parseInt(document.getElementById('car-year').value) || new Date().getFullYear();
  const plate = document.getElementById('car-plate').value.trim().toUpperCase();
  const currentKm = parseInt(document.getElementById('car-km').value) || 0;
  const fuel = document.getElementById('car-fuel').value;
  const motorisation = document.getElementById('car-motorisation').value.trim();
  const vidangeInterval = parseInt(document.getElementById('car-interval').value) || 10000;

  if (editingCarId) {
    const car = appState.vehicles.find(v => v.id === editingCarId);
    if (car) {
      car.brand = brand;
      car.model = model;
      car.year = year;
      car.plate = plate;
      car.currentKm = currentKm;
      car.fuel = fuel;
      car.motorisation = motorisation;
      car.vidangeInterval = vidangeInterval;
      showToast('Véhicule mis à jour !');
    }
  } else {
    const newCar = {
      id: 'veh_' + Date.now(),
      name: `${brand} ${model}`,
      brand: brand,
      model: model,
      year: year,
      plate: plate,
      currentKm: currentKm,
      fuel: fuel,
      motorisation: motorisation,
      vidangeInterval: vidangeInterval,
      createdAt: new Date().toISOString()
    };
    appState.vehicles.push(newCar);
    appState.activeVehicleId = newCar.id;
    showToast('Nouveau véhicule ajouté !');
  }

  saveState();
  closeModal('modal-car');
  renderDashboard();
  renderVehiclesView();
  renderPartsView();
  renderHistoryView();
}

function deleteVehicle(carId) {
  if (!confirm('Êtes-vous sûr de vouloir supprimer ce véhicule et toutes ses données associées ?')) return;

  appState.vehicles = (appState.vehicles || []).filter(v => v.id !== carId);
  appState.vidanges = (appState.vidanges || []).filter(v => v.vehicleId !== carId);
  appState.maintenanceRecords = (appState.maintenanceRecords || []).filter(r => r.vehicleId !== carId);

  if (appState.activeVehicleId === carId) {
    appState.activeVehicleId = (appState.vehicles && appState.vehicles.length > 0) ? appState.vehicles[0].id : null;
  }

  saveState();
  showToast('Véhicule supprimé');
  renderDashboard();
  renderVehiclesView();
  renderPartsView();
  renderHistoryView();
}

function openCarSwitcherModal() {
  const container = document.getElementById('car-switcher-list');
  if (!container) return;

  if (!appState.vehicles || appState.vehicles.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 20px 10px;">
        <span class="empty-state-icon">🚗</span>
        <div class="empty-state-title">Aucun véhicule</div>
        <div class="empty-state-desc">Ajoutez votre premier véhicule pour le sélectionner.</div>
        <button class="btn btn-primary" onclick="closeCarSwitcherModal(); openCarModal();" style="margin-top: 12px;">
          + Ajouter un véhicule
        </button>
      </div>
    `;
    openModal('modal-car-switcher');
    return;
  }

  let html = '';
  appState.vehicles.forEach(v => {
    const isActive = v.id === appState.activeVehicleId;
    html += `
      <div class="part-card" onclick="setActiveVehicle('${v.id}')" style="margin-bottom: 8px; border-left: 4px solid ${isActive ? 'var(--accent-emerald)' : 'var(--border-color)'}; cursor: pointer;">
        <div class="part-card-top">
          <div class="part-title-group">
            <span class="part-emoji-icon">🚗</span>
            <div>
              <div class="part-name">${v.brand} ${v.model} (${v.year})</div>
              <div class="part-last-change">${v.plate || 'Non immatriculé'} • ${formatNumber(v.currentKm)} km</div>
            </div>
          </div>
          ${isActive ? `<span class="status-badge ok">Actif</span>` : ''}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
  openModal('modal-car-switcher');
}

function closeCarSwitcherModal() {
  closeModal('modal-car-switcher');
}

// ==========================================================================
// 14. EXPORTATION, IMPRESSION & SAUVEGARDE
// ==========================================================================
function exportDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  const dateStr = new Date().toISOString().split('T')[0];
  dlAnchorElem.setAttribute("download", `sauvegarde_vidange_auto_${dateStr}.json`);
  dlAnchorElem.click();
  showToast('Sauvegarde exportée avec succès !');
}

function triggerImportJSON() {
  document.getElementById('import-file-input').click();
}

function handleImportJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.vehicles && Array.isArray(imported.vehicles)) {
        appState = imported;
        saveState();
        showToast('Données importées avec succès !');
        renderDashboard();
        renderVehiclesView();
        renderHistoryView();
        renderPartsView();
      } else {
        alert("Format de fichier non reconnu.");
      }
    } catch (err) {
      alert("Erreur lors de la lecture du fichier JSON.");
    }
  };
  reader.readAsText(file);
}

function printMaintenanceReport() {
  window.print();
}

// ==========================================================================
// 14. BIS : SYNCHRONISATION & SAUVEGARDE GOOGLE DRIVE
// ==========================================================================
async function backupToGoogleDrive() {
  try {
    const backupData = JSON.stringify(appState, null, 2);
    const dateStr = new Date().toISOString().split('T')[0];
    const fileName = `carnet_vidange_auto_${dateStr}.json`;
    const blob = new Blob([backupData], { type: 'application/json' });

    // Enregistrer la date de dernière sauvegarde
    appState.lastBackupDate = new Date().toISOString();
    saveState();
    updateGDriveModalUI();

    // 1. Sur Mobile : Utiliser le partage natif (qui permet de choisir directement Google Drive)
    const file = new File([blob], fileName, { type: 'application/json' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: 'Sauvegarde Vidange Auto',
        text: 'Sauvegarde de mon carnet d’entretien automobile',
        files: [file]
      });
      showToast('Sauvegarde partagée vers Google Drive !');
      return;
    }

    // 2. Fallback direct : téléchargement du fichier JSON
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", URL.createObjectURL(blob));
    dlAnchorElem.setAttribute("download", fileName);
    dlAnchorElem.click();

    showToast('Fichier téléchargé ! Déposez-le dans votre Google Drive.');

    setTimeout(() => {
      if (confirm('Sauvegarde prête ! Souhaitez-vous ouvrir Google Drive maintenant pour y glisser votre fichier ?')) {
        window.open('https://drive.google.com/drive/my-drive', '_blank');
      }
    }, 500);

  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Erreur sauvegarde Google Drive', err);
      alert('Erreur lors de la sauvegarde : ' + err.message);
    }
  }
}

function triggerRestoreGoogleDrive() {
  const input = document.getElementById('gdrive-file-input');
  if (input) input.click();
}

function handleRestoreGoogleDrive(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.vehicles && Array.isArray(imported.vehicles)) {
        appState = imported;
        appState.lastBackupDate = new Date().toISOString();
        saveState();
        showToast('Données restaurées depuis Google Drive avec succès !');
        closeModal('modal-gdrive');
        renderDashboard();
        renderVehiclesView();
        renderHistoryView();
        renderPartsView();
        updateGDriveModalUI();
      } else {
        alert("Ce fichier JSON n'est pas un fichier de sauvegarde valide pour Vidange Auto.");
      }
    } catch (err) {
      alert("Erreur lors de la lecture du fichier : " + err.message);
    }
  };
  reader.readAsText(file);
}

function updateGDriveModalUI() {
  const lastSyncLabel = document.getElementById('gdrive-last-sync-label');
  const modalLastBackup = document.getElementById('modal-gdrive-last-backup');
  const modalSummary = document.getElementById('modal-gdrive-summary');
  const dashSyncStatus = document.getElementById('gdrive-sync-status-text');

  let text = 'Jamais sauvegardé';
  if (appState.lastBackupDate) {
    const d = new Date(appState.lastBackupDate);
    const dateFormatted = d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeFormatted = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    text = `Dernière sauvegarde : ${dateFormatted} à ${timeFormatted}`;
  }

  if (lastSyncLabel) lastSyncLabel.textContent = text;
  if (modalLastBackup) modalLastBackup.textContent = text;
  if (dashSyncStatus) dashSyncStatus.textContent = text;

  if (modalSummary) {
    const vCount = (appState.vehicles || []).length;
    const vidCount = (appState.vidanges || []).length;
    const mCount = (appState.maintenanceRecords || []).length;
    modalSummary.textContent = `Données prêtes : ${vCount} véhicule(s) • ${vidCount} vidange(s) • ${mCount} intervention(s) sur pièces.`;
  }
}

// ==========================================================================
// 15. FONCTIONS UTILITAIRES & MODAL MANAGEMENT
// ==========================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    if (modalId === 'modal-gdrive') {
      updateGDriveModalUI();
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
  if (!document.querySelector('.modal-overlay.active')) {
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function formatNumber(num) {
  if (num === undefined || num === null) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

// ==========================================================================
// 16. PWA INSTALLATION PROMPT
// ==========================================================================
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const pwaBtn = document.getElementById('pwa-install-header-btn');
  if (pwaBtn) pwaBtn.style.display = 'flex';
});

function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('Application en cours d’installation !');
      }
      deferredPrompt = null;
    });
  } else {
    // Instructions manuelles si déjà installé ou non supporté
    alert("Pour installer cette application sur votre téléphone :\n\n1. Appuyez sur le menu (les 3 points en haut à droite sur Chrome)\n2. Choisissez « Ajouter à l'écran d'accueil » ou « Installer l'application ».\n\nL'application s'installera avec son icône sur votre téléphone et fonctionnera même hors-ligne !");
  }
}

// ==========================================================================
// 17. INITIALISATION AU CHARGEMENT DE LA PAGE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initNavigation();
  renderDashboard();
  initFirebase();

  // Enregistrement du Service Worker pour le mode hors-ligne
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('Service Worker enregistré avec succès:', reg.scope);
    }).catch((err) => {
      console.log('Erreur enregistrement Service Worker:', err);
    });
  }

  // Fermeture des modaux en cliquant sur l'arrière-plan
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });
});

// ==========================================================================
// 18. GOOGLE FIREBASE : AUTHENTIFICATION & BASE DE DONNÉES CLOUD
// ==========================================================================
const firebaseConfig = {
  apiKey: "AIzaSyCYzw7jpeMLFuv073Gad-Y-FGMPRsFSN_Y",
  authDomain: "car-tracking-appl.firebaseapp.com",
  projectId: "car-tracking-appl",
  storageBucket: "car-tracking-appl.firebasestorage.app",
  messagingSenderId: "263152275533",
  appId: "1:263152275533:web:33806b0b818c67b1964c04",
  measurementId: "G-8L8RKW7DWZ"
};

let fbApp = null;
let fbAuth = null;
let fbDb = null;
let currentUser = null;
let firestoreUnsubscribe = null;
let authMode = 'login'; // 'login' | 'register'

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined') {
      if (!firebase.apps.length) {
        fbApp = firebase.initializeApp(firebaseConfig);
      } else {
        fbApp = firebase.app();
      }
      fbAuth = firebase.auth();
      fbDb = firebase.firestore();

      // Activer le cache hors-ligne Firestore
      fbDb.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        console.log('Info persistance Firestore:', err.code);
      });

      // Écouter l'état de connexion de l'utilisateur
      fbAuth.onAuthStateChanged(handleAuthStateChanged);
    } else {
      console.warn("Firebase SDK non chargé (mode hors-ligne)");
    }
  } catch (err) {
    console.error('Erreur initialisation Firebase:', err);
  }
}

function handleAuthStateChanged(user) {
  currentUser = user;
  updateUserUI();

  if (user) {
    // L'utilisateur est connecté !
    setSyncStatus('syncing');

    // Écouter en temps réel les données de cet utilisateur dans Firestore
    if (firestoreUnsubscribe) firestoreUnsubscribe();

    const userDocRef = fbDb.collection('users').doc(user.uid);
    firestoreUnsubscribe = userDocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const cloudData = doc.data();
        if (cloudData && cloudData.vehicles) {
          appState = { ...DEFAULT_DATA, ...cloudData };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
          renderDashboard();
          renderVehiclesView();
          renderHistoryView();
          renderPartsView();
        }
      } else {
        // Premier enregistrement : sauvegarder les données locales existantes dans le cloud
        syncToCloud();
      }
      setSyncStatus('synced');
    }, (error) => {
      console.warn('Erreur écoute Firestore:', error);
      setSyncStatus('offline');
    });

    closeModal('modal-auth');
    showToast('Connecté : ' + (user.displayName || user.email));
  } else {
    // Déconnecté
    if (firestoreUnsubscribe) {
      firestoreUnsubscribe();
      firestoreUnsubscribe = null;
    }
    setSyncStatus('offline');
  }
}

function updateUserUI() {
  const headerUserName = document.getElementById('header-user-name');
  const headerAvatar = document.getElementById('header-avatar-circle');
  const accountUserName = document.getElementById('account-user-name');
  const accountUserEmail = document.getElementById('account-user-email');
  const accountAvatar = document.getElementById('account-avatar-large');
  const accountStats = document.getElementById('account-data-stats');

  if (currentUser) {
    const displayName = currentUser.displayName || (currentUser.email ? currentUser.email.split('@')[0] : 'Mon Compte');
    if (headerUserName) headerUserName.textContent = displayName;
    if (accountUserName) accountUserName.textContent = currentUser.displayName || displayName;
    if (accountUserEmail) accountUserEmail.textContent = currentUser.email || '';

    // Photo ou initiale
    if (currentUser.photoURL) {
      if (headerAvatar) headerAvatar.innerHTML = `<img src="${currentUser.photoURL}" class="user-avatar-img" alt="avatar">`;
      if (accountAvatar) accountAvatar.innerHTML = `<img src="${currentUser.photoURL}" class="user-avatar-img" alt="avatar">`;
    } else {
      const initial = displayName.charAt(0).toUpperCase();
      if (headerAvatar) headerAvatar.textContent = initial;
      if (accountAvatar) accountAvatar.textContent = initial;
    }

    if (accountStats) {
      const vCount = (appState.vehicles || []).length;
      const vidCount = (appState.vidanges || []).length;
      accountStats.textContent = `${vCount} Véhicule(s) • ${vidCount} Vidange(s) enregistrée(s)`;
    }
  } else {
    if (headerUserName) headerUserName.textContent = 'Connexion';
    if (headerAvatar) headerAvatar.textContent = '👤';
  }
}

function setSyncStatus(status) {
  // status: 'synced' | 'syncing' | 'offline'
  const headerDot = document.getElementById('header-sync-dot');
  const accountDot = document.getElementById('account-sync-dot');
  const accountStatusText = document.getElementById('account-sync-status-text');

  if (headerDot) {
    headerDot.className = 'cloud-status-dot ' + status;
  }
  if (accountDot) {
    accountDot.className = 'cloud-status-dot ' + status;
  }
  if (accountStatusText) {
    if (status === 'synced') {
      accountStatusText.textContent = 'Synchronisé en direct avec Firebase Cloud';
      accountStatusText.style.color = 'var(--accent-emerald-light)';
    } else if (status === 'syncing') {
      accountStatusText.textContent = 'Synchronisation en cours...';
      accountStatusText.style.color = 'var(--accent-amber-light)';
    } else {
      accountStatusText.textContent = 'Mode local (non connecté au cloud)';
      accountStatusText.style.color = 'var(--text-muted)';
    }
  }
}

function syncToCloud() {
  if (!currentUser || !fbDb) return;
  try {
    setSyncStatus('syncing');
    appState.updatedAt = new Date().toISOString();
    fbDb.collection('users').doc(currentUser.uid).set(appState, { merge: true })
      .then(() => {
        setSyncStatus('synced');
      })
      .catch((err) => {
        console.warn('Erreur sauvegarde cloud Firestore:', err);
        setSyncStatus('offline');
      });
  } catch (e) {
    console.error('Erreur syncToCloud:', e);
  }
}

function manualSyncToCloud() {
  if (!currentUser) {
    openModal('modal-auth');
    return;
  }
  syncToCloud();
  showToast('Données synchronisées dans le cloud Firebase !');
}

// --------------------------------------------------------------------------
// MODES AUTHENTIFICATION (LOGIN / REGISTER / GOOGLE)
// --------------------------------------------------------------------------
function setAuthMode(mode) {
  authMode = mode;
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const title = document.getElementById('auth-modal-title');
  const titleIcon = document.getElementById('auth-modal-title-icon');
  const submitBtn = document.getElementById('auth-submit-btn');
  const googleBtnText = document.getElementById('google-btn-text');
  const errorBox = document.getElementById('auth-error-box');

  if (errorBox) errorBox.style.display = 'none';

  if (mode === 'login') {
    if (tabLogin) tabLogin.classList.add('active');
    if (tabRegister) tabRegister.classList.remove('active');
    if (title) title.textContent = 'Connexion à votre compte';
    if (titleIcon) titleIcon.textContent = '🔐';
    if (submitBtn) submitBtn.textContent = 'Se connecter';
    if (googleBtnText) googleBtnText.textContent = 'Continuer avec Google';
  } else {
    if (tabLogin) tabLogin.classList.remove('active');
    if (tabRegister) tabRegister.classList.add('active');
    if (title) title.textContent = 'Créer un nouveau compte';
    if (titleIcon) titleIcon.textContent = '✨';
    if (submitBtn) submitBtn.textContent = 'Créer mon compte';
    if (googleBtnText) googleBtnText.textContent = "S'inscrire avec Google";
  }
}

function showAuthError(msg) {
  const errorBox = document.getElementById('auth-error-box');
  if (errorBox) {
    errorBox.textContent = msg;
    errorBox.style.display = 'block';
  }
}

function handleGoogleSignIn() {
  if (!fbAuth) {
    alert("Firebase n'est pas encore initialisé. Vérifiez votre connexion internet.");
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  fbAuth.signInWithPopup(provider).catch((error) => {
    console.warn("Popup error, trying redirect:", error);
    if (error.code === 'auth/popup-blocked' || error.code === 'auth/cancelled-popup-request') {
      fbAuth.signInWithRedirect(provider);
    } else if (error.code !== 'auth/popup-closed-by-user') {
      showAuthError(translateFirebaseError(error.code, error.message));
    }
  });
}

function handleEmailAuthSubmit(event) {
  event.preventDefault();
  if (!fbAuth) return;

  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errorBox = document.getElementById('auth-error-box');
  if (errorBox) errorBox.style.display = 'none';

  if (authMode === 'login') {
    fbAuth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        showAuthError(translateFirebaseError(error.code, error.message));
      });
  } else {
    fbAuth.createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        showAuthError(translateFirebaseError(error.code, error.message));
      });
  }
}

function handleSignOut() {
  if (fbAuth) {
    fbAuth.signOut().then(() => {
      showToast('Déconnexion effectuée');
      closeModal('modal-account');
    });
  }
}

function openAuthOrAccountModal() {
  if (currentUser) {
    updateUserUI();
    openModal('modal-account');
  } else {
    setAuthMode('login');
    openModal('modal-auth');
  }
}

function translateFirebaseError(code, defaultMsg) {
  switch (code) {
    case 'auth/invalid-email':
      return 'Adresse e-mail invalide.';
    case 'auth/user-not-found':
      return 'Aucun compte trouvé avec cet e-mail.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Mot de passe incorrect ou informations invalides.';
    case 'auth/email-already-in-use':
      return 'Un compte existe déjà avec cette adresse e-mail.';
    case 'auth/weak-password':
      return 'Le mot de passe doit contenir au moins 6 caractères.';
    case 'auth/network-request-failed':
      return 'Erreur de connexion réseau. Vérifiez votre connexion.';
    case 'auth/operation-not-allowed':
      return "Cette méthode de connexion n'est pas encore activée dans votre console Firebase.";
    default:
      return defaultMsg || 'Une erreur est survenue lors de la connexion.';
  }
}
