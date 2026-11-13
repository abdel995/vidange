# 🚗 Mon Carnet Vidange & Entretien Automobile

Application mobile moderne, complète et autonome conçue pour suivre précisément l'entretien de votre véhicule (vidange d'huile moteur, filtres, pièces d'usure majeures : courroies, freins, embrayage, amortisseurs...).

---

## 🌟 Fonctionnalités Incluses

### 1. 🛢️ Gestion Complète des Vidanges
- Enregistrement du **kilométrage** et de la **date**.
- Calcul automatique de la **prochaine échéance** (+10 000 km, +15 000 km, ou personnalisé).
- Choix de la viscosité de l'huile (5W30, 5W40, 10W40, 0W20...) et de la marque (Total, Castrol, Motul...).
- **Cases à cocher interactives** pour ce qui a été remplacé :
  - [x] Huile Moteur
  - [x] Filtre à Huile
  - [x] Filtre à Air
  - [x] Filtre d'Habitacle (Pollen)
  - [x] Filtre à Carburant (Gazole / Essence)
  - [x] Joint de bouchon de carter
  - [x] Niveau liquide lave-glace
  - [x] Remise à zéro du témoin de vidange
- Saisie du prix payé et du lieu / mécano.

### 2. ⚙️ Suivi Spécifique des Pièces d'Usure Majeures
Suivi dédié avec jauge d'usure et prévisions constructeurs pour :
- **Kit Courroie de Distribution + Pompe à eau** (~100 000 km / 5 ans)
- **Courroie d'Accessoires** (Alternateur / Climatisation)
- **Plaquettes de freins** (Avant et Arrière)
- **Disques de freins** (Avant et Arrière)
- **Kit d'embrayage** (+ butée)
- **Amortisseurs** (Avant et Arrière)
- **Pneus** (Train avant et Train arrière)
- **Batterie 12V**
- **Liquide de frein (DOT4)** et bougies

### 3. 📊 Tableau de Bord & Alertes Intelligentes
- Jauge visuelle d'état (Vert = OK, Orange = Échéance proche, Rouge = Échéance dépassée).
- Compteur kilométrique interactif modifiable en 1 clic.
- Liste des alertes prioritaires pour ne rien oublier.

### 4. 📋 Journal d'Historique & Dépenses
- Historique chronologique complet de chaque intervention.
- Calcul automatique du **total des dépenses**.
- Filtrage rapide (Vidanges seules ou Pièces d'usure).

### 5. 🚗 Multi-Véhicules
- Possibilité d'ajouter plusieurs voitures (famille, amis, utilitaire...).
- Basculement instantané d'une voiture à l'autre en un tap.

### 6. 💾 Sauvegarde & Export
- Export des données en fichier JSON.
- Restauration / Import d'une sauvegarde.
- Bouton d'impression pour générer le **Carnet d'Entretien Officiel en PDF** (idéal pour revendre sa voiture au meilleur prix).

---

## 🚀 Comment Lancer l'Application

### Option A : Sur votre PC
Double-cliquez simplement sur le fichier **`LANCER_APPLICATION.bat`** (ou ouvrez directement `index.html` dans Chrome ou Edge).

### Option B : Sur votre Téléphone (Même réseau Wi-Fi)
1. Lancez **`LANCER_APPLICATION.bat`** sur votre PC.
2. Le terminal vous affichera une adresse du type : `http://192.168.1.XX:8080`.
3. Tapez cette adresse sur le navigateur (Chrome) de votre smartphone.

---

## 📲 Comment l'Installer sur votre Téléphone (Sans câble, 100% hors-ligne)

1. Ouvrez l'application sur **Google Chrome** sur votre smartphone Android.
2. Appuyez sur les **3 petits points verticaux** (menu en haut à droite de Chrome).
3. Cliquez sur **« Ajouter à l'écran d'accueil »** ou **« Installer l'application »**.
4. L'application s'installe sur votre téléphone avec son icône native, son nom **« Vidange Auto »**, s'affiche en plein écran (sans barre de navigateur) et fonctionne **même sans internet / hors-ligne** grâce au Service Worker intégré !

---

## 📦 Comment Générer un Fichier `.APK` Direct

Si vous voulez impérativement un fichier physique `.apk` à transférer :
1. Allez sur **[PWABuilder](https://www.pwabuilder.com)** (service gratuit officiel Microsoft).
2. Entrez l'URL de votre application ou importez le dossier du projet.
3. Cliquez sur **« Package for Android »** puis **« Generate APK »**.
4. Vous obtenez directement votre fichier `vidange-auto.apk` prêt à être installé sur n'importe quel téléphone Android !
