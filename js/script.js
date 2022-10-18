// My Scripts

console.log('Page Loaded');

var demo4 = new CircleType(document.getElementById("circletext"));
window.addEventListener("resize", function updateRadius() {
  demo4.radius(demo4.element.offsetWidth / 2);
});
updateRadius(90);