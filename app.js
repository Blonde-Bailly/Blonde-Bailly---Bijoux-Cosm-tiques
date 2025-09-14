// app.js – Blonde Bailly PWA

// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(reg => {
        console.log('✅ Service Worker enregistré avec succès :', reg.scope);
      })
      .catch(err => {
        console.error('❌ Échec de l’enregistrement du Service Worker :', err);
      });
  });
}
// Chargement dynamique des produits de beauté
fetch('produits.json')
  .then(response => response.json())
  .then(produits => {
    const container = document.getElementById('produits-container');
    
    produits.forEach((produit, index) => {
      const card = document.createElement('div');
      card.className = 'produit-card';
      card.style.animationDelay = `${index * 0.1}s`; // delay animation

      card.innerHTML = `
        <h3>${produit.nom}</h3>
        <p><strong>${produit.prix}</strong></p>
        <p>${produit.description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des produits:', error);
  });
