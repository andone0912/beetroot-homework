const menuItems = document.querySelector('.hidden-list')

function openMenu() {
  if(menuItems.classList.contains('off')) {
    menuItems.classList.add('on')
    menuItems.classList.remove('off')
    document.querySelector('.hidden-nav-bar').classList.add('enlarge')
  } else if (!menuItems.classList.contains('off')) {
    menuItems.classList.add('off')
    menuItems.classList.remove('on')
    document.querySelector('.hidden-nav-bar').classList.remove('enlarge')
  }
}