function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

let Width = window.innerWidth;
if (Width < 801) {
    document.getElementById("pOn").textContent = "Entwickler, HTML/CSS/JS/Python, sucht Ausbildung als Fachinformatiker Anwendungsentwicklung."
}




const translations = {
  de: {
    home: "<span>Startseite</span>",
    projects: "<span>Projekte</span>",
    education: "<span>Bildung</span>",
    role: "Fachinformatiker für Anwendungsentwicklung",
    on: "Offen für neue Chancen · Umzugsbereit",
    pOn_mobile: "Entwickler, HTML/CSS/JS/Python, sucht Ausbildung als Fachinformatiker Anwendungsentwicklung.",
    pOn:"Entwickler mit praktischer Erfahrung in HTML, CSS, JavaScript und Python. Abgeschlossene Webentwicklungsausbildung, PKW Führerschein",
    cv: "⬇ Lebenslauf",
    contact:"Kontact"
    
  },
  en: {
    home: "<span>Home</span>",
    projects: "<span>Projects</span>",
    education: "<span>Education</span>",
    role:"IT specialist for application development",
    on: "Open to new opportunities · Ready to relocate",
    pOn_mobile: "Developer, HTML/CSS/JS/Python, seeks apprenticeship as an IT specialist in application development.",
    pOn:"Developer with practical experience in HTML, CSS, JavaScript, and Python. Completed web development training, driver's license (Class B).",
    cv: "⬇ Download CV",
    contact:"Contact",
  },
  fr: {
    home: "<span>Accueil</span>",
    projects: "<span>Projets</span>",
    education: "<span>Éducation</span>",
    role:"Spécialiste informatique en développement d'applications",
    on: "Ouvert aux nouvelles opportunités · Prêt à déménager",
    pOn_mobile:"Développeur HTML/CSS/JS/Python, recherche un apprentissage en tant que spécialiste informatique en développement d'applications.",
    pOn:"Développeur possédant une expérience pratique en HTML, CSS, JavaScript et Python. Formation en développement web complétée. Permis de conduire (catégorie B).",
    cv: "⬇ Télécharger CV",
    contact:"Me contacter",
  },
};

function switchLanguage(lang) {
  hideSidebar()
  
  document.getElementById("home").innerHTML = translations[lang].home
  
  document.getElementById("projects").innerHTML = translations[lang].projects
  
  document.getElementById("education").innerHTML = translations[lang].education
    
  document.getElementById("home_sidebar").textHTML = translations[lang].home
  
  document.getElementById("projects_sidebar").textHTML = translations[lang].projects
  
  document.getElementById("education_sidebar").textHTML = translations[lang].education
  
  document.getElementById("role").textContent = translations[lang].role
  
  document.getElementById("on").textContent = translations[lang].on

  document.getElementById("lebenslaufButton").textContent = translations[lang].cv
  document.getElementById("kontactButton").textContent = translations[lang].contact

  let Width = window.innerWidth;

if (Width < 801) {
    document.getElementById("pOn").textContent = translations[lang].pOn_mobile
}
else{
    document.getElementById("pOn").textContent = translations[lang].pOn
}


}