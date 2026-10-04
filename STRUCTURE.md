# 🗺️ Mappa della Struttura del Sito — Swiss Time Expert

Questo documento definisce l'architettura dei file e la struttura dei contenuti multilingua (FR, EN, DE) della piattaforma di alta orologeria.

---

## 📁 Architettura delle Cartelle (Root)

/swiss-time-expert/
├── index.html                  # Pagina principale di benvenuto / reindirizzamento
├── _stile.css                  # Fogli di stile condivisi per il layout a quadretti
├── script.js                   # Script di interazione globale
├── swiss_lever_escapement_mechanism.glb # Modello 3D interattivo dello scappamento
├── sitemap.xml                 # Sitemap XML ufficiale per Google Search Console
├── README.md                   # Presentazione del repository GitHub
└── STRUCTURE.md                # (Questo file) Mappa e organizzazione dei moduli
│
├── /FR/                        # Cartella moduli in lingua francese
├── /EN/                        # Cartella moduli in lingua inglese
└── /DE/                        # Cartella moduli in lingua tedesca

---

## 📚 Elenco dei Moduli e File HTML

Tutti i moduli seguono una nomenclatura standardizzata presente in ciascuna delle cartelle di lingua (FR, EN, DE).

1. Modulo: 1. Mouvement Manuel
   - File HTML: _001A-Mouvement_Manuel.html ... _001D-...
   - Componenti: Échappement à ancre suisse, Modello 3D interattivo (.glb), Organe réglant, Balancier-spiral, Incabloc.

2. Modulo: 2. Montre Automatique
   - File HTML: _002-la-montre-automatique.html
   - Componenti: Sistemi di ricarica automatica, massa oscillante, reversibili.

3. Modulo: 3. Horloge Électronique
   - File HTML: _003-Horloge_Electronique.html
   - Componenti: Quarzo, circuiti integrati, motoripasso-passo.

4. Modulo: 4. Complications
   - File HTML: _004-Complications.html
   - Componenti: Grandi complicazioni, calendari perpetui, cronografi.

5. Modulo: 5. Familles de Matières
   - File HTML: _005-Familles_Matieres.html
   - Componenti: Metalli preziosi, leghe avanzate, ceramiche, silicio.

6. Modulo: 6. Technologies de Fabrication
   - File HTML: _006-Fhasses_Fabrication.html
   - Componenti: Lavorazioni meccaniche, stampaggio, finiture d'atelier (Côtes de Genève, perlage).

7. Modulo: 7. L'Habillage de la Montre
   - File HTML: _007-Habillage.html
   - Componenti: Cassa, quadrante, vetro zaffiro, cinturini e impermeabilità.

8. Modulo: 8. Histoire de la Mesure
   - File HTML: _008-Histoire_Mesure_Temps.html
   - Componenti: Evoluzione storica degli strumenti di misura temporale.

---

## 🔗 Collegamenti Linguistici (Hreflang & Switcher)

Ogni pagina HTML è collegata alle corrispondenti versioni nelle altre lingue tramite i pulsanti dell'header superiore:
- FR ⇄ ../FR/nome_file.html
- EN ⇄ ../EN/nome_file.html
- DE ⇄ ../DE/nome_file.html