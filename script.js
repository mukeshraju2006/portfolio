document.addEventListener('DOMContentLoaded',()=>{
 const year=document.querySelectorAll('[data-year]');year.forEach(el=>el.textContent=new Date().getFullYear());
 const current=(location.pathname.split('/').pop()||'index.html');
 document.querySelectorAll('.site-nav .nav-link').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 const nav=document.querySelector('.navbar-collapse');document.querySelectorAll('.navbar-collapse .nav-link').forEach(a=>a.addEventListener('click',()=>{if(nav?.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(nav).hide()}));
});