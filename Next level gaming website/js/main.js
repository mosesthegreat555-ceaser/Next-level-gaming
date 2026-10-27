(function(){
'use strict';
const {packages,tournaments,calculateQuote} = window.NextLevel;
const qs=(selector)=>document.querySelector(selector);
const money=(n)=>'R'+Number(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const safe=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nav=qs('.site-nav'),toggle=qs('.nav-toggle');
if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const file=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===file||(file==='package-detail.html'&&a.dataset.nav==='packages.html'))a.classList.add('active');});
function card(p){return `<article class="package-card"><div class="card-visual"><span class="tag">${safe(p.tag)}</span><span class="game-icon" aria-hidden="true">${p.icon}</span></div><div class="card-content"><h3>${safe(p.name)}</h3><p>${safe(p.short)}</p><div class="card-bottom"><span class="price">${money(p.price)}</span><a class="details-link" href="package-detail.html?id=${encodeURIComponent(p.id)}">View details →</a></div></div></article>`;}
const set=(id,html)=>{const el=document.getElementById(id);if(el)el.innerHTML=html;};
set('featured-packages',packages.slice(0,3).map(card).join(''));
set('gaming-packages',packages.filter(p=>p.category==='Gaming packages').map(card).join(''));
set('individual-packages',packages.filter(p=>p.category==='Individual experiences').map(card).join(''));
set('tournament-list',tournaments.map(t=>`<article class="event-card"><span class="event-icon" aria-hidden="true">${t.icon}</span><div><h3>${safe(t.title)}</h3><p>${safe(t.category)}</p><p class="hint">${safe(t.detail)}</p></div></article>`).join(''));
if(qs('#package-details')){
 const id=new URLSearchParams(location.search).get('id');
 const p=packages.find(x=>x.id===id);
 if(!p){set('package-details','<h1>Package not found</h1><p>Choose a package from the packages list.</p>');}
 else set('package-details',`<div class="detail-layout"><div class="detail-art"><span class="tag">${safe(p.tag)}</span><span class="detail-icon" aria-hidden="true">${p.icon}</span></div><div class="detail-content"><span class="eyebrow">${safe(p.category)}</span><h1>${safe(p.name)}</h1><div class="detail-price">${money(p.price)}</div><p>${safe(p.description)}</p><h3>What's included</h3><ul class="checklist">${p.includes.map(text=>`<li>${safe(text)}</li>`).join('')}</ul><a class="btn primary" href="calculator.html?package=${encodeURIComponent(p.id)}">Add to fee calculator →</a></div></div>`);
}
if(qs('#booking-rows')){
 const selected=new URLSearchParams(location.search).get('package');
 const quantities=Object.fromEntries(packages.map(p=>[p.id,p.id===selected?1:0]));
 function drawRows(){set('booking-rows',packages.map(p=>`<div class="booking-row"><div class="booking-label"><span class="ico" aria-hidden="true">${p.icon}</span><div><strong>${safe(p.name)}</strong><small>${money(p.price)}</small></div></div><div class="quantity-control"><button type="button" data-id="${p.id}" data-delta="-1" aria-label="Remove one ${safe(p.name)}">−</button><output aria-label="Quantity for ${safe(p.name)}">${quantities[p.id]}</output><button type="button" data-id="${p.id}" data-delta="1" aria-label="Add one ${safe(p.name)}">+</button></div></div>`).join(''));}
 function drawQuote(){const q=calculateQuote(quantities);set('quote-breakdown',`<div class="quote-line"><span>Bookings</span><strong>${q.count}</strong></div><div class="quote-line"><span>Subtotal</span><strong>${money(q.subtotal)}</strong></div><div class="quote-line discount"><span>Discount (${q.rate*100}%)</span><strong>−${money(q.discount)}</strong></div><div class="quote-line"><span>VAT (15%)</span><strong>${money(q.vat)}</strong></div><div class="quote-line total"><span>TOTAL DUE</span><strong>${money(q.total)}</strong></div>`);}
 drawRows();drawQuote();
 qs('#booking-rows').addEventListener('click',(event)=>{const b=event.target.closest('button[data-id]');if(!b)return;const id=b.dataset.id;quantities[id]=Math.max(0,Math.min(99,quantities[id]+Number(b.dataset.delta)));drawRows();drawQuote();});
 qs('#reset-bookings').addEventListener('click',()=>{Object.keys(quantities).forEach(k=>quantities[k]=0);drawRows();drawQuote();});
}
const form=qs('#contact-form');
if(form){form.addEventListener('submit',e=>{
 e.preventDefault();const name=form.elements.fullName.value.trim(),email=form.elements.email.value.trim(),phone=form.elements.phone.value.trim(),message=form.elements.message.value.trim();const status=qs('#form-status');
 let error='';
 if(name.length<2)error='Enter a name with at least 2 characters.';
 else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))error='Enter a valid email address.';
 else if(phone.replace(/\D/g,'').length<9||phone.replace(/\D/g,'').length>15)error='Enter a valid phone number (9–15 digits).';
 else if(message.length<10)error='Please write a message with at least 10 characters.';
 status.className='form-status '+(error?'error':'success');
 status.textContent=error||'All fields are valid. This is a demonstration only — no message has been sent.';
 if(!error)form.reset();
});}
})();
