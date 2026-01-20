const cards = [
  {group:1,id:'1.a',front:'1.a. Prima categorie de evrei care ajung în Țările Române: numele categoriei și din ce țară vine?',back:'Evreii sefarzi, veniți din Imperiul Otoman (dinspre sud).'},
  {group:1,id:'1.b',front:'1.b. A doua categorie de evrei care ajung în Țările Române: numele și din ce țară vine?',back:'Evreii așkenazi, veniți din Polonia, Rusia și Ucraina (dinspre est și nord-est).'},
  {group:1,id:'1.c',front:'1.c. Cine e principele care acordă primul privilegii evreilor în Transilvania și în ce secol?',back:'Principele Gabriel Bethlen, în secolul al XVII‑lea (1623).'},
  {group:1,id:'1.d',front:'1.d. Cum se numesc la români legile tradiționale de inspirație bizantină?',back:'Legile tradiționale se numeau „pravile”.'},
  {group:1,id:'1.e',front:'1.e. Ce condiții prevedea pravila?',back:'Interzicerea achiziționării de pământ agricol; taxe mai mari decât pentru români; lipsa drepturilor civile; diverse restricții juridice și sociale.'},

  {group:2,id:'2.a',front:'2.a. Cum se numeau organizațiile profesionale și sociale ale comunităților evreiești?',back:'Bresle.'},
  {group:2,id:'2.b',front:'2.b. Cum se numeau satele evreiești în Europa de Est?',back:'Shtetl.'},
  {group:2,id:'2.c',front:'2.c. Cum se numeau cei doi lideri ai comunităților evreiești?',back:'Hahám‑báșa și starostele.'},
  {group:2,id:'2.d',front:'2.d. Cu ce prilej apar idei de emancipare a evreilor în Țările Române?',back:'Ideile de emancipare apar în timpul Revoluției de la 1848 (pașoptiste).'},
  {group:2,id:'2.e',front:'2.e. Cum au fost numiți în timpul lui Al. I. Cuza și ce a făcut acesta?',back:'Au fost numiți „români de cult mozaic”; Cuza a încercat să le acorde drepturi civile (Codul Civil – art. 9 și 16).'},
  {group:2,id:'2.f',front:'2.f. Ce document, din ce an și ce articol reducea drepturile evreilor în România în sec. XIX? În Transilvania, în ce an sunt emancipați evreii?',back:'Constituția din 1866, articolul 7, condiționa cetățenia de religia creștină. În Transilvania, evreii sunt emancipați în 1867.'},

  {group:3,id:'3.a',front:'3.a. Ce au făcut evreii în Războiul de Independență al României?',back:'Au participat ca soldați, medici, voluntari și au sprijinit financiar statul român.'},
  {group:3,id:'3.b',front:'3.b. Ce tratat (an) a recunoscut drepturile evreilor?',back:'Tratatul de la Berlin, 1878.'},
  {group:3,id:'3.c',front:'3.c. Cum era varianta de compromis la care s‑a ajuns în România?',back:'Compromisul a fost naturalizarea individuală, prin lege specială.'},
  {group:3,id:'3.d',front:'3.d. Ce excepție exista?',back:'Excepția: cei 883 de soldați evrei din Războiul de Independență au primit cetățenia în bloc.'},
  {group:3,id:'3.e',front:'3.e. S‑a rezolvat astfel emanciparea evreilor? (a răspuns așteptărilor lor?)',back:'Nu, nu a răspuns așteptărilor evreilor.'},
  {group:3,id:'3.f',front:'3.f. Ce au făcut mulți evrei în acest caz?',back:'Mulți evrei au emigrat spre Europa Occidentală, SUA, Palestina.'},

  {group:4,id:'4.a',front:'4.a. Ce organizație a apărut pentru drepturile evreilor și cine o conducea?',back:'Uniunea Evreilor Pământeni (UEP), condusă de Adolphe Stern.'},
  {group:4,id:'4.b',front:'4.b. Ce lege a fost în 1919 și ce stabilea?',back:'Decretul‑lege din mai 1919, care stabilea acordarea cetățeniei evreilor.'},
  {group:4,id:'4.c',front:'4.c. Ce act fundamental, din ce an, a finalizat emanciparea evreilor?',back:'Constituția din 1923.'},

  {group:5,id:'5.a',front:'5.a. Ce domeniu nou au introdus evreii în economia românească și cum se numea firma?',back:'Domeniu nou: publicitatea – Agenția de Publicitate D. Adania (1880).'},
  {group:5,id:'5.b',front:'5.b. Primele două bănci create de evrei în România?',back:'Banca Marmorosch‑Blank și Banca Moldova.'},
  {group:5,id:'5.c',front:'5.c. Dați exemple de 3 tipuri de fabrici/ramuri ale industriei și comerțului pe care le inaugurează evreii în România.',back:'Industria textilă; industria zahărului; industria apelor gazoase.'},
  {group:5,id:'5.d',front:'5.d. Cum se numește întreprinderea de la Reșița și cui îi aparține?',back:'Uzinele de fier și domeniile Reșița (U.D.R.), aparțineau lui Max Auschnit.'},
  {group:5,id:'5.e',front:'5.e. Cum se numește fabrica de la Arad, ce produce și cine e conducătorul?',back:'Astra Arad – fabrica de vagoane și motoare, condusă de Aristide Blank.'},

  {group:6,id:'6.a',front:'6.a. Alte 2 organizații/asociații ale evreilor după Primul Război Mondial?',back:'Uniunea Evreilor Români (1923); Federația Comunităților Evreiești din România.'},
  {group:6,id:'6.b',front:'6.b. Un reprezentant al evreilor în: matematică, medicină, artă, muzică, literatură, științe juridice, teatru, religie?',back:'Matematică: Solomon Marcus; Medicină: Nicolae Cajal; Artă: Victor Brauner; Muzică: Clara Haskil; Literatură: Mihail Sebastian; Științe juridice: Wilhelm Filderman; Teatru: Maia Morgenstern; Religie: Alexandru Șafran.'},

  {group:7,id:'7.a',front:'7.a. În ce an, ce ministru de interne și ce măsură s‑a luat împotriva evreilor în Moldova?',back:'1869, ministru de interne Mihail Kogălniceanu: expulzarea evreilor din satele Moldovei.'},
  {group:7,id:'7.b',front:'7.b. Dati exemple de 3 scriitori români care s‑au pronunțat depreciativ despre evrei în perioada antebelică?',back:'Vasile Alecsandri; B. P. Hașdeu; Mihai Eminescu.'},
  {group:7,id:'7.c',front:'7.c. Care trei calități negative le sublinia un scriitor?',back:'Dorința de câștig fără muncă; lipsa demnității; ostilitatea față de alte popoare.'},
  {group:7,id:'7.d',front:'7.d. Ce consecință a avut pentru mulți evrei?',back:'Emigrarea masivă a evreilor.'},

  {group:8,id:'8.a',front:'8.a. Cine s‑a remarcat în decembrie 1916, ce a făcut, ce a pățit și cum a fost apreciat mai târziu?',back:'Hermann Kornhauser – a ajutat prizonieri români, a fost executat de germani, decorat post‑mortem.'},
  {group:8,id:'8.b',front:'8.b. Ce a luat ființă în timpul Primului Război Mondial, ce scop avea și cu ce instituții conlucră?',back:'Comitetul de ajutorare al Uniunii Evreilor Pământeni – ajutor material pentru război; colabora cu Crucea Roșie.'},
  {group:8,id:'8.c',front:'8.c. Ce au pus evreii la dispoziție în Primul Război Mondial?',back:'Sinagogi, școli, spitale, bunuri materiale.'},
  {group:8,id:'8.d',front:'8.d. Ce statut aveau evreii din punct de vedere al cetățeniei în timpul Primului Război Mondial?',back:'Nu aveau cetățenie română în timpul Primului Război Mondial.'},

  {group:9,id:'9.a',front:'9.a. Ce își doreau evreii, candidați în Parlament, între elementul român și cel evreiesc?',back:'Își doreau coexistență și echilibru între români și evrei.'},
  {group:9,id:'9.b',front:'9.b. Recensământul din 1930: numărul și procentul evreilor în România Mare?',back:'756.930 evrei, 4,2% din populație.'},
  {group:9,id:'9.c',front:'9.c. Cele două documente (ani) care garantau drepturile evreilor în România interbelică?',back:'Tratatul Minorităților (1919) și Constituția din 1923.'},
  {group:9,id:'9.d',front:'9.d. Cine a fost lider necontestat al evreilor și cum se numea organizația?',back:'Wilhelm Filderman, lider al Uniunii Evreilor Români.'},

  {group:10,id:'10.a',front:'10.a. Cum se numește dorința evreilor de migrare în Palestina pentru a crea Statul Israel?',back:'Sionismul.'},
  {group:10,id:'10.b',front:'10.b. Organizația și liderul ei care susțineau această dorință?',back:'Partidul Național Evreiesc, condus de Avram Zissu.'},
  {group:10,id:'10.c',front:'10.c. Cu care partide au avut evreii acorduri politice?',back:'Acorduri cu PNL și PNȚ.'},
  {group:10,id:'10.d',front:'10.d. Cum se numeau cele două tabere ale evreilor din România și când s‑au unit; cine le-a condus?',back:'Unioniștii și sioniștii, uniți în 1936, conduși de Wilhelm Filderman.'},
  {group:10,id:'10.e',front:'10.e. Care e structura care a cuprins toate organizațiile evreiești din România din 1949 până azi?',back:'Federația Comunităților Evreiești din România.'},

  {group:11,id:'11.a',front:'11.a. Ce era antisemitismul în perioada interbelică și pentru care categorii era pasiune?',back:'Antisemitismul era o pasiune politică și socială, susținută de politicieni, cler și intelectuali.'},
  {group:11,id:'11.b',front:'11.b. Ce se spunea despre evreii din Basarabia?',back:'În Basarabia erau acuzați de iudeo‑bolșevism.'},
  {group:11,id:'11.c',front:'11.c. Ce se spunea despre evreii din Transilvania?',back:'În Transilvania erau considerați iredentiști.'},
  {group:11,id:'11.d',front:'11.d. Care categorii erau în general în organizațiile de extrema dreapta?',back:'Studenți, profesori, preoți, funcționari, populație săracă.'},
  {group:11,id:'11.e',front:'11.e. Cum se numea prima organizație antisemită și cine o conducea?',back:'Liga Apărării Național Creștine (LANC), condusă de A. C. Cuza.'},
  {group:11,id:'11.f',front:'11.f. Ce legi au fost adoptate în anii 1924–1925 care reduc drepturile unor evrei?',back:'Legea Mârzescu (1924) și Legea Angelescu (1925).'},

  {group:12,id:'12.a',front:'12.a. A doua organizație antisemita de extrema dreapta, cine era liderul și cum era supranumit?',back:'Legiunea Arhanghelul Mihail, lider Corneliu Zelea Codreanu („Căpitanul”).'},
  {group:12,id:'12.b',front:'12.b. Doi intelectuali români atrași de ideile acestei organizații?',back:'Nae Ionescu și Nichifor Crainic.'},
  {group:12,id:'12.c',front:'12.c. Două ziare ale acestei organizații?',back:'„Cuvântul” și „Buna Vestire”.'},
  {group:12,id:'12.d',front:'12.d. Ce își propunea organizația?',back:'Eliminarea influenței evreilor din viața economică și politică.'},
  {group:12,id:'12.e',front:'12.e. Sub ce nume a reapărut organizația după desființare?',back:'Garda de Fier și Totul pentru Țară.'},

  {group:13,id:'13.a',front:'13.a. A treia organizație antisemită apărută prin fuziune și cine o conducea activ?',back:'Partidul Național Creștin, condus activ de Octavian Goga.'},
  {group:13,id:'13.b',front:'13.b. Pentru ce idee milita această organizație?',back:'Milita pentru numerus clausus și revizuirea cetățeniei evreilor.'},
  {group:13,id:'13.c',front:'13.c. Ce politică a reușit să impună acest partid?',back:'A impus antisemitismul de stat.'},

  {group:14,id:'14.a',front:'14.a. Împotriva cui era Corneliu Zelea Codreanu?',back:'Codreanu era împotriva evreilor.'},
  {group:14,id:'14.b',front:'14.b. Ce susținea în schimb?',back:'Susținea naționalismul radical.'},
  {group:14,id:'14.c',front:'14.c. Contra cui mai spunea el că este?',back:'Era contra democrațiilor occidentale, bolșevismului și Societății Națiunilor.'},
  {group:14,id:'14.d',front:'14.d. Cu ce mijloace dorea să lupte împotriva evreilor?',back:'Prin lege, discurs politic și violență.'},
  {group:14,id:'14.e',front:'14.e. Cum i‑au tratat evreii pe studenții români legionari la Oradea?',back:'Evreii i‑au găzduit pe studenții legionari la Oradea.'},
  {group:14,id:'14.f',front:'14.f. Cum s‑au comportat studenții români (ce au făcut evreilor)?',back:'Studenții au devastat prăvălii, case și sinagogi; au jefuit și profanat lăcașuri religioase.'}
];

