// language switch: show elements with data-lang attr
function switchLang(lang){
  document.querySelectorAll('[data-lang]').forEach(el=>{
    el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
  });
}

// hamburger toggle (shows a small floating menu on desktop/mobile)
function toggleMenu(){
  const existing = document.getElementById('floatingMenu');
  if(existing){
    existing.remove();
    return;
  }
  const menu = document.createElement('div');
  menu.id = 'floatingMenu';
  menu.className = 'nav-expanded';
  menu.innerHTML = `
    <a href="index_2.html">HOME</a>
    <a href="overview.html">概要</a>
    <a href="members.html">メンバー</a>
    <a href="publications.html">業績</a>
    <div style="display:flex;gap:8px;padding-top:6px">
      <button onclick="(function(){switchLang('ja');document.getElementById('floatingMenu')?.remove();})()">日本語</button>
      <button onclick="(function(){switchLang('en');document.getElementById('floatingMenu')?.remove();})()">English</button>
    </div>
  `;
  document.body.appendChild(menu);
  // close clicking outside
  setTimeout(()=>{
    window.addEventListener('click', function handler(e){
      if(!menu.contains(e.target) && !e.target.closest('.hamburger')){
        menu.remove();
        window.removeEventListener('click', handler);
      }
    });
  }, 10);
}

// ensure initial language is Japanese
document.addEventListener('DOMContentLoaded', ()=>{ switchLang('ja'); });

// keyboard support for news container
document.addEventListener('keydown', (e)=>{
  const nc = document.getElementById('news-container');
  if(!nc) return;
  if(document.activeElement === nc || nc.contains(document.activeElement)){
    if(e.key === 'ArrowDown') { nc.scrollBy({top:60,behavior:'smooth'}); e.preventDefault(); }
    if(e.key === 'ArrowUp') { nc.scrollBy({top:-60,behavior:'smooth'}); e.preventDefault(); }
  }
});
