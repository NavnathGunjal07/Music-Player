
window.onload = function() {
    alert("To play song click on play me in singlescreen page ... ");
}
let playme = document.getElementById("play-me");

playme.onclick = function() {
    document.getElementById("play-song").play();
}
let playme1 = document.getElementById("playme12");

playme1.onclick = function() {
    document.getElementById("playme11").play();
}