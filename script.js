function showImage(imageSrc) {
    // Créez une fenêtre modale pour afficher l'image en grand
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <img src="${imageSrc}" alt="NFT">
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    // Fonction pour fermer la fenêtre modale
    var modal = document.querySelector('.modal');
    modal.parentNode.removeChild(modal);
}
