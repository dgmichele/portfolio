const skillsData = [
  {
    image: "assets/images/html.webp",
    alt: "html",
    title: "Html",
    level: "intermedio"
  },
  {
    image: "assets/images/css.webp",
    alt: "css",
    title: "Css",
    level: "intermedio"
  },
  {
    image: "assets/images/javascript.webp",
    alt: "javascript",
    title: "JavaScript",
    level: "base"
  },
  {
    image: "assets/images/react.webp",
    alt: "react",
    title: "React",
    level: "base"
  },
  {
    image: "assets/images/web-design.webp",
    alt: "web-design",
    title: "Web Design",
    level: "intermedio"
  }
];

// Funzione per creare una singola skill card
function createSkillCard(skill) {
  return `
    <div class="skill-grid">
      <img src="${skill.image}" class="skill-img" alt="${skill.alt}">
      <h3>${skill.title}</h3>
      <span class="skill-level">Livello: ${skill.level}</span>
    </div>
  `;
}

// Funzione per renderizzare tutte le skill
function renderSkills() {
  const skillContainer = document.querySelector('.skill-container');
  if (skillContainer) {
    skillContainer.innerHTML = skillsData.map(skill => createSkillCard(skill)).join('');
  }
}

// Inizializza le skill quando il DOM è caricato
document.addEventListener('DOMContentLoaded', renderSkills);