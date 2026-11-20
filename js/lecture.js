const $=(x)=>document.getElementById(x);
const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storage={get(k,fallback){try{return JSON.parse(localStorage.getItem(STORAGE_PREFIX+k))??fallback}catch(e){return fallback}},set(k,v){try{localStorage.setItem(STORAGE_PREFIX+k,JSON.stringify(v))}catch(e){}}};
let mcqAnswers=storage.get('mcq',{}),essaysText=storage.get('essays',{}),reviewed=storage.get('reviewed',{}),flashStatus=storage.get('flash',{});
function tab(go){document.querySelectorAll('[data-go]').forEach(b=>b.classList.toggle('active',b.dataset.go===go));document.querySelectorAll('.main-section').forEach(s=>s.classList.toggle('active',s.id===go+'-section'));window.scrollTo({top:0,behavior:'instant'})}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>tab(b.dataset.go)));
$('topicCount').textContent=DATA.summary.length;$('essayCount').textContent=DATA.essays.length;$('mcqCount').textContent=DATA.mcq.length;$('flashCount').textContent=DATA.flashcards.length;
// Detailed notes. All topic details start expanded for reading.
$('summary-list').innerHTML=DATA.summary.map((t,i)=>`<details class="summary-card" open><summary><span class="number">${String(i+1).padStart(2,'0')}</span><span><h3>${esc(t.title)}</h3><span class="source">Source slides ${esc(t.slides)}</span></span><span class="down">⌄</span></summary><div class="inner"><p class="lead">${esc(t.lead)}</p>${t.blocks.map(([h,b])=>`<div class="subtopic"><h4>${esc(h)}</h4><p>${b}</p></div>`).join('')}</div></details>`).join('');
$('expand-all').onclick=()=>document.querySelectorAll('.summary-card').forEach(e=>e.open=true);
$('collapse-all').onclick=()=>document.querySelectorAll('.summary-card').forEach(e=>e.open=false);
function doPrint(mode){document.body.classList.remove('print-summary','print-questions','print-answers');document.body.classList.add('print-'+mode);document.querySelectorAll('.summary-card').forEach(e=>e.open=true);if(mode==='answers')document.querySelectorAll('.answer-box').forEach(e=>e.classList.remove('hidden'));window.print();}
window.addEventListener('afterprint',()=>document.body.classList.remove('print-summary','print-questions','print-answers'));
$('print-summary').onclick=()=>doPrint('summary');$('print-questions').onclick=()=>doPrint('questions');$('print-answers').onclick=()=>doPrint('answers');
// Essays and self-assessment. Stored drafts are not submitted anywhere.
const kinds=[...new Set(DATA.essays.map(x=>x.kind))],topics=[...new Set(DATA.essays.map(x=>x.topic))];
$('essay-kind').innerHTML+=[...kinds].map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('');
$('essay-topic').innerHTML+=[...topics].map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('');
function textToParas(s){return s.split(/\n\n+/).map(p=>`<p>${esc(p).replace(/\n/g,' ')}</p>`).join('')}
function renderEssays(){const term=$('essay-search').value.toLowerCase().trim(),topic=$('essay-topic').value,kind=$('essay-kind').value;const filtered=DATA.essays.map((v,i)=>({...v,original:i})).filter(e=>(topic==='all'||e.topic===topic)&&(kind==='all'||e.kind===kind)&&(!term||[e.question,e.topic,e.answer].join(' ').toLowerCase().includes(term)));
$('essay-filter-count').textContent=`${filtered.length} of ${DATA.essays.length} questions`;
$('essay-list').innerHTML=filtered.map(e=>`<article class="essay-card" data-essay="${e.original}"><div class="qhead"><span class="qnum">Q${e.original+1}</span><div class="pills"><span class="pill">${esc(e.topic)}</span><span class="pill">${esc(e.kind)}</span><span class="pill pmarks">${e.marks} suggested marks</span><span class="pill">Slides ${esc(e.slides)}</span></div></div><div class="qtitle">${esc(e.question)}</div><label for="essay-${e.original}">Your written answer · save automatically</label><textarea class="essay-input" id="essay-${e.original}" data-input="${e.original}" rows="4" placeholder="Write complete sentences here, e.g. identify the issue, explain why it matters, link it to the case, propose an action..."></textarea><div class="essay-toolbar"><span id="status-${e.original}" class="${reviewed[e.original]?'reviewed':'model-note'}">${reviewed[e.original]?'✓ Marked reviewed':'Try it before revealing the guide'}</span><div class="right"><button class="btn" data-show="points" data-index="${e.original}">Show marking points</button><button class="btn primary" data-show="answer" data-index="${e.original}">Show model answer</button><button class="btn" data-reviewed="${e.original}">Mark reviewed</button></div></div><div class="answer-box hidden" id="points-${e.original}"><h4>Suggested marking points</h4><ul class="marking">${e.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><p class="model-note">Suggested checklist, not an official allocation of marks.</p></div><div class="answer-box hidden" id="answer-${e.original}"><h4>Model answer · full-sentence format</h4>${textToParas(e.answer)}</div></article>`).join('')||'<div class="empty">No questions match your filters.</div>';
filtered.forEach(e=>{$('essay-'+e.original).value=essaysText[e.original]||'';});
}
renderEssays();
$('essay-topic').onchange=renderEssays;$('essay-kind').onchange=renderEssays;$('essay-search').oninput=renderEssays;
$('essay-list').addEventListener('input',ev=>{if(ev.target.dataset.input!==undefined){essaysText[ev.target.dataset.input]=ev.target.value;storage.set('essays',essaysText)}});
$('essay-list').addEventListener('click',ev=>{let b=ev.target.closest('button');if(!b)return;if(b.dataset.show){const el=$(b.dataset.show+'-'+b.dataset.index);let hiding=!el.classList.toggle('hidden');b.textContent=(hiding?'Hide ':'Show ')+(b.dataset.show==='points'?'marking points':'model answer');}else if(b.dataset.reviewed!==undefined){const i=b.dataset.reviewed;reviewed[i]=!reviewed[i];storage.set('reviewed',reviewed);$('status-'+i).textContent=reviewed[i]?'✓ Marked reviewed':'Try it before revealing the guide';$('status-'+i).className=reviewed[i]?'reviewed':'model-note';b.textContent=reviewed[i]?'Unmark reviewed':'Mark reviewed';}});
// MCQ with immediate feedback and reason.
function renderMCQ(){let correct=0,completed=0;let out='';DATA.mcq.forEach((q,i)=>{const selected=mcqAnswers[i],answered=Number.isInteger(selected);if(answered){completed++;if(selected===q.correct)correct++;}out+=`<article class="question-card"><div class="qhead"><span class="qnum">${i+1}</span><div class="qtitle">${esc(q.question)}</div><div class="pills"><span class="pill">Slides ${esc(q.slides)}</span></div></div><div class="choices">${q.choices.map((opt,j)=>`<button class="choice ${answered&&j===q.correct?'right':''} ${answered&&j===selected&&j!==q.correct?'wrong':''}" ${answered?'disabled':''} data-q="${i}" data-choice="${j}"><span class="letter">${'ABCD'[j]}</span>${esc(opt)}</button>`).join('')}</div>${answered?`<div class="explain"><b>${selected===q.correct?'Correct!':'Not quite.'} Answer: ${'ABCD'[q.correct]}.</b> ${esc(q.explanation)}</div>`:''}</article>`});
$('mcq-list').innerHTML=out;$('quiz-summary').innerHTML=`<strong>${completed} / ${DATA.mcq.length}</strong> answered · <strong>${correct}</strong> correct${completed===DATA.mcq.length?' · Quiz complete — revisit any incorrect answers after reset.':''}`;
}
renderMCQ();
$('mcq-list').addEventListener('click',ev=>{const b=ev.target.closest('[data-q]');if(!b)return;const i=Number(b.dataset.q);if(Number.isInteger(mcqAnswers[i]))return;mcqAnswers[i]=Number(b.dataset.choice);storage.set('mcq',mcqAnswers);renderMCQ()});
$('mcq-reset').onclick=()=>{if(confirm('Reset all MCQ answers?')){mcqAnswers={};storage.set('mcq',mcqAnswers);renderMCQ()}};
// Flashcard review. Use index pool to support shuffled and missed-only views.
let flashIndices=DATA.flashcards.map((_,i)=>i),flashPos=0;
function flashRender(){if(!flashIndices.length){$('study-card').classList.add('hidden');$('flash-number').textContent='No missed cards. Great work!';$('flash-source').textContent='';$('flash-front').textContent='';$('flash-back').textContent='';$('flash-progress').textContent='';$('flash-bar').style.width='100%';return;}
$('study-card').classList.remove('hidden','flipped');flashPos=Math.max(0,Math.min(flashIndices.length-1,flashPos));const idx=flashIndices[flashPos],card=DATA.flashcards[idx];$('flash-front').textContent=card.front;$('flash-back').textContent=card.back;$('flash-number').textContent=`Card ${flashPos+1} / ${flashIndices.length}`;$('flash-source').textContent='Slides '+card.slides;const known=Object.values(flashStatus).filter(v=>v==='known').length,missed=Object.values(flashStatus).filter(v=>v==='missed').length;$('flash-progress').textContent=`${known} known · ${missed} need practice`;$('flash-bar').style.width=(known/DATA.flashcards.length*100)+'%';}
function flashMove(delta){if(!flashIndices.length)return;flashPos=(flashPos+delta+flashIndices.length)%flashIndices.length;flashRender()}
function flashRate(rate){if(!flashIndices.length)return;flashStatus[flashIndices[flashPos]]=rate;storage.set('flash',flashStatus);flashMove(1)}
$('study-card').onclick=()=>{$('study-card').classList.toggle('flipped')};$('study-card').onkeydown=ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();$('study-card').click()}};
$('flash-prev').onclick=()=>flashMove(-1);$('flash-next').onclick=()=>flashMove(1);$('flash-know').onclick=()=>flashRate('known');$('flash-again').onclick=()=>flashRate('missed');
$('flash-shuffle').onclick=()=>{flashIndices=DATA.flashcards.map((_,i)=>i);for(let i=flashIndices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[flashIndices[i],flashIndices[j]]=[flashIndices[j],flashIndices[i]];}flashPos=0;flashRender()};
$('flash-missed').onclick=()=>{flashIndices=DATA.flashcards.map((_,i)=>i).filter(i=>flashStatus[i]==='missed');flashPos=0;flashRender()};
$('flash-all').onclick=()=>{flashIndices=DATA.flashcards.map((_,i)=>i);flashPos=0;flashRender()};
document.addEventListener('keydown',ev=>{if(!$('flash-section').classList.contains('active')||ev.target.closest('textarea,input,select'))return;if(ev.key==='ArrowRight')flashMove(1);if(ev.key==='ArrowLeft')flashMove(-1)});
flashRender();

