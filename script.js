// To initialize, we take every nav item and set up a click handler.
function initialize() {
  var navItems = document.querySelectorAll('.navItem');
  for (var i = 0; i < navItems.length; i++) {
    navItems.item(i).addEventListener('click', onClicked);
  }
  resetNavItems();
  hideAllContent();
  document.getElementById('homeNavItem').className = 'navItem selectedNavItem';
  document.getElementById('homeContent').style.display = 'inherit';
}

// Handles when a navItem is clicked. When one is clicked, we
// reset the class names of the other navItems, mark our as set,
// hide all display divs, and show the one ours is tied to.
function onClicked() {
  resetNavItems();
  this.className = 'navItem selectedNavItem';
  var id = this.id;
  var prefix = id.substring(0, id.lastIndexOf('NavItem'));
  var contentId = prefix + "Content";
  hideAllContent();
  document.getElementById(contentId).style.display = 'inherit';
}

function navItemClicked(link, content) {
}

function resetNavItems() {
  var navItems = document.querySelectorAll('.navItem');
  for (var i = 0; i < navItems.length; i++) {
    navItems.item(i).className = 'navItem';
  }
}

function hideAllContent() {
	var contentItems = document.querySelectorAll('.content');
  for (var i = 0; i < contentItems.length; i++) {
    contentItems.item(i).style.display = 'none';
  }
}