let filtered = [...cards];
let index = 0;

const cardArea = document.getElementById('cardArea');
const groupFilter = document.getElementById('groupFilter');
const searchInput = document.getElementById('search');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const flipBtn = document.getElementById('flip');
const shuffleBtn = document.getElementById('shuffle');
const themeToggle = document.getElementById('themeToggle');

function applyTheme(t){
  if(t==='dark'){
    document.documentElement.setAttribute('data-theme','dark');
    themeToggle.textContent = '☀️ Light';
    themeToggle.setAttribute('aria-pressed','true');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙 Dark';
    themeToggle.setAttribute('aria-pressed','false');
  }
  try{ localStorage.setItem('flashcards-theme', t); }catch(e){}
}

// init theme from localStorage or prefers-color-scheme
const savedTheme = (()=>{ try{return localStorage.getItem('flashcards-theme')}catch(e){return null}})();
if(savedTheme) applyTheme(savedTheme);
else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');

if(themeToggle) themeToggle.addEventListener('click',()=>{
  const cur = document.documentElement.getAttribute('data-theme')==='dark' ? 'dark' : 'light';
  applyTheme(cur==='dark' ? 'light' : 'dark');
});

function uniqueGroups(){
  const g = Array.from(new Set(cards.map(c=>c.group))).sort((a,b)=>a-b);
  g.forEach(n=>{
    const o = document.createElement('option'); o.value = n; o.textContent = 'Grup '+n; groupFilter.appendChild(o);
  });
}

