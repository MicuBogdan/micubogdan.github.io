const cards = [
  {group:1,id:'1.a',front:'Prima categorie',back:'Evreii sefarzi, veniți din Imperiul Otoman (dinspre sud).'},
  {group:1,id:'1.b',front:'A doua categorie',back:'Evreii așkenazi, veniți din Polonia, Rusia și Ucraina (dinspre est și nord-est).'},
  {group:1,id:'1.c',front:'Gabriel Bethlen (1623)',back:'Principele Gabriel Bethlen, în secolul al XVII-lea (1623).'},
  {group:1,id:'1.d',front:'Legile tradiționale',back:'Legile tradiționale se numeau pravile.'},
  {group:1,id:'1.e',front:'Ce prevedea pravila',back:'interzicerea achiziționării de pământ agricol; taxe mai mari decât pentru români; lipsa drepturilor civile; diverse restricții juridice și sociale.'},

  {group:2,id:'2.a',front:'Organizații profesionale',back:'Bresle (organizațiile profesionale și sociale).'},
  {group:2,id:'2.b',front:'Satele evreiești',back:'Shtetl (satele evreiești din Europa de Est).'},
  {group:2,id:'2.c',front:'Lideri locali',back:'Cei doi lideri: hahám-báșa și starostele.'},
  {group:2,id:'2.d',front:'Emancipare 1848',back:'Ideile de emancipare apar în timpul Revoluției de la 1848 (pașoptiste).'},
  {group:2,id:'2.e',front:'Alexandru Ioan Cuza',back:'În timpul lui Al. I. Cuza au fost numiți „români de cult mozaic"; Cuza a încercat să le acorde drepturi civile (Codul Civil – art. 9 și 16).'},
  {group:2,id:'2.f',front:'Constituția 1866',back:'Constituția din 1866, articolul 7, condiționa cetățenia de religia creștină. În Transilvania, evreii sunt emancipați în 1867.'},

  {group:3,id:'3.a',front:'Participare la Războiul de Independență',back:'Au participat ca soldați, medici, voluntari și au sprijinit financiar statul român.'},
  {group:3,id:'3.b',front:'Tratatul de la Berlin 1878',back:'Tratatul de la Berlin, 1878.'},
  {group:3,id:'3.c',front:'Compromis naturalizare',back:'Compromisul: naturalizarea individuală, prin lege specială.'},
  {group:3,id:'3.d',front:'Excepție 883 soldați',back:'Cei 883 de soldați evrei din Războiul de Independență au primit cetățenia în bloc.'},
  {group:3,id:'3.e',front:'Răspunsul statului',back:'Nu, nu a răspuns așteptărilor evreilor.'},
  {group:3,id:'3.f',front:'Emigrarea',back:'Mulți evrei au emigrat spre Europa Occidentală, SUA, Palestina.'},

  {group:4,id:'4.a',front:'UEP',back:'Uniunea Evreilor Pământeni (UEP), condusă de Adolphe Stern.'},
  {group:4,id:'4.b',front:'Decretul-lege 1919',back:'Decretul-lege din mai 1919, care stabilea acordarea cetățeniei evreilor.'},
  {group:4,id:'4.c',front:'Constituția 1923',back:'Constituția din 1923.'},

  {group:5,id:'5.a',front:'Publicitate',back:'Domeniu nou: publicitatea – Agenția de Publicitate D. Adania (1880).'},
  {group:5,id:'5.b',front:'Bănci',back:'Banca Marmorosch-Blank și Banca Moldova.'},
  {group:5,id:'5.c',front:'Industrii',back:'ex: industria textilă; industria zahărului; industria apelor gazoase.'},
  {group:5,id:'5.d',front:'Reșița',back:'Uzinele de fier și domeniile Reșița (U.D.R.), aparțineau lui Max Auschnit.'},
  {group:5,id:'5.e',front:'Astra Arad',back:'Astra Arad – fabrica de vagoane și motoare, condusă de Aristide Blank.'},

  {group:6,id:'6.a',front:'Organizații interbelice',back:'Uniunea Evreilor Români (1923); Federația Comunităților Evreiești din România.'},
  {group:6,id:'6.b',front:'Reprezentanți importanți',back:'Matematică: Solomon Marcus; Medicină: Nicolae Cajal; Artă: Victor Brauner; Muzică: Clara Haskil; Literatură: Mihail Sebastian; Științe juridice: Wilhelm Filderman; Teatru: Maia Morgenstern; Religie: Alexandru Șafran.'},

  {group:7,id:'7.a',front:'1869 — expulzări',back:'1869, ministru de interne Mihail Kogălniceanu, expulzarea evreilor din satele Moldovei.'},
  {group:7,id:'7.b',front:'Scriitori cu atitudini',back:'Vasile Alecsandri, B.P. Hașdeu, Mihai Eminescu.'},
  {group:7,id:'7.c',front:'Stereotipuri negative',back:'dorința de câștig fără muncă; lipsa demnității; ostilitatea față de alte popoare.'},
  {group:7,id:'7.d',front:'Consecință',back:'Emigrarea masivă a evreilor.'},

  {group:8,id:'8.a',front:'Hermann Kornhauser',back:'A ajutat prizonieri români, a fost executat de germani, decorat post-mortem.'},
  {group:8,id:'8.b',front:'Comitet ajutorare',back:'Comitetul de ajutorare al Uniunii Evreilor Pământeni – ajutor material pentru război; colabora cu Crucea Roșie.'},
  {group:8,id:'8.c',front:'Resurse oferite',back:'Au pus la dispoziție sinagogi, școli, spitale, bunuri materiale.'},
  {group:8,id:'8.d',front:'Cetățenie în WWI',back:'Nu aveau cetățenie română în timpul Primului Război Mondial.'},

  {group:9,id:'9.a',front:'Obiectiv comunitar',back:'Își doreau coexistență și echilibru între români și evrei.'},
  {group:9,id:'9.b',front:'Număr populație',back:'756.930 evrei, 4,2% din populație.'},
  {group:9,id:'9.c',front:'Legislație postbelică',back:'Tratatul Minorităților (1919); Constituția din 1923.'},
  {group:9,id:'9.d',front:'Lider',back:'Wilhelm Filderman, lider al Uniunii Evreilor Români.'},

  {group:10,id:'10.a',front:'Mișcări politice',back:'Sionismul.'},
  {group:10,id:'10.b',front:'Partid Național Evreiesc',back:'Condus de Avram Zissu.'},
  {group:10,id:'10.c',front:'Acorduri politice',back:'Acorduri cu PNL și PNȚ.'},
  {group:10,id:'10.d',front:'Uniune 1936',back:'Unioniștii și sioniștii, uniți în 1936, conduși de Wilhelm Filderman.'},
  {group:10,id:'10.e',front:'Federația',back:'Federația Comunităților Evreiești din România (din 1949 până azi).'},

  {group:11,id:'11.a',front:'Antisemitism general',back:'Antisemitismul era o pasiune politică și socială, susținută de politicieni, cler și intelectuali.'},
  {group:11,id:'11.b',front:'Basarabia',back:'În Basarabia: evreii erau acuzați de iudeo-bolșevism.'},
  {group:11,id:'11.c',front:'Transilvania',back:'În Transilvania: erau considerați iredentiști.'},
  {group:11,id:'11.d',front:'Susținători ai urii',back:'Membri: studenți, profesori, preoți, funcționari, populație săracă.'},
  {group:11,id:'11.e',front:'LANC',back:'Liga Apărării Național Creștine (LANC), condusă de A. C. Cuza.'},
  {group:11,id:'11.f',front:'Legi interbelice',back:'Legea Mârzescu (1924); Legea Angelescu (1925).'},

  {group:12,id:'12.a',front:'Legiunea',back:'Legiunea Arhanghelul Mihail, lider Corneliu Zelea Codreanu („Căpitanul”).'},
  {group:12,id:'12.b',front:'Ideologi',back:'Nae Ionescu, Nichifor Crainic.'},
  {group:12,id:'12.c',front:'Ziare',back:'Ziare: „Cuvântul”, „Buna Vestire”.'},
  {group:12,id:'12.d',front:'Obiectivul lor',back:'Eliminarea influenței evreilor din viața economică și politică.'},
  {group:12,id:'12.e',front:'Garda de Fier',back:'Garda de Fier și Totul pentru Țară.'},

  {group:13,id:'13.a',front:'Partidul Național Creștin',back:'Condus activ de Octavian Goga.'},
  {group:13,id:'13.b',front:'Politici',back:'Militau pentru numerus clausus și revizuirea cetățeniei evreilor.'},
  {group:13,id:'13.c',front:'Antisemitism de stat',back:'A impus antisemitismul de stat.'},

  {group:14,id:'14.a',front:'Atitudinea lui Codreanu',back:'Codreanu era împotriva evreilor.'},
  {group:14,id:'14.b',front:'Naționalism',back:'Susținea naționalismul radical.'},
  {group:14,id:'14.c',front:'Anti-democrație',back:'Era contra democrațiilor occidentale, bolșevismului și Societății Națiunilor.'},
  {group:14,id:'14.d',front:'Mijloace',back:'Prin lege, discurs politic și violență.'},
  {group:14,id:'14.e',front:'Gazduire studenți legionari',back:'Evreii i-au găzduit pe studenții legionari la Oradea.'},
  {group:14,id:'14.f',front:'Violențe studențești',back:'Studenții au devastat prăvălii, case și sinagogi, au jefuit și profanat lăcașuri religioase.'}
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
