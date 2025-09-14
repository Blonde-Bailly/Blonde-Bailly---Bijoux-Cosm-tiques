// app.js – Blonde Bailly PWA

// ✅ Enregistrement du Service Worker
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

// ✅ Chargement dynamique des produits depuis produits.json
fetch('produits.json')
  .then(response => response.json())
  .then(produits => {
    const container = document.getElementById('produits-container');

    produits.forEach((produit, index) => {
      const card = document.createElement('div');
      card.className = 'produit-card';
      card.style.animationDelay = `${index * 0.1}s`;

      card.innerHTML = `
        <h3>${produit.nom}</h3>
        <p><strong>${produit.prix}</strong></p>
        <p>${produit.description}</p>
        <button class="btn-panier">Ajouter au panier</button>
      `;

      // ✅ Événement clic sur le bouton
      const bouton = card.querySelector('.btn-panier');
      bouton.addEventListener('click', () => {
        alert(`🛒 "${produit.nom}" a été ajouté au panier !`);
        // 🔄 À remplacer plus tard par un stockage localStorage ou gestion panier réelle
      });

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des produits:', error);
  });
