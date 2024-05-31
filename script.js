document.addEventListener("DOMContentLoaded", function() {
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
  });

  // Mostra la pagina home di default
  document.getElementById("home").style.display = "block";

  // Nascondi le altre pagine
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("blog").style.display = "none";

  // Gestisci il click sui link della tendina
  var links = dropdownContent.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var target = this.getAttribute("href").substring(1);
      var pages = document.getElementsByTagName("section");

      // Nascondi tutte le pagine
      for (var j = 0; j < pages.length; j++) {
        pages[j].style.display = "none";
      }

      // Mostra la pagina corrispondente al link cliccato
      document.getElementById(target).style.display = "block";

      // Chiudi la tendina
      dropdownContent.classList.remove("show");
    });
  }

  // Aggiungi un event listener per il link 'Home'
  var homeLink = document.querySelector("a[href='#home']");
  homeLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    var target = this.getAttribute("href").substring(1);
    var pages = document.getElementsByTagName("section");

    // Nascondi tutte le pagine
    for (var j = 0; j < pages.length; j++) {
      pages[j].style.display = "none";
    }

    // Mostra la pagina home
    document.getElementById(target).style.display = "block";

    // Chiudi la tendina se è aperta
    dropdownContent.classList.remove("show");
  });
});
