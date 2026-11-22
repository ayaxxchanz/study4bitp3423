const $=(x)=>document.getElementById(x);
const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storage={get(k,fallback){try{return JSON.parse(localStorage.getItem(STORAGE_PREFIX+k))??fallback}catch(e){return fallback}},set(k,v){try{localStorage.setItem(STORAGE_PREFIX+k,JSON.stringify(v))}catch(e){}}};
let mcqAnswers=storage.get('mcq',{}),essaysText=storage.get('essays',{}),reviewed=storage.get('reviewed',{}),flashStatus=storage.get('flash',{});
const tabNames=['summary','mind','essay','mcq','flash'];
function tab(go){
 if(!tabNames.includes(go))return;
 document.querySelectorAll('[data-go]').forEach(b=>b.classList.toggle('active',b.dataset.go===go));
 document.querySelectorAll('.main-section').forEach(s=>s.classList.toggle('active',s.id===go+'-section'));
 storage.set('activeTab',go);
 storage.set('activeTopic',null);
 if(location.hash!=='#'+go+'-section')history.replaceState(null,'','#'+go+'-section');
 window.scrollTo({top:0,behavior:'instant'});
}
function restoreTab(){
 const topicHash=/^#topic-(\d+)(?:-(?:header|content))?$/.exec(location.hash);
 if(topicHash&&openTopic(Number(topicHash[1])-1))return;
 const hashTab=location.hash.slice(1).replace(/-section$/,'');
 const savedTab=storage.get('activeTab','summary');
 const savedTopic=storage.get('activeTopic',null);
 if(!tabNames.includes(hashTab)&&savedTab==='summary'&&Number.isInteger(savedTopic)&&openTopic(savedTopic))return;
 tab(tabNames.includes(hashTab)?hashTab:tabNames.includes(savedTab)?savedTab:'summary');
}
function openTopic(index){
 if(!Number.isInteger(index)||index<0||index>=DATA.summary.length)return false;
 const card=$('topic-'+(index+1));
 if(!card)return false;
 tab('summary');
 card.open=true;
 storage.set('activeTopic',index);
 history.replaceState(null,'','#topic-'+(index+1)+'-header');
 const scroll=()=>card.scrollIntoView({block:'start',behavior:'instant'});
 scroll();
 requestAnimationFrame(scroll);
 return true;
}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>tab(b.dataset.go)));
window.addEventListener('hashchange',restoreTab);
$('topicCount').textContent=DATA.summary.length;$('essayCount').textContent=STRUCTURED.length;$('mcqCount').textContent=DATA.mcq.length;$('flashCount').textContent=DATA.flashcards.length;
// Detailed notes. All topic details start expanded for reading.
$('summary-list').innerHTML=DATA.summary.map((t,i)=>`<details class="summary-card" id="topic-${i+1}" open><summary id="topic-${i+1}-header" aria-controls="topic-${i+1}-content"><span class="number">${String(i+1).padStart(2,'0')}</span><span><h3>${esc(t.title)}</h3><span class="source">Source slides ${esc(t.slides)}</span></span><span class="down" aria-hidden="true"><svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span></summary><div class="inner" id="topic-${i+1}-content" aria-labelledby="topic-${i+1}-header"><p class="lead">${esc(t.lead)}</p>${t.blocks.map(([h,b])=>`<div class="subtopic"><h4>${esc(h)}</h4><p>${b}</p></div>`).join('')}</div></details>`).join('');
$('expand-all').onclick=()=>document.querySelectorAll('.summary-card').forEach(e=>e.open=true);
$('collapse-all').onclick=()=>document.querySelectorAll('.summary-card').forEach(e=>e.open=false);
function doPrint(mode){document.body.classList.remove('print-summary','print-questions','print-answers');document.body.classList.add('print-'+mode);document.querySelectorAll('.summary-card').forEach(e=>e.open=true);if(mode==='answers')document.querySelectorAll('.answer-box').forEach(e=>e.classList.remove('hidden'));window.print();}
window.addEventListener('afterprint',()=>document.body.classList.remove('print-summary','print-questions','print-answers'));
$('print-summary').onclick=()=>doPrint('summary');$('print-questions').onclick=()=>doPrint('questions');$('print-answers').onclick=()=>doPrint('answers');
// Exam-style structured questions, patterned on the two uploaded BITP 3423 past papers.
// The past papers contain Part A (five structured questions, 50 marks) and Part B (two case studies, 50 marks).
// Our original scenarios and marking suggestions are revision examples, NOT copied examination questions or official keys.
const examKinds=[...new Set(STRUCTURED.map(x=>x.section))];
const examTopics=[...new Set(STRUCTURED.map(x=>x.topic))];
$('essay-kind').innerHTML+=examKinds.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('');
$('essay-topic').innerHTML+=examTopics.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('');
let structAnswers=storage.get('structured_answers_v2',{});
let structReviewed=storage.get('structured_reviewed_v2',{});
function renderStructured(){
 const term=$('essay-search').value.toLowerCase().trim(),topic=$('essay-topic').value,kind=$('essay-kind').value,sel=$('exam-set').value;
 const filtered=STRUCTURED.map((e,i)=>({...e,original:i})).filter(e=>
  (topic==='all'||e.topic===topic) && (kind==='all'||e.section===kind) && (sel==='all'||e.practiceSet===sel) &&
  (!term||[e.scenario,e.topic,e.section,...e.parts.flatMap(p=>[p.question,...p.items,p.model])].join(' ').toLowerCase().includes(term))
 );
 $('essay-filter-count').textContent=`${filtered.length} of ${STRUCTURED.length} practice questions`;
 $('essay-list').innerHTML=filtered.map(e=>{
  const total=e.parts.reduce((s,p)=>s+p.marks,0);
  return `<article class="essay-card st-card" data-structured="${e.original}">
    <div class="qhead"><span class="qnum">${esc(e.display)}</span><div class="pills"><span class="pill">${esc(e.topic)}</span><span class="pill">${esc(e.section)}</span><span class="pill pmarks">${total} marks</span><span class="pill">Lecture slides ${esc(e.slides)}</span></div></div>
    <p class="st-scenario">${esc(e.scenario)}</p>
    ${e.parts.map((p,j)=>{
      const key=e.original+':'+j;
      return `<div class="st-part">
       <div class="st-prompt"><span class="st-letter">(${esc(p.letter)})</span><div class="st-ask">${esc(p.question)}</div><span class="st-mark">(${p.marks} marks)</span></div>
       <label for="struct-${e.original}-${j}">Your answer to (${esc(p.letter)}) · autosaved</label>
       <textarea class="essay-input st-answer-input" id="struct-${e.original}-${j}" data-structured-input="${key}" rows="2" placeholder="Write distinct numbered points. Add a short explanation or case example for each."></textarea>
       <div class="st-guide-actions"><button class="btn" data-guide="${e.original}-${j}" aria-expanded="false">Reveal full suggested answer + marking points</button><span class="model-note">${p.items.length} expected points · indicative allocation only</span></div>
       <div class="answer-box hidden" id="st-guide-${e.original}-${j}">
         <h4>Suggested full answer for (${esc(p.letter)})</h4>
         <div class="st-full-model"><p>${esc(p.model)}</p></div>
         <h4 class="st-points-title">Key marking points</h4>
         <ol class="marking st-marking">${p.items.map(item=>`<li>${esc(item)}</li>`).join('')}</ol>
         <p class="model-note">The model response is an example, not an official answer scheme. Approximately ${p.marks/p.items.length} mark(s) per relevant point for this practice question. Other valid and well-explained answers may earn credit.</p>
       </div>
      </div>`;
    }).join('')}
    <div class="essay-toolbar"><span id="st-review-${e.original}" class="${structReviewed[e.original]?'reviewed':'model-note'}">${structReviewed[e.original]?'✓ Marked reviewed':'Answer all subparts, then reveal the guides'}</span><div class="right"><button class="btn" data-struct-review="${e.original}">${structReviewed[e.original]?'Unmark reviewed':'Mark reviewed'}</button></div></div>
   </article>`;
 }).join('')||'<div class="empty">No structured questions match the selected filters.</div>';
 filtered.forEach(e=>e.parts.forEach((p,j)=>{const el=$('struct-'+e.original+'-'+j);if(el)el.value=structAnswers[e.original+':'+j]||'';}));
}
renderStructured();
$('essay-topic').onchange=renderStructured;
$('essay-kind').onchange=renderStructured;
$('exam-set').onchange=renderStructured;
$('essay-search').oninput=renderStructured;
$('essay-list').addEventListener('input',ev=>{
 if(ev.target.dataset.structuredInput!==undefined){structAnswers[ev.target.dataset.structuredInput]=ev.target.value;storage.set('structured_answers_v2',structAnswers)}
});
$('essay-list').addEventListener('click',ev=>{
 const b=ev.target.closest('button');if(!b)return;
 if(b.dataset.guide!==undefined){
  const el=$('st-guide-'+b.dataset.guide),shown=el.classList.toggle('hidden')===false;
  b.textContent=shown?'Hide suggested answer + marking points':'Reveal full suggested answer + marking points';
  b.setAttribute('aria-expanded',String(shown));
 } else if(b.dataset.structReview!==undefined){
  const i=b.dataset.structReview;structReviewed[i]=!structReviewed[i];storage.set('structured_reviewed_v2',structReviewed);
  $('st-review-'+i).textContent=structReviewed[i]?'✓ Marked reviewed':'Answer all subparts, then reveal the guides';
  $('st-review-'+i).className=structReviewed[i]?'reviewed':'model-note';
  b.textContent=structReviewed[i]?'Unmark reviewed':'Mark reviewed';
 }
});
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
  openTopic(Number(route.topic));
 }else if(route.go)tab(route.go);
});

// Restore after the topic cards and the rest of the lecture have rendered.
restoreTab();
window.addEventListener('load',restoreTab);