// Fast-recall map: toggle question-only review without changing saved answers.
(function(){
 const sec=document.getElementById('mind-section'),drill=document.getElementById('mind-drill'),print=document.getElementById('mind-print');
 if(!sec||!drill||!print)return;
 drill.addEventListener('click',()=>{
   const enabled=sec.classList.toggle('mind-drill');
   sec.querySelectorAll('.mind-node').forEach(el=>el.classList.remove('revealed'));
   drill.textContent=enabled?'Show all key items':'Test my memory';
   drill.setAttribute('aria-pressed',String(enabled));
 });
 sec.querySelectorAll('.mind-node').forEach(node=>{
   const reveal=()=>{if(sec.classList.contains('mind-drill'))node.classList.toggle('revealed')};
   node.addEventListener('click',reveal);
   node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();reveal()}});
 });
 print.addEventListener('click',()=>{document.body.classList.add('print-mind');window.print()});
 window.addEventListener('afterprint',()=>document.body.classList.remove('print-mind'));
})();

window.addEventListener('message',event=>{
 const route=event.data;
 if(!route||route.type!=='study-route')return;
 if(route.topic!=null){
  tab('summary');
  const card=document.querySelectorAll('.summary-card')[route.topic];
  if(card){card.open=true;card.scrollIntoView({block:'start'})}
 }else if(route.go)tab(route.go);
});
