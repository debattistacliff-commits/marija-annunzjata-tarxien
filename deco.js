(function(){
  function add(parent, cls, src){ var i=document.createElement('img'); i.className=cls; i.src=src; i.alt=''; i.setAttribute('aria-hidden','true'); parent.appendChild(i); return i; }
  function snow(parent, cls){ var d=document.createElement('div'); d.className=cls; d.setAttribute('aria-hidden','true'); parent.appendChild(d); }
  window.addEventListener('load', function(){
    var grid=document.querySelector('.heritage-hub .photo-grid');
    if(grid){
      add(grid,'dz-garl tl','garland.png'); add(grid,'dz-garl tr','garland.png');
      add(grid,'dz-garl bl','garland.png'); add(grid,'dz-garl br','garland.png');
      add(grid,'dz-bauble','baubles.png');
    }
    document.querySelectorAll('.sunset-home .heritage-hub .album-card').forEach(function(card){
      var img=card.querySelector('img'); if(img){ snow(card,'dz-snow'); }
    });
    var hero=document.querySelector('.annunciation-artwork');
    if(hero){ snow(hero,'dz-hero-snow'); }
  });
})();
