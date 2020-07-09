(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict




//popupgalerie

//console.log("Bonjour");


//popupgalerie galerie

let galerie = [

  {
    id : "popupgalerie",
    nom : "Sacré Coeur Paris Autumn-2019",
    img : "01-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Bir-Hakim Paris Été-2017",
  img : "02-galerie.jpeg",

},
{
  id : "popupgalerie",
  nom : "Elche Alicante Été-2019",
  img : "03-galerie.jpeg",

},
{
  id : "popupgalerie",
  nom : "Manhattan New York Été-2015",
  img : "04-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Central park New York Été-2015",
  img : "05-galerie.jpeg",

},
{
  id : "popupgalerie",
  nom : "Pont Brooklyn New York Été-2015",
  img : "06-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "San Guiseppe Napoli Été-2019",
  img : "07-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Le Marais Paris Printemps-2016",
  img : "08-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Cour Saint-André Paris Autumn-2015",
  img : "09-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "La seine Paris Printemps-2019",
  img : "10-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Gardens of Augustus Capri Été-2019",
  img : "11-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Les Grands Boulevards Paris Hiver-2019",
  img : "12-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Centre Historico Málaga Été-2019",
  img : "13-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Plage La Marsa Tunis Été-2019",
  img : "14-galerie.jpeg",
},
{
  id : "popupgalerie",
  nom : "Médina Tunis Été-2019",
  img : "15-galerie.jpeg",
}

];

let  contenupopgalerie = "";

//console.log(galerie.length + 1 );
//console.log(galerie[0].img);



for (let i = 1; i < galerie.length + 1 ; i++) {
  //console.log(i);
  contenupopgalerie += "<div id=\"" + galerie[i-1].id + i + "\" class=\"portfolio-modal modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">";
  contenupopgalerie += "<div class=\"modal-dialog\">";
  contenupopgalerie += "<div class=\"modal-content\">";
  contenupopgalerie += "<div class=\"close-modal\" data-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"/></div>";
  contenupopgalerie += "<div class=\"container\">";
  contenupopgalerie += "<div class=\"row justify-content-center\">";
  contenupopgalerie += "<div class=\"col-lg-8\">";
  contenupopgalerie += "<div class=\"modal-body\">";
  contenupopgalerie += "<!-- Project Details Go Here-->";
  contenupopgalerie += "<h2 class=\"text-uppercase\">" + galerie[i-1].nom + "</h2>";
  contenupopgalerie += "<img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/" + galerie[i-1].img + "\" alt=\"\" />";
  contenupopgalerie += "</div>";
  contenupopgalerie += "</div>";
  contenupopgalerie += "</div>";
  contenupopgalerie += "</div>";
  contenupopgalerie += "</div>";
  contenupopgalerie += "</div>";
  contenupopgalerie += "</div>";
}

console.log(contenupopgalerie);

document.querySelector(".popupgalerieGalerie").innerHTML = contenupopgalerie;



// popup Projet

let projet = [
  {
      id : "popup",
      nom : "Webannonce",
      info: "Partager votre annonce en ligne.",
      img : "photoprojet1.jpeg",
      description : "Réaliser un site web dynamique en PHP (Framework utilisé Symfony) qui permet aux internautes de déposer  des annonces en ligne.",
      date : "Date: Janvier 2020",
      categorie : "Illustration"
  },
  {
      id : "popup",
      nom : "Baskets en ligne",
      info: "Acheter des baskets en ligne.",
      img : "photoprojet2.jpg",
      description : "Réaliser un site web e-commerce en PHP (Framework utilisé Symfony) qui permet de vendre des baskets en ligne.",
      date : "Date: Mars 2020",
      categorie : "Illustration"
  }
];

let  contenuPopup = "";

//console.log(projet.length + 1 );
//console.log(projet[0].img);



for (let i = 1; i < projet.length + 1 ; i++) {
  //console.log(i);
  contenuPopup += "<div id=\"" + projet[i-1].id + i + "\" class=\"portfolio-modal modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">";
  contenuPopup += "<div class=\"modal-dialog\">";
  contenuPopup += "<div class=\"modal-content\">";
  contenuPopup += "<div class=\"close-modal\" data-dismiss=\"modal\"><img src=\"assets/img/close-icon.svg\"/></div>";
  contenuPopup += "<div class=\"container\">";
  contenuPopup += "<div class=\"row justify-content-center\">";
  contenuPopup += "<div class=\"col-lg-8\">";
  contenuPopup += "<div class=\"modal-body\">";
  contenuPopup += "<!-- Project Details Go Here-->";
  contenuPopup += "<h2 class=\"text-uppercase\">" + projet[i-1].nom + "</h2>";
  contenuPopup += "<p class=\"item-intro text-muted\">" +projet[i-1].info + "</p>";
  contenuPopup += "<img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/" + projet[i-1].img + "\" alt=\"\" />";
  contenuPopup += "<p> \" " + projet[i-1].description + "\" </p>";
  contenuPopup += "<ul class=\"list-inline\">";
  contenuPopup += "<li>Date: \"" + projet[i-1].date + "\"</li>";
  contenuPopup += "<li>Category: \"" + projet[i-1].categorie + "\"</li>";
  contenuPopup += "</ul>";
  contenuPopup += "<button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\"><i class=\"fas fa-times mr-1\"></i>Close Project</button>";
  contenuPopup += "</div>";
  contenuPopup += "</div>";
  contenuPopup += "</div>";
  contenuPopup += "</div>";
  contenuPopup += "</div>";
  contenuPopup += "</div>";
  contenuPopup += "</div>";
}

console.log(contenuPopup);

document.querySelector(".popupProjet").innerHTML = contenuPopup;


//mouse ouver la sourie sur la balise p

$("p").mouseover(function(){
  $(this).css("font-size", "1.3em");
})

//mouseleave la sorie sort de la zone


$("p").mouseout(function(){
  $(this).css("font-size", "1em");
})


$("a").mouseover(function(){
$(this).css("font-size", "1.2em");
})

//mouseleave la sorie sort de la zone


$("a").mouseout(function(){
$(this).css("font-size", "1em");
})








