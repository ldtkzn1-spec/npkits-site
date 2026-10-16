const b=document.querySelector('.burger'),n=document.querySelector('.nav');
b&&b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
f.querySelectorAll('[required]').forEach(i=>{const bad=!i.value.trim()||(i.type==='tel'&&i.value.replace(/\D/g,'').length<10);i.classList.toggle('err',bad);if(bad)ok=false});
if(ok){f.querySelector('.ok').hidden=false;f.querySelector('button').disabled=true;f.reset()}}));
