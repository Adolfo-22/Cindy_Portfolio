const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
window.addEventListener('scroll', () => { const scrollable = document.documentElement.scrollHeight - window.innerHeight; const progress = scrollable ? (window.scrollY / scrollable) * 100 : 0; document.querySelector('#reading-progress').style.width = `${progress}%`; }, {passive:true});
