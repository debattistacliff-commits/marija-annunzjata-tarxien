// Christmas 2026: falling snow. Off for anyone who asks for less motion.
(function(){
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var layer = document.createElement("div");
  layer.className = "xmas-snowfall";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);
  var count = window.innerWidth < 520 ? 18 : 34;
  for (var i = 0; i < count; i++) {
    var flake = document.createElement("img");
    flake.src = "christmas-snowflake.svg";
    flake.alt = "";
    flake.className = "xmas-flake";
    flake.style.width = (8 + Math.random() * 14) + "px";
    flake.style.left = (Math.random() * 100) + "vw";
    flake.style.animationDuration = (9 + Math.random() * 12) + "s";
    flake.style.animationDelay = (-Math.random() * 20) + "s";
    layer.appendChild(flake);
  }
})();
