const META=[{"title": "Current Trends & Emerging Technologies", "prefix": "lecture1_v1_", "topics": ["What software engineering is, and what has changed", "Why software engineering is evolving", "The ten current software engineering trends", "AI-assisted development and the changing engineer role", "DevOps, continuous delivery and lifecycle integration", "Cloud-native software, microservices and distributed complexity", "Low-code and no-code development", "Emerging technologies: definition, groups and generative AI", "AI agents and digital twins", "Edge computing, quantum computing and new engineering questions", "The six technology-evaluation questions and exam method", "Ten essential takeaways to carry into the exam"], "correct": [1, 0, 2, 1, 3, 1, 0, 0, 1, 1, 1, 1, 1, 2, 0], "flash": 43, "essays": 36}, {"title": "Ethics & Social Responsibility", "prefix": "ethics_v2_", "topics": ["The central idea: working software is not automatically responsible software", "Ethics, law and professional responsibility", "The eight ACM/IEEE areas of responsibility", "Ethical trade-offs and an explicit decision check", "Social responsibility, ripple effects and invisible stakeholders", "SDGs: explain an actual contribution mechanism", "Malaysian priorities: MySTIE, MyDIGITAL and Industry4WRD", "A structured-answer method for the exam"], "correct": [2, 1, 2, 3, 0, 1, 2, 0, 1, 3, 2, 1, 2, 3, 1], "flash": 35, "essays": 29}, {"title": "Foundation of Enterprise Architecture", "prefix": "lecture3_v1_", "topics": ["Why Enterprise Architecture matters", "Architecture frameworks: TOGAF, Zachman and others", "The four interdependent architectural layers", "Business architecture and the student journey", "Data and application architecture together", "Technology architecture and service quality", "Business–IT alignment is a traceable relationship", "Technology selection using EA", "Exam case: university course registration", "High-value recap and structured-answer method"], "correct": [1, 2, 2, 1, 1, 0, 0, 1, 2, 1, 1, 2, 2, 1, 3], "flash": 36, "essays": 33}, {"title": "Advanced Topics in Enterprise Architecture", "prefix": "lecture4_v1_", "topics": ["From understanding architecture to changing it", "Baseline architecture versus target-state architecture", "Architecture roadmaps: a staged route to the target", "Gap analysis as the bridge between baseline and target", "Architecture governance: principles, decisions, exceptions", "TOGAF ADM as a structured but adaptable method", "Work products and a traceable change story", "Complete university registration worked example", "Cross-topic comparisons that score explanation marks", "Exam writing checklist and official takeaways"], "correct": [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 3], "flash": 39, "essays": 34}, {"title": "Advanced Technologies Part 1", "prefix": "lecture5_v1_", "topics": ["What this lecture adds to emerging-technology awareness", "Blockchain: sharing records across organisations", "Internet of Things: turning physical measurements into actions", "Extended Reality (XR): VR, AR, MR and training", "Four dimensions of adoption feasibility", "Total cost and financial value", "Readiness, ethics and social responsibilities", "Practical seven-step feasibility checklist", "A common framework for comparing the three cases", "Evidence quality, references and the five takeaways"], "correct": [1, 1, 1, 0, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0], "flash": 40, "essays": 36}, {"title": "Advanced Technologies Part 2", "prefix": "lecture6_v1_", "topics": ["From technology selection to measurable value", "The practical integration architecture", "Integration strategy 1: APIs and services", "Integration strategy 2: event-driven systems", "Integration strategy 3: data integration", "Integration strategy 4: cloud, edge and hybrid", "Technical and organisational adoption challenges", "Implementation and rollout strategies", "Impact evaluation: baseline, targets and indicators", "ROI formula, complete costs and worked example", "Campus smart-facility case and post-adoption decision", "Final exam framework and official takeaways"], "correct": [1, 3, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 2, 1], "flash": 43, "essays": 46}];
const SRC=["lectures/lecture-1.html","lectures/lecture-2.html","lectures/lecture-3.html","lectures/lecture-4.html","lectures/lecture-5.html","lectures/lecture-6.html"];
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const GO=[['summary','Summary'],['mind','Mind Map'],['essay','Essays'],['mcq','MCQ'],['flash','Flashcards']];
let storeOK=true;try{localStorage.setItem('__t','1');localStorage.removeItem('__t')}catch(e){storeOK=false}
const read=(L,k)=>{try{return JSON.parse(localStorage.getItem(L.prefix+k))||{}}catch(e){return{}}};
function stats(L){
const m=read(L,'mcq'),f=read(L,'flash'),e=read(L,'reviewed');
let answered=0,correct=0;L.correct.forEach((c,i)=>{if(Number.isInteger(m[i])){answered++;if(m[i]===c)correct++}});
const known=Object.keys(f).filter(i=>f[i]==='known'&&+i<L.flash).length;
const reviewed=Object.keys(e).filter(i=>e[i]&&+i<L.essays).length;
const u=Math.round(50*correct/L.correct.length+30*known/L.flash+20*reviewed/L.essays);
return{answered,correct,known,reviewed,u,active:answered+known+reviewed>0};
}
function level(u,active){return !active?'Not started':u<25?'Getting started':u<50?'Building':u<75?'Developing':u<90?'Strong':'Exam-ready'}
const meter=(label,val,tot)=>`<div><div class="mh"><span>${label}</span><b>${val} / ${tot}</b></div><span class="bar"><i style="transform:scaleX(${tot?val/tot:0})"></i></span></div>`;
function render(){
const S=META.map(stats);
$('list').innerHTML=META.map((L,i)=>{const s=S[i];return`<article class="lec" id="row-${i+1}"><header><span class="no">${String(i+1).padStart(2,'0')}</span><h2>${esc(L.title)}</h2><div class="score"><b>${s.u}%</b><span>${level(s.u,s.active)}</span></div></header>
<div class="meters">${meter('MCQ mark',s.correct,L.correct.length)}${meter('Flashcards known',s.known,L.flash)}${meter('Essays reviewed',s.reviewed,L.essays)}</div>
<div class="acts"><button class="btn primary" data-open="${i+1}" type="button">Open lecture</button><span class="sep">Jump to</span>${GO.map(g=>`<button class="btn" data-open="${i+1}" data-go="${g[0]}" type="button">${g[1]}</button>`).join('')}</div>
<details><summary>${L.topics.length} topics</summary><ol class="topics">${L.topics.map((t,j)=>`<li><button data-open="${i+1}" data-topic="${j}" type="button">${esc(t)}</button></li>`).join('')}</ol></details></article>`}).join('');
const sum=k=>S.reduce((a,s)=>a+s[k],0),tot=k=>META.reduce((a,L)=>a+(k==='c'?L.correct.length:k==='f'?L.flash:L.essays),0);
const any=S.some(s=>s.active),o=Math.round(S.reduce((a,s)=>a+s.u,0)/S.length);
$('oPct').textContent=o+'%';$('oLvl').textContent=level(o,any);$('oBar').style.transform=`scaleX(${o/100})`;
$('oBarLabel').setAttribute('aria-label','Overall understanding '+o+' percent');
$('oStats').innerHTML=[['MCQ marks',sum('correct')+' / '+tot('c')],['Flashcards known',sum('known')+' / '+tot('f')],['Essays reviewed',sum('reviewed')+' / '+tot('e')],['Lectures started',S.filter(s=>s.active).length+' / '+META.length]].map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('');
$('storeWarn').hidden=storeOK;
}
/* topic search */
$('q').addEventListener('input',()=>{const t=$('q').value.trim().toLowerCase();const h=[];
if(t)META.forEach((L,i)=>L.topics.forEach((x,j)=>{if(x.toLowerCase().includes(t))h.push(`<li><button data-open="${i+1}" data-topic="${j}" type="button"><span class="tag">L${i+1}</span>${esc(x)}</button></li>`)}));
$('hits').innerHTML=t&&!h.length?'<li class="note" style="padding:6px 10px">No topic matches.</li>':h.slice(0,10).join('')});
/* viewer */
let cur=null,fr=null,pend=null;
function source(n){return SRC[n-1]}
function apply(){if(!pend||!fr)return;fr.contentWindow.postMessage({type:'study-route',...pend},'*');pend=null}
function closeFrame(){if(fr){fr.remove();fr=null}cur=null}
function openViewer(n){if(cur===n&&fr){apply();return}closeFrame();
fr=document.createElement('iframe');fr.title=META[n-1].title;fr.src=source(n);fr.addEventListener('load',apply);
$('frameWrap').append(fr);cur=n;$('switch').value=n;$('vt').textContent=META[n-1].title;
$('dash').hidden=true;$('viewer').hidden=false;window.scrollTo(0,0)}
function route(){const m=/^#lecture-(\d)$/.exec(location.hash);
if(m&&META[m[1]-1])openViewer(+m[1]);else{closeFrame();$('viewer').hidden=true;$('dash').hidden=false;render()}}
function go(n,o){pend=o||null;const h='#lecture-'+n;if(location.hash!==h)location.hash=h;else route()}
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(!b)return;
go(+b.dataset.open,{go:b.dataset.go,topic:b.dataset.topic!==undefined?+b.dataset.topic:null})});
$('back').onclick=()=>{history.pushState('',document.title,location.pathname+location.search);route()};
$('switch').innerHTML=META.map((L,i)=>`<option value="${i+1}">Lecture ${i+1} · ${esc(L.title)}</option>`).join('');
$('switch').onchange=e=>go(+e.target.value);
window.addEventListener('hashchange',route);
window.addEventListener('storage',()=>{if(!$('dash').hidden)render()});
window.addEventListener('focus',()=>{if(!$('dash').hidden)render()});
/* reset with confirmation */
$('resetBtn').onclick=()=>$('dlg').showModal();
$('cancelBtn').onclick=()=>$('dlg').close();
function wipe(){
closeFrame();$('viewer').hidden=true;
META.forEach(L=>{['mcq','flash','reviewed','essays'].forEach(k=>{try{localStorage.removeItem(L.prefix+k)}catch(e){}})});
history.pushState('',document.title,location.pathname+location.search);
$('dash').hidden=false;render();$('status').textContent='Progress for Lectures 1–6 has been reset.'}
$('confirmBtn').onclick=()=>{$('dlg').close();wipe()};
route();
