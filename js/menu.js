var Menu = function(items, id="menu") {
  var menu = document.getElementById(id);
  var menuButton = document.getElementById('menuButton');

  let menuState = ["closed", "open"];

  for (let item of items) {
    let menuItem = document.createElement("div");
    menuItem.id = item.name;
    menuItem.addEventListener("click", function(e) {
      item.callback(e, menu, item);
    });
    menuItem.style.backgroundImage = "url('" + item.image + "')";
    menu.appendChild(menuItem);
  }

  menuButton.addEventListener("click", function(e){
    [menuState[0], menuState[1]] = [menuState[1], menuState[0]];
    menu.classList.remove(menuState[1]);
    menu.classList.add(menuState[0]);
  });
};
