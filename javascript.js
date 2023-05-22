const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-items");
var sections = document.querySelectorAll("section");

hamburger.addEventListener("click", (event) => {
    event.preventDefault();
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n. 
    addEventListener("click", (event) => {
        event.preventDefault();
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    }
    ));

// smooth scrolling start
$(document).ready(function(){
  $("a").on("click", function(event){
    if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top,
      }, 900,
      function(){
        window.location.hash = hash;
      });
    }
  });
// smooth scrolling end

	onscroll = function(){
		var scrollPosition = document.documentElement.scrollTop;
		sections.forEach((section) => {
			if(scrollPosition >= section.offsetTop + section.offsetHeight){
				var currentId = section.attributes.id.value;
				removeAllActiveClasses();
				addActiveClass(currentId);
			}
		});
	};
		var removeAllActiveClasses = function(){
			document.querySelectorAll("nav a").forEach(el => {
				el.classList.remove("activeNav")
			});
		};
		var addActiveClass = function(id){
			console.log(id);
			var selector = `nav a [href="#${id}"]`;
			document.querySelector(selector).classList.add("activeNav");
		};
		onscroll = function (){
			var scrollPosition = this.document.documentElement.scrollTop;
			sections.forEach((section) => {
				if( scrollPosition >= section.offsetTop - section.offsetHeight * 0.15 &&
					scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.15

					){
						var currentId = section.attributes.id.value;
						removeAllActiveClasses();
						addActiveClass(currentId);
					}
			});
		};
		var removeAllActiveClasses = function(){
			document.querySelectorAll(".list-nav .nav-link").forEach((el) => {
				el.classList.remove("activeNav");
			});
		};
		var addActiveClass = function(id){
			var selector = `.list-nav .nav-link[href="#${id}"]`;
			document.querySelector(selector).classList.add("activeNav");
		};

 
});



