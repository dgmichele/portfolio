class AntibotCTA {
  constructor() {
    this.clickCount = 0;
    this.maxClicks = 3;
    this.email = 'dgmichele96@gmail.com';
    this.copyTimeout = null;
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupCTA();
    });
  }

  setupCTA() {
    const ctaButton = document.querySelector('.cta .my-btn');
    if (ctaButton) {
      // Rimuovi l'href originale
      ctaButton.removeAttribute('href');
      ctaButton.style.cursor = 'pointer';
      
      // Aggiungi event listener
      ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleClick(ctaButton);
      });
    }
  }

  handleClick(button) {
    this.clickCount++;
    
    if (this.clickCount < this.maxClicks) {
      // Aggiorna il testo del bottone per mostrare i click rimanenti
      const remainingClicks = this.maxClicks - this.clickCount;
      button.innerHTML = `Clicca ancora ${remainingClicks} ${remainingClicks === 1 ? 'volta' : 'volte'}`;
      
      // Aggiungi un piccolo effetto visivo
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 100);
      
    } else if (this.clickCount === this.maxClicks) {
      // Mostra l'email con l'icona copia
      this.showEmail(button);
    }
  }

  showEmail(button) {
    // Sostituisci il contenuto del bottone con email e icona copia
    button.innerHTML = `
      <span style="margin-right: 10px;">${this.email}</span>
      <i class="fa-solid fa-copy copy-icon" style="cursor: pointer;"></i>
    `;
    
    // Aggiungi event listener per l'icona copia
    const copyIcon = button.querySelector('.copy-icon');
    copyIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      this.copyEmail(copyIcon);
    });
  }

  async copyEmail(icon) {
    try {
      // Copia l'email negli appunti
      await navigator.clipboard.writeText(this.email);
      
      // Cambia l'icona in tick
      icon.className = 'fa-solid fa-check';
      icon.style.color = '#28a745';
      
      // Reset dell'icona dopo 3 secondi
      if (this.copyTimeout) {
        clearTimeout(this.copyTimeout);
      }
      
      this.copyTimeout = setTimeout(() => {
        icon.className = 'fa-solid fa-copy';
        icon.style.color = '';
      }, 3000);
      
    } catch (err) {
      console.error('Errore nella copia:', err);
      // Fallback per browser che non supportano clipboard API
      this.fallbackCopy();
    }
  }

  fallbackCopy() {
    // Metodo di fallback per la copia
    const textArea = document.createElement('textarea');
    textArea.value = this.email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      console.log('Email copiata con metodo fallback');
    } catch (err) {
      console.error('Errore nel fallback copy:', err);
    }
    
    document.body.removeChild(textArea);
  }

  reset() {
    // Reset dello stato per tornare alla condizione iniziale
    this.clickCount = 0;
    const ctaButton = document.querySelector('.cta .my-btn');
    if (ctaButton) {
      ctaButton.innerHTML = 'Contattami';
      if (this.copyTimeout) {
        clearTimeout(this.copyTimeout);
        this.copyTimeout = null; 
      }
    }
  }
}

// Inizializza la classe
const antibotCTA = new AntibotCTA();

// Reset automatico al caricamento della pagina
window.addEventListener('load', () => {
  antibotCTA.reset();
});