const items=[
['Faire des pancakes','Cuisine','pancakes','15 min','Facile'],['Faire un puzzle','Jeux','puzzle','30 min','Facile'],['Regarder un film','Culture','film','2 h','Facile'],['Faire une balade','Extérieur','balade','45 min','Facile'],['Préparer des cookies','Cuisine','cookies','30 min','Facile'],['Faire un dessin','Créativité','dessin','20 min','Facile'],['Faire du sport','Sport & Bien-être','sport','20 min','Moyen'],['Lire un livre','Culture','livre','30 min','Facile'],['Faire un bricolage','Créativité','bricolage','45 min','Moyen'],['Jouer à un jeu de société','Jeux','jeu','1 h','Facile'],['Cuisiner une pizza','Cuisine','pizza','45 min','Facile'],['Faire du yoga','Sport & Bien-être','yoga','20 min','Facile']];
const cats=[['Jeux','🎮','Joue et amuse-toi','blue'],['Défis','💡','Teste tes limites','green'],['Cuisine','👨‍🍳','Régale-toi','orange'],['Créativité','🎨','Laisse parler ton imagination','purple'],['Sport & Bien-être','🏋️','Prends soin de toi','pink'],['Culture','📚','Apprends et découvre','cyan']];
const colors={Cuisine:'orange',Jeux:'blue',Culture:'cyan','Extérieur':'green',Créativité:'purple','Sport & Bien-être':'pink'};
const track=document.querySelector('#track'), result=document.querySelector('#result');
function img(x,cls=''){return `<img class="activity-img ${cls}" src="images/${x[2]}.svg" alt="${x[0]}">`}
function card(x,small=false){return `<article class="r-card ${small?'small':''} ${colors[x[1]]||''}">${img(x)}<div><b>${x[0]}</b><small>${x[1]} · ${x[3]}</small></div></article>`}
function buildTrack(){let arr=[];for(let i=0;i<7;i++)arr.push(...items);track.innerHTML=arr.map(x=>card(x)).join('')}
buildTrack();
const categories=document.querySelector('#categories');categories.innerHTML=cats.map(c=>`<button class="cat ${c[3]}"><span>${c[1]}</span><div><b>${c[0]}</b><small>${c[2]}</small></div><i>›</i></button>`).join('');
const ideas=document.querySelector('#ideas');
function renderIdeas(list){ideas.innerHTML=list.map(x=>`<article class="idea">${img(x,'idea-img')}<div><b>${x[0]}</b><small>${x[1]} · ${x[3]} · ${x[4]}</small></div><span>›</span></article>`).join('')||'<p class="empty">Aucune idée trouvée 😕</p>'}
renderIdeas(items.slice(0,6));
let spinning=false;
function spin(){if(spinning)return;spinning=true;result.classList.add('hidden');const winner=items[Math.floor(Math.random()*items.length)];const index=items.indexOf(winner)+items.length*4+Math.floor(Math.random()*3);const cardH=96;track.style.transition='none';track.style.transform='translateY(0)';requestAnimationFrame(()=>requestAnimationFrame(()=>{track.style.transition='transform 4.6s cubic-bezier(.12,.78,.12,1)';track.style.transform=`translateY(${-index*cardH+140}px)`;}));setTimeout(()=>{result.innerHTML=`${img(winner,'winner-img')}<div><small>🎯 C’est parti !</small><h3>${winner[0]}</h3><p>${winner[1]} · ${winner[3]} · ${winner[4]}</p></div><button onclick="spin()">🔄</button>`;result.classList.remove('hidden');spinning=false},4800)}
document.querySelector('#spin').onclick=spin;document.querySelector('#surprise').onclick=spin;
document.querySelector('#search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();renderIdeas(items.filter(x=>x.join(' ').toLowerCase().includes(q)))})
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
