const META=[{"title": "Current Trends & Emerging Technologies", "prefix": "lecture1_v1_", "topics": ["What software engineering is, and what has changed", "Why software engineering is evolving", "The ten current software engineering trends", "AI-assisted development and the changing engineer role", "DevOps, continuous delivery and lifecycle integration", "Cloud-native software, microservices and distributed complexity", "Low-code and no-code development", "Emerging technologies: definition, groups and generative AI", "AI agents and digital twins", "Edge computing, quantum computing and new engineering questions", "The six technology-evaluation questions and exam method", "Ten essential takeaways to carry into the exam"], "correct": [1, 0, 2, 1, 3, 1, 0, 0, 1, 1, 1, 1, 1, 2, 0], "flash": 43, "essays": 36}, {"title": "Ethics & Social Responsibility", "prefix": "ethics_v2_", "topics": ["The central idea: working software is not automatically responsible software", "Ethics, law and professional responsibility", "The eight ACM/IEEE areas of responsibility", "Ethical trade-offs and an explicit decision check", "Social responsibility, ripple effects and invisible stakeholders", "SDGs: explain an actual contribution mechanism", "Malaysian priorities: MySTIE, MyDIGITAL and Industry4WRD", "A structured-answer method for the exam"], "correct": [2, 1, 2, 3, 0, 1, 2, 0, 1, 3, 2, 1, 2, 3, 1], "flash": 35, "essays": 29}, {"title": "Foundation of Enterprise Architecture", "prefix": "lecture3_v1_", "topics": ["Why Enterprise Architecture matters", "Architecture frameworks: TOGAF, Zachman and others", "The four interdependent architectural layers", "Business architecture and the student journey", "Data and application architecture together", "Technology architecture and service quality", "Business–IT alignment is a traceable relationship", "Technology selection using EA", "Exam case: university course registration", "High-value recap and structured-answer method"], "correct": [1, 2, 2, 1, 1, 0, 0, 1, 2, 1, 1, 2, 2, 1, 3], "flash": 36, "essays": 33}, {"title": "Advanced Topics in Enterprise Architecture", "prefix": "lecture4_v1_", "topics": ["From understanding architecture to changing it", "Baseline architecture versus target-state architecture", "Architecture roadmaps: a staged route to the target", "Gap analysis as the bridge between baseline and target", "Architecture governance: principles, decisions, exceptions", "TOGAF ADM as a structured but adaptable method", "Work products and a traceable change story", "Complete university registration worked example", "Cross-topic comparisons that score explanation marks", "Exam writing checklist and official takeaways"], "correct": [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 3], "flash": 39, "essays": 34}, {"title": "Advanced Technologies Part 1", "prefix": "lecture5_v1_", "topics": ["What this lecture adds to emerging-technology awareness", "Blockchain: sharing records across organisations", "Internet of Things: turning physical measurements into actions", "Extended Reality (XR): VR, AR, MR and training", "Four dimensions of adoption feasibility", "Total cost and financial value", "Readiness, ethics and social responsibilities", "Practical seven-step feasibility checklist", "A common framework for comparing the three cases", "Evidence quality, references and the five takeaways"], "correct": [1, 1, 1, 0, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0], "flash": 40, "essays": 36}, {"title": "Advanced Technologies Part 2", "prefix": "lecture6_v1_", "topics": ["From technology selection to measurable value", "The practical integration architecture", "Integration strategy 1: APIs and services", "Integration strategy 2: event-driven systems", "Integration strategy 3: data integration", "Integration strategy 4: cloud, edge and hybrid", "Technical and organisational adoption challenges", "Implementation and rollout strategies", "Impact evaluation: baseline, targets and indicators", "ROI formula, complete costs and worked example", "Campus smart-facility case and post-adoption decision", "Final exam framework and official takeaways"], "correct": [1, 3, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 2, 1], "flash": 43, "essays": 46}];
const SRC=["lectures/lecture-1.html","lectures/lecture-2.html","lectures/lecture-3.html","lectures/lecture-4.html","lectures/lecture-5.html","lectures/lecture-6.html"];
META.forEach(lecture=>lecture.structured=17);
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const GO=[['summary','Summary'],['mind','Mind Map'],['essay','Structured Questions'],['mcq','MCQ'],['flash','Flashcards']];
const GO_ICONS={
summary:'<path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3"/><path d="M8 2h8v4H8zM7 11h10M7 15h10"/>',
mind:'<rect x="8" y="2" width="8" height="6" rx="1"/><rect x="2" y="16" width="8" height="6" rx="1"/><rect x="14" y="16" width="8" height="6" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
essay:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
mcq:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m7 9 2 2 4-4M7 16h10"/>',
flash:'<rect x="7" y="3" width="14" height="16" rx="2"/><path d="M17 21H5a2 2 0 0 1-2-2V7m11 0-3 5h5l-3 5"/>'
};
const jumpIcon=key=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${GO_ICONS[key]}</svg>`;
const BACKUP_APP='study4bitp3423-progress',BACKUP_VERSION=1,PROGRESS_KEYS=['mcq','flash','reviewed','essays'],MAX_BACKUP_BYTES=2*1024*1024;
const STORAGE_SUFFIX={reviewed:'structured_reviewed_v2',essays:'structured_answers_v2'};
let storeOK=true;try{localStorage.setItem('__t','1');localStorage.removeItem('__t')}catch(e){storeOK=false}
const read=(L,k)=>{try{return JSON.parse(localStorage.getItem(L.prefix+(STORAGE_SUFFIX[k]||k)))||{}}catch(e){return{}}};
const isRecord=value=>value!==null&&typeof value==='object'&&!Array.isArray(value);
function cleanIndexed(source,max,valid,label,strict=true){
if(!isRecord(source)){if(strict)throw new Error(label+' must be an object.');source={}}
const output={};
for(const [key,value] of Object.entries(source)){
const index=Number(key),validKey=/^(0|[1-9]\d*)$/.test(key)&&Number.isInteger(index)&&index>=0&&index<max;
if(!validKey||!valid(value)){if(strict)throw new Error('Invalid '+label+' entry.');continue}
output[key]=value;
}
return output;
}
function cleanStructuredAnswers(source,L,strict=true){
if(!isRecord(source)){if(strict)throw new Error('Structured-answer drafts must be an object.');source={}}
const output={};
for(const [key,value] of Object.entries(source)){
const match=/^(0|[1-9]\d*):(0|1|2)$/.exec(key),validKey=match&&Number(match[1])<L.structured;
if(!validKey||typeof value!=='string'||value.length>50000){if(strict)throw new Error('Invalid structured-answer draft entry.');continue}
output[key]=value;
}
return output;
}
function cleanLecture(source,L,strict=true){
if(!isRecord(source)){if(strict)throw new Error('Invalid lecture progress.');source={}}
if(strict&&Object.keys(source).some(key=>!PROGRESS_KEYS.includes(key)))throw new Error('Unexpected lecture progress field.');
return{
mcq:cleanIndexed(source.mcq,L.correct.length,value=>Number.isInteger(value)&&value>=0&&value<=3,'MCQ',strict),
flash:cleanIndexed(source.flash,L.flash,value=>value==='known'||value==='missed','flashcard',strict),
reviewed:cleanIndexed(source.reviewed,L.structured,value=>typeof value==='boolean','reviewed structured question',strict),
essays:cleanStructuredAnswers(source.essays,L,strict)
};
}
function makeBackup(){
return{app:BACKUP_APP,version:BACKUP_VERSION,exportedAt:new Date().toISOString(),lectures:META.map((L,index)=>({id:index+1,...cleanLecture(Object.fromEntries(PROGRESS_KEYS.map(key=>[key,read(L,key)])),L,false)}))};
}
function validateBackup(value){
if(!isRecord(value)||value.app!==BACKUP_APP||value.version!==BACKUP_VERSION)throw new Error('This is not a compatible Study Hub backup.');
if(typeof value.exportedAt!=='string'||!Number.isFinite(Date.parse(value.exportedAt)))throw new Error('The backup date is invalid.');
if(!Array.isArray(value.lectures)||value.lectures.length!==META.length)throw new Error('The backup must contain all six lectures.');
const seen=new Set(),lectures=[];
for(const entry of value.lectures){
if(!isRecord(entry)||!Number.isInteger(entry.id)||entry.id<1||entry.id>META.length||seen.has(entry.id))throw new Error('The backup contains an invalid lecture id.');
if(Object.keys(entry).some(key=>key!=='id'&&!PROGRESS_KEYS.includes(key)))throw new Error('The backup contains an unexpected field.');
seen.add(entry.id);lectures[entry.id-1]=cleanLecture(Object.fromEntries(PROGRESS_KEYS.map(key=>[key,entry[key]])),META[entry.id-1],true);
}
return{app:BACKUP_APP,version:BACKUP_VERSION,exportedAt:value.exportedAt,lectures};
}
function progressStorageKeys(){return META.flatMap(L=>PROGRESS_KEYS.map(key=>L.prefix+(STORAGE_SUFFIX[key]||key)))}
function replaceProgress(lectures){
const keys=progressStorageKeys(),previous=new Map(keys.map(key=>[key,localStorage.getItem(key)]));
try{
keys.forEach(key=>localStorage.removeItem(key));
lectures.forEach((lecture,index)=>PROGRESS_KEYS.forEach(key=>localStorage.setItem(META[index].prefix+(STORAGE_SUFFIX[key]||key),JSON.stringify(lecture[key]))));
}catch(error){
keys.forEach(key=>{try{localStorage.removeItem(key)}catch(e){}});
previous.forEach((value,key)=>{if(value!==null)try{localStorage.setItem(key,value)}catch(e){}});
throw error;
}
}
function stats(L){
const m=read(L,'mcq'),f=read(L,'flash'),e=read(L,'reviewed');
let answered=0,correct=0;L.correct.forEach((c,i)=>{if(Number.isInteger(m[i])){answered++;if(m[i]===c)correct++}});
const known=Object.keys(f).filter(i=>f[i]==='known'&&+i<L.flash).length;
const reviewed=Object.keys(e).filter(i=>e[i]&&+i<L.structured).length;
const u=Math.round(50*correct/L.correct.length+30*known/L.flash+20*reviewed/L.structured);
return{answered,correct,known,reviewed,u,active:answered+known+reviewed>0};
}
function level(u,active){return !active?'Not started':u<25?'Getting started':u<50?'Building':u<75?'Developing':u<90?'Strong':'Exam-ready'}
const meter=(label,val,tot)=>`<div><div class="mh"><span>${label}</span><b>${val} / ${tot}</b></div><span class="bar"><i style="transform:scaleX(${tot?val/tot:0})"></i></span></div>`;
function render(){
const S=META.map(stats);
$('list').innerHTML=META.map((L,i)=>{const s=S[i];return`<article class="lec" id="row-${i+1}"><header><span class="no">${String(i+1).padStart(2,'0')}</span><h2>${esc(L.title)}</h2><div class="score"><b>${s.u}%</b><span>${level(s.u,s.active)}</span></div></header>
<div class="meters">${meter('MCQ mark',s.correct,L.correct.length)}${meter('Flashcards known',s.known,L.flash)}${meter('Structured questions reviewed',s.reviewed,L.structured)}</div>
<div class="acts"><button class="btn primary" data-open="${i+1}" type="button">Open lecture</button><span class="sep">Jump to</span>${GO.map(g=>`<a class="jump-link" href="#lecture-${i+1}" data-open="${i+1}" data-go="${g[0]}">${jumpIcon(g[0])}<span>${g[1]}</span></a>`).join('')}</div>
<details><summary>${L.topics.length} topics</summary><ol class="topics">${L.topics.map((t,j)=>`<li><button data-open="${i+1}" data-topic="${j}" type="button">${esc(t)}</button></li>`).join('')}</ol></details></article>`}).join('');
const sum=k=>S.reduce((a,s)=>a+s[k],0),tot=k=>META.reduce((a,L)=>a+(k==='c'?L.correct.length:k==='f'?L.flash:L.structured),0);
const any=S.some(s=>s.active),o=Math.round(S.reduce((a,s)=>a+s.u,0)/S.length);
$('oPct').textContent=o+'%';$('oLvl').textContent=level(o,any);$('oBar').style.transform=`scaleX(${o/100})`;
$('oBarLabel').setAttribute('aria-label','Overall understanding '+o+' percent');
$('oStats').innerHTML=[['MCQ marks',sum('correct')+' / '+tot('c')],['Flashcards known',sum('known')+' / '+tot('f')],['Structured questions reviewed',sum('reviewed')+' / '+tot('e')],['Lectures started',S.filter(s=>s.active).length+' / '+META.length]].map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('');
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
if(b.tagName==='A'){if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault()}
go(+b.dataset.open,{go:b.dataset.go||'summary',topic:b.dataset.topic!==undefined?+b.dataset.topic:null})});
$('back').onclick=()=>{history.pushState('',document.title,location.pathname+location.search);route()};
$('switch').innerHTML=META.map((L,i)=>`<option value="${i+1}">Lecture ${i+1} · ${esc(L.title)}</option>`).join('');
$('switch').onchange=e=>go(+e.target.value);
window.addEventListener('hashchange',route);
window.addEventListener('storage',()=>{if(!$('dash').hidden)render()});
window.addEventListener('focus',()=>{if(!$('dash').hidden)render()});
/* local JSON progress backup */
$('exportBtn').onclick=()=>{try{
const backup=makeBackup(),blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
link.href=url;link.download='study4bitp3423-progress-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
$('status').textContent='Progress exported. The file includes your saved structured-answer drafts.';
}catch(error){$('status').textContent='Progress could not be exported in this browser.'}};
let pendingImport=null;
$('importBtn').onclick=()=>{$('importFile').click()};
$('importFile').onchange=async event=>{const file=event.target.files[0];event.target.value='';if(!file)return;
try{
if(file.size>MAX_BACKUP_BYTES)throw new Error('The selected file is larger than 2 MB.');
const parsed=JSON.parse(await file.text());pendingImport=validateBackup(parsed);
const when=new Date(pendingImport.exportedAt).toLocaleString('en-GB',{timeZone:'Asia/Kuala_Lumpur',dateStyle:'long',timeStyle:'short'});
$('importSummary').textContent='Backup created '+when+' (GMT+8). Importing it will replace progress currently saved in this browser.';$('importDlg').showModal();
}catch(error){pendingImport=null;$('status').textContent='Import rejected: '+(error instanceof SyntaxError?'the file is not valid JSON.':error.message)}};
$('importCancelBtn').onclick=()=>{pendingImport=null;$('importDlg').close()};
$('importConfirmBtn').onclick=()=>{if(!pendingImport)return;try{replaceProgress(pendingImport.lectures);pendingImport=null;$('importDlg').close();render();$('status').textContent='Progress imported successfully.'}catch(error){$('importDlg').close();pendingImport=null;$('status').textContent='Import failed. Your previous progress was restored.'}};
/* reset with confirmation */
$('resetBtn').onclick=()=>$('dlg').showModal();
$('cancelBtn').onclick=()=>$('dlg').close();
function wipe(){
closeFrame();$('viewer').hidden=true;
META.forEach(L=>{['mcq','flash','reviewed','essays','structured_reviewed_v2','structured_answers_v2'].forEach(k=>{try{localStorage.removeItem(L.prefix+k)}catch(e){}})});
history.pushState('',document.title,location.pathname+location.search);
$('dash').hidden=false;render();$('status').textContent='Progress for Lectures 1–6 has been reset.'}
$('confirmBtn').onclick=()=>{$('dlg').close();wipe()};
route();