function render(){
  if(filtered.length===0){ cardArea.innerHTML='<p>Niciun card găsit.</p>'; return; }
  const c = filtered[index%filtered.length];
  cardArea.innerHTML = `
    <article class="card" tabindex="0">
      <div class="card-inner">
        <section class="card-face front">
          <div class="meta">Grup ${c.group} • ${c.id}</div>
          <h2>${escapeHtml(c.front)}</h2>
          <p>Apasă &quot;Răstoarnă&quot; sau atinge cardul pentru detaliu.</p>
        </section>
        <section class="card-face back">
          <div class="meta">Grup ${c.group} • ${c.id}</div>
          <h2>Detaliu</h2>
          <p>${escapeHtml(c.back)}</p>
        </section>
      </div>
    </article>`;

  const cardEl = cardArea.querySelector('.card');
  cardEl.addEventListener('click',()=>cardEl.classList.toggle('flipped'));
}

function escapeHtml(s){ return (s+'').replace(/[&<>]/g,ch=>({ '&':'&amp;','<':'&lt;','>':'&gt;' }[ch])); }

function applyFilters(){
  const grp = groupFilter.value;
  const q = searchInput.value.trim().toLowerCase();
  filtered = cards.filter(c=>{
    if(grp!=='all' && String(c.group)!==grp) return false;
    if(q==='') return true;
    return (c.front+" "+c.back).toLowerCase().includes(q);
  });
  index = 0; render();
}

prevBtn.addEventListener('click',()=>{ if(filtered.length===0) return; index=(index-1+filtered.length)%filtered.length; render(); });
nextBtn.addEventListener('click',()=>{ if(filtered.length===0) return; index=(index+1)%filtered.length; render(); });
flipBtn.addEventListener('click',()=>{ const el = cardArea.querySelector('.card'); if(el) el.classList.toggle('flipped'); });
shuffleBtn.addEventListener('click',()=>{ shuffle(filtered); index=0; render(); });
groupFilter.addEventListener('change',applyFilters);
searchInput.addEventListener('input',applyFilters);

function shuffle(a){
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
}

uniqueGroups(); render();

