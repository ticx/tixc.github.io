// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

// open menu

document.getElementById('hamburger').onclick = Topnavmenu;
function Topnavmenu () {
	 var menu = document.getElementById('modile-nav-menu').style.display;
	if (menu == 'block') {
		document.getElementById('modile-nav-menu').style.display = 'none';
	}
	else {
		document.getElementById('modile-nav-menu').style.display = 'block';
	}
}

// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({

//     loop: true,
//     margin: 20,
//     items: 4,
//     nav: true
//   });
// });






