const display_mobile_menu = () => {
  let menu_items = document.getElementById("menu_items");
  let icon = document.getElementById("menu_icon");

  if (menu_items.classList.contains("hide_menu_items")) {
    menu_items.classList.remove("hide_menu_items");
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
    menu_items.classList.add("hide_menu_items");
  }
};

const init = () => {
  // Obtaing a reference to the element on the DOM
  let toggle_menu = document.getElementById("toggle_menu");

  toggle_menu.onclick = display_mobile_menu;
};

// check full page is loaded
window.onload = init;
