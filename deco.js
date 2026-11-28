(function(){
  function add(parent, cls, src){ var i=document.createElement('img'); i.className=cls; i.src=src; i.alt=''; i.setAttribute('aria-hidden','true'); parent.appendChild(i); return i; }
  window.addEventListener('load', function(){
    var grid=document.querySelector('.heritage-hub .photo-grid');
    if(grid){
      add(grid,'dz-garl tl','garland.png'); add(grid,'dz-garl tr','garland.png');
      add(grid,'dz-garl bl','garland.png'); add(grid,'dz-garl br','garland.png');
      add(grid,'dz-bauble','baubles.png');
    }
    var hero=document.querySelector('.annunciation-artwork');
    if(hero){ var h=document.createElement('div'); h.className='dz-hero-snow'; h.setAttribute('aria-hidden','true'); hero.appendChild(h); }
  });
})();
