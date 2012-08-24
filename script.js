function navItemClicked(link, content) {
	var linkElem = document.getElementById(link);
	var contentElem = document.getElementById(content);
	clearLiBackgrounds();
	linkElem.className='selectedNavItem';
	hideAllContent();
	contentElem.style.display = 'inherit';
}

function clearLiBackgrounds() {
	document.getElementById('homeNavItem').className = '';
	document.getElementById('blogNavItem').className = '';
	document.getElementById('projectNavItem').className = '';
	document.getElementById('videoNavItem').className = '';
}

function hideAllContent() {
	document.getElementById('homeContent').style.display = 'none';
	document.getElementById('blogContent').style.display = 'none';
	document.getElementById('projectContent').style.display = 'none';
	document.getElementById('videoContent').style.display = 'none';
}
