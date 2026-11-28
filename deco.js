(function(){
  function add(parent, cls, src){ var i=document.createElement('img'); i.className=cls; i.src=src; i.alt=''; i.setAttribute('aria-hidden','true'); parent.appendChild(i); return i; }
  window.addEventListener('load', function(){
    var grid=document.querySelector('.heritage-hub .photo-grid');
    if(grid){
      add(grid,'dz-garl tl','garland.png'); add(grid,'dz-garl tr','garland.png');
      add(grid,'dz-garl bl','garland.png'); add(grid,'dz-garl br','garland.png');
      add(grid,'dz-bauble','baubles.png');
      // snow resting on the top edge of each card frame (outside the card, so it is not clipped)
      var g=grid.getBoundingClientRect();
      grid.querySelectorAll('.album-card').forEach(function(card){
        var r=card.getBoundingClientRect();
        var s=document.createElement('div');
        s.className='dz-snow';
        s.setAttribute('aria-hidden','true');
        s.style.left=(r.left-g.left+10)+'px';
        s.style.top=(r.top-g.top-12)+'px';
        s.style.width=(r.width-20)+'px';
        grid.appendChild(s);
      });
    }
    var hero=document.querySelector('.annunciation-artwork');
    if(hero){ var h=document.createElement('div'); h.className='dz-hero-snow'; h.setAttribute('aria-hidden','true'); hero.appendChild(h); }
  });
})();
