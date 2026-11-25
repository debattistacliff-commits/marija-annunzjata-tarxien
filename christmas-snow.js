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

  // A few extra flakes over the picture's title. They sit on top of the picture and do not change it.
  var picture = document.getElementById("artwork");
  if (picture) {
    var titleLayer = document.createElement("div");
    titleLayer.className = "xmas-title-snow";
    titleLayer.setAttribute("aria-hidden", "true");
    picture.appendChild(titleLayer);
    for (var j = 0; j < 14; j++) {
      var extra = document.createElement("img");
      extra.src = "christmas-snowflake.svg";
      extra.alt = "";
      extra.className = "xmas-flake";
      extra.style.width = (7 + Math.random() * 10) + "px";
      extra.style.left = (Math.random() * 100) + "%";
      extra.style.animationDuration = (8 + Math.random() * 8) + "s";
      extra.style.animationDelay = (-Math.random() * 14) + "s";
      titleLayer.appendChild(extra);
    }
  }
})();
