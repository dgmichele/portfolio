const projectsData = [
  {
    image: "assets/images/bich-immobiliare.webp",
    alt: "bich-immobiliare",
    type: "Progetto personale",
    title: "Bich Immobiliare",
    description: "Questo è il mio attuale progetto e mi occupo della strategia digitale dell'attività, dal design del sito, ai social e alla comunicazione.",
    url: "https://bichimmobiliare.it/"
  },
  {
    image: "assets/images/javascript-base.webp",
    alt: "javascript-base",
    type: "Progetto Start2Impact",
    title: "Counter JavaScript",
    description: "Questo è il progetto di JavaScript base del Master in Sviluppo Web di Start2impact.",
    url: "https://dgmichele.github.io/counter/"
  },
  {
    image: "./assets/images/calcolatore-emissioni.webp",
    alt: "calcolatore-emissioni",
    type: "Esercizio",
    title: "Calcolatore emissioni",
    description: "Questo è un semplice calcolatore di emissioni di carbonio che ho sviluppato per fare pratica con JavaScript.",
    url: "https://dgmichele.github.io/calcolatore-emissioni/"
  },
  {
    image: "./assets/images/hacker-news.webp",
    alt: "javascript-avanzato",
    type: "Progetto Start2Impact",
    title: "HackerNews",
    description: "Questo è il progetto di JavaScript avanzato del Master in Sviluppo Web di Start2impact.",
    url: "https://dgmichele.github.io/hacker-news/"
  },
  {
    image: "./assets/images/sunnee-2.webp",
    alt: "typescript",
    type: "Progetto Start2Impact",
    title: "Sunnee",
    description: "Questo è il progetto di TypeScript del Master in Sviluppo Web di Start2impact.",
    url: "https://github.com/dgmichele/sunnee"
  },
  {
    image: "./assets/images/veggy.webp",
    alt: "react",
    type: "Progetto Start2Impact",
    title: "Veggy",
    description: "Questo è il progetto di React del Master in Sviluppo Web di Start2impact.",
    url: "https://your-veggy.netlify.app/"
  },
  {
    image: "./assets/images/orizon.webp",
    alt: "react",
    type: "Progetto Start2Impact",
    title: "Orizon",
    description: "Questo è il progetto di Node.js del Master in Sviluppo Web di Start2impact.",
    url: "https://github.com/dgmichele/orizon"
  },
  {
    image: "./assets/images/gestionale-contratti.webp",
    alt: "react",
    type: "Progetto Start2Impact",
    title: "Gestionale contratti",
    description: "Questo è il progetto oggetto del compito finale del Master in Sviluppo Web di Start2impact.",
    url: "https://gestionale-contratti-base.netlify.app/"
  }
];

// Funzione per creare una singola project card
function createProjectCard(project) { 
  return `
    <div class="job-grid">
      <div class="job-grid-image">
        <img src="${project.image}" class="job-img" alt="${project.alt}">
      </div>
      <div class="job-grid-description">
        <span class="job-type">${project.type}</span>
        <h3>${project.title}</h3>
        <p class="text job-description">${project.description}</p>
        <a class="my-btn type-2 job-button" href="${project.url}" rel="noopener" target="_blank">Scopri di più <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  `;
}

// Funzione per renderizzare tutti i progetti
function renderProjects() {
  const jobContainer = document.querySelector('.job-container');
  if (jobContainer) {
    jobContainer.innerHTML = projectsData.map(project => createProjectCard(project)).join('');
  }
}

// Inizializza i progetti quando il DOM è caricato
document.addEventListener('DOMContentLoaded', renderProjects);