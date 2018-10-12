

var Menu = function(items) {
  var menu = document.getElementById('menu');
  var tag = document.getElementById('tag');

  for (item of items) {
    let menuItem = document.createElement("div");
    menuItem.id = item.name;
    menuItem.addEventListener("click", item.callback);
    menu.appendChild(menuItem);
  }
};

var lights = document.getElementById('lights');
var save = document.getElementById('save');

var backgrounds = ["white", "black"];
var images = ["img/moon.svg", "img/sun.svg"];
var inverse = [0, 100];
var menuState = ["closed", "open"];
tag.addEventListener("click", function(e){
  [menuState[0], menuState[1]] = [menuState[1], menuState[0]];
  menu.classList.remove(menuState[1]);
  menu.classList.add(menuState[0]);
});
lights.addEventListener("click", function(e){
  [backgrounds[0], backgrounds[1]] = [backgrounds[1], backgrounds[0]];
  [images[0], images[1]] = [images[1], images[0]];
  [inverse[0], inverse[1]] = [inverse[1], inverse[0]];
  document.body.style.backgroundColor = backgrounds[0];
  lights.style.backgroundImage = "url('" + images[0] + "')";
  menu.style.filter = "invert(" + inverse[0] + "%)";
});
save.addEventListener("click", function(e) {
  var image = document.getElementById('defaultCanvas0').toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
  window.location.href=image;
});
