const activities=[
  {
    "id": 1,
    "title": "Préparer des cookies maison",
    "cat": "Cuisine",
    "group": "cuisine",
    "time": "30 min",
    "difficulty": "Facile",
    "cost": "Faible",
    "desc": "Une activité gourmande, simple et amusante à faire à la maison.",
    "ingredients": [
      "200 g de farine",
      "100 g de beurre",
      "100 g de sucre",
      "1 œuf",
      "100 g de pépites de chocolat"
    ],
    "steps": [
      "Préchauffe le four à 180 °C.",
      "Mélange beurre mou et sucre.",
      "Ajoute l’œuf puis la farine.",
      "Ajoute les pépites et forme des boules.",
      "Fais cuire 10 à 12 minutes."
    ]
  },
  {
    "id": 2,
    "title": "Faire une pizza maison",
    "cat": "Cuisine",
    "group": "cuisine",
    "time": "45 min",
    "difficulty": "Facile",
    "cost": "Moyen",
    "desc": "Prépare une pizza personnalisée avec les ingrédients que tu aimes.",
    "ingredients": [
      "1 pâte à pizza",
      "150 g de sauce tomate",
      "150 g de mozzarella",
      "Garniture au choix"
    ],
    "steps": [
      "Préchauffe le four à 220 °C.",
      "Étale la pâte.",
      "Ajoute sauce, fromage et garniture.",
      "Enfourne 12 à 15 minutes.",
      "Déguste bien chaude."
    ]
  },
  {
    "id": 3,
    "title": "Faire des crêpes",
    "cat": "Cuisine",
    "group": "cuisine",
    "time": "25 min",
    "difficulty": "Facile",
    "cost": "Faible",
    "desc": "Une valeur sûre pour une activité rapide et gourmande.",
    "ingredients": [
      "250 g de farine",
      "3 œufs",
      "500 ml de lait",
      "1 pincée de sel",
      "1 sachet de sucre vanillé"
    ],
    "steps": [
      "Mélange farine, sel et sucre.",
      "Ajoute les œufs.",
      "Verse progressivement le lait.",
      "Laisse reposer 20 minutes si possible.",
      "Fais cuire les crêpes dans une poêle chaude."
    ]
  },
  {
    "id": 4,
    "title": "Faire une randonnée",
    "cat": "Extérieur",
    "group": "plein_air",
    "time": "2 h",
    "difficulty": "Facile",
    "cost": "Gratuit",
    "desc": "Pars marcher et découvre un nouvel endroit près de chez toi.",
    "ingredients": [],
    "steps": [
      "Choisis un parcours adapté.",
      "Prends de l’eau et des chaussures confortables.",
      "Pars tranquillement.",
      "Fais une pause à mi-chemin.",
      "Profite du paysage."
    ]
  },
  {
    "id": 5,
    "title": "Faire du vélo",
    "cat": "Sport",
    "group": "sport",
    "time": "1 h",
    "difficulty": "Facile",
    "cost": "Gratuit",
    "desc": "Une balade à vélo pour prendre l’air et bouger.",
    "ingredients": [],
    "steps": [
      "Vérifie les pneus et les freins.",
      "Prends de l’eau.",
      "Choisis un itinéraire sûr.",
      "Pars à ton rythme.",
      "Termine par quelques étirements."
    ]
  },
  {
    "id": 6,
    "title": "Faire une séance de sport",
    "cat": "Sport",
    "group": "sport",
    "time": "20 min",
    "difficulty": "Moyen",
    "cost": "Gratuit",
    "desc": "Une petite séance sans matériel pour se défouler.",
    "ingredients": [],
    "steps": [
      "Échauffe-toi 3 minutes.",
      "Fais 3 séries de squats.",
      "Ajoute des fentes et des pompes adaptées.",
      "Termine par 3 minutes de gainage.",
      "Étire-toi doucement."
    ]
  },
  {
    "id": 7,
    "title": "Faire un puzzle",
    "cat": "À la maison",
    "group": "maison",
    "time": "30 min",
    "difficulty": "Facile",
    "cost": "Faible",
    "desc": "Installe-toi tranquillement et attaque un puzzle.",
    "ingredients": [],
    "steps": [
      "Choisis un puzzle.",
      "Trie les pièces par couleur.",
      "Commence par les bords.",
      "Construis les zones principales.",
      "Termine les détails."
    ]
  },
  {
    "id": 8,
    "title": "Regarder un film",
    "cat": "À la maison",
    "group": "maison",
    "time": "2 h",
    "difficulty": "Facile",
    "cost": "Faible",
    "desc": "Choisis un film que tu n'as jamais vu et prépare une soirée cinéma.",
    "ingredients": [],
    "steps": [
      "Choisis un film.",
      "Prépare une boisson et un snack.",
      "Baisse la lumière.",
      "Installe-toi confortablement.",
      "Profite du film."
    ]
  },
  {
    "id": 9,
    "title": "Construire quelque chose",
    "cat": "Créativité",
    "group": "creatif",
    "time": "1 h",
    "difficulty": "Moyen",
    "cost": "Faible",
    "desc": "Utilise ce que tu as déjà à la maison pour fabriquer un objet.",
    "ingredients": [],
    "steps": [
      "Choisis un objet à fabriquer.",
      "Rassemble les matériaux disponibles.",
      "Fais un petit croquis.",
      "Construis étape par étape.",
      "Teste et améliore ton idée."
    ]
  },
  {
    "id": 10,
    "title": "Dessiner sans modèle",
    "cat": "Créativité",
    "group": "creatif",
    "time": "30 min",
    "difficulty": "Facile",
    "cost": "Faible",
    "desc": "Laisse parler ton imagination pendant 30 minutes.",
    "ingredients": [],
    "steps": [
      "Prends une feuille.",
      "Choisis trois formes au hasard.",
      "Transforme-les en dessin.",
      "Ajoute des détails.",
      "Donne un titre à ton œuvre."
    ]
  },
  {
    "id": 11,
    "title": "Préparer un smoothie",
    "cat": "Cuisine",
    "group": "cuisine",
    "time": "10 min",
    "difficulty": "Facile",
    "cost": "Faible",
    "desc": "Une boisson fruitée rapide à préparer.",
    "ingredients": [
      "1 banane",
      "1 pomme",
      "1 kiwi",
      "200 ml de lait ou jus"
    ],
    "steps": [
      "Épluche les fruits.",
      "Coupe-les en morceaux.",
      "Mets tout dans le blender.",
      "Mixe jusqu'à obtenir une texture lisse.",
      "Sers immédiatement."
    ]
  },
  {
    "id": 12,
    "title": "Organiser une soirée jeux",
    "cat": "À la maison",
    "group": "maison",
    "time": "1 h",
    "difficulty": "Facile",
    "cost": "Gratuit",
    "desc": "Sors un jeu de société ou invente un petit défi.",
    "ingredients": [],
    "steps": [
      "Choisis un jeu.",
      "Prépare les règles.",
      "Fixe une durée de partie.",
      "Lance la partie.",
      "Change de jeu si tout le monde veut continuer."
    ]
  }
];
const imgMap={cuisine:'assets/cuisine.svg',sport:'assets/sport.svg',maison:'assets/maison.svg',plein_air:'assets/plein_air.svg',creatif:'assets/creatif.svg'};
const $=s=>document.querySelector(s); const cards=$('#cards');
let currentFilter='Toutes', favorites=JSON.parse(localStorage.getItem('fav')||'[]'), spinning=false;

function renderCards(){
 const list=activities.filter(a=>currentFilter==='Toutes'||a.cat===currentFilter);
 cards.innerHTML=list.map(a=>`<article class="card" data-id="${a.id}"><img src="${imgMap[a.group]}"><div class="cardbody"><div class="tag">${a.cat}</div><h3>${a.title}</h3><div class="meta">⏱ ${a.time} · ${a.difficulty} · ${a.cost}</div></div></article>`).join('');
 cards.querySelectorAll('.card').forEach(c=>c.onclick=()=>showDetail(+c.dataset.id));
}
function show(id){$('#home').classList.add('hidden');$('#roulette').classList.add('hidden');$('#detail').classList.add('hidden');$(id).classList.remove('hidden');}
function showDetail(id){
 const a=activities.find(x=>x.id===id); if(!a)return;
 const fav=favorites.includes(id);
 $('#detailContent').innerHTML=`<div class="detail"><button class="fav" id="fav">${fav?'❤️':'♡'}</button><img class="detailHero" src="${imgMap[a.group]}"><div class="tag">${a.cat}</div><h1>${a.title}</h1><p>${a.desc}</p><div class="chips"><span class="chip">⏱ ${a.time}</span><span class="chip">🎯 ${a.difficulty}</span><span class="chip">💶 ${a.cost}</span></div>${a.ingredients.length?`<div class="sectionbox"><h3>🛒 Ingrédients</h3><ul>${a.ingredients.map(x=>`<li>${x}</li>`).join('')}</ul></div>`:''}<div class="sectionbox"><h3>${a.ingredients.length?'👨‍🍳 Recette / déroulement':'👉 Comment faire'}</h3><ol>${a.steps.map(x=>`<li>${x}</li>`).join('')}</ol></div><button class="primary big" id="again">🎰 Une autre idée</button></div>`;
 $('#fav').onclick=()=>{favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem('fav',JSON.stringify(favorites));showDetail(id)};
 $('#again').onclick=()=>{buildRoulette();show('#roulette');startSpin()};
 show('#detail');
}
function buildRoulette(){
 const track=$('#rouletteTrack'); track.innerHTML='';
 const seq=Array.from({length:32},()=>activities[Math.floor(Math.random()*activities.length)]);
 seq.forEach(a=>{const d=document.createElement('div');d.className='rCard';d.innerHTML=`<img src="${imgMap[a.group]}"><div><strong>${a.title}</strong><small>${a.cat} · ${a.time}</small></div>`;track.appendChild(d)});
}
function startSpin(){
 if(spinning)return; spinning=true; $('#spin').disabled=true; $('#rouletteHint').textContent='La roulette tourne…';
 buildRoulette();
 const track=$('#rouletteTrack'), cards=track.children, targetIndex=20;
 const cardH=104, offset=targetIndex*cardH;
 track.animate([{transform:'translateY(0)'},{transform:`translateY(-${offset}px)`}],{duration:3800,easing:'cubic-bezier(.08,.75,.15,1)',fill:'forwards'}).finished.then(()=>{
   const chosen=activities.find(a=>a.title===cards[targetIndex].querySelector('strong').textContent)||activities[0];
   $('#rouletteHint').textContent='🎉 Voilà ton idée !';
   spinning=false;$('#spin').disabled=false;
   setTimeout(()=>showDetail(chosen.id),450);
 });
}
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentFilter=b.dataset.filter;renderCards()});
$('#spinHero').onclick=()=>{buildRoulette();show('#roulette');startSpin()};
$('#randomTop').onclick=()=>{buildRoulette();show('#roulette');startSpin()};
$('#spin').onclick=startSpin;
document.querySelectorAll('.back').forEach(b=>b.onclick=()=>show('#home'));
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(b.dataset.nav==='roulette'){buildRoulette();show('#roulette')}else if(b.dataset.nav==='favorites'){currentFilter='Toutes';show('#home');cards.innerHTML=activities.filter(a=>favorites.includes(a.id)).map(a=>`<article class="card" data-id="${a.id}"><img src="${imgMap[a.group]}"><div class="cardbody"><div class="tag">${a.cat}</div><h3>${a.title}</h3><div class="meta">⏱ ${a.time}</div></div></article>`).join('');cards.querySelectorAll('.card').forEach(c=>c.onclick=()=>showDetail(+c.dataset.id))}else{renderCards();show('#home')}document.querySelectorAll('nav button').forEach(x=>x.classList.remove('navactive'));b.classList.add('navactive')});
renderCards();

if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js').catch(()=>{});}
