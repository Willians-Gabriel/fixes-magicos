// ===== CARROSSEL 3D COM EFEITO DE CARTA - MELHORADO =====

let carousel3d = document.getElementById('carousel3d');
let isCarouselRunning = true;

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎠 Carrossel 3D do Fixes Mágicos inicializado!');
    
    if (carousel3d) {
        const cards3d = document.querySelectorAll('.card-3d');
        
        cards3d.forEach((card, index) => {
            card.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log(`🃏 Card ${index + 1} clicado!`);
                
                // Parar a rotação
                if (isCarouselRunning) {
                    carousel3d.classList.add('paused');
                    isCarouselRunning = false;
                    console.log('⏸️ Rotação pausada');
                } else {
                    carousel3d.classList.remove('paused');
                    isCarouselRunning = true;
                    console.log('▶️ Rotação retomada');
                }
                
                // Virar a carta
                flipCard3d(this);
            });
            
            // Efeito hover nas imagens
            const img = card.querySelector('.card-3d-front img');
            if (img) {
                img.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.08)';
                });
                
                img.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            }
        });
        
        console.log(`✅ ${cards3d.length} cards do carrossel 3D configurados!`);
    } else {
        console.warn('⚠️ Elementos do carrossel 3D não encontrados');
    }
});

function flipCard3d(card) {
    card.classList.toggle('flipped');
}

document.addEventListener('visibilitychange', function() {
    if (!carousel3d) return;
    
    if (document.hidden) {
        carousel3d.classList.add('paused');
    } else if (isCarouselRunning) {
        carousel3d.classList.remove('paused');
    }
});

window.debug3dCarousel = function() {
    console.log('=== DEBUG DO CARROSSEL 3D ===');
    console.log('Total de cards:', document.querySelectorAll('.card-3d').length);
    console.log('Cards virados:', document.querySelectorAll('.card-3d.flipped').length);
    console.log('Carrossel rodando:', isCarouselRunning);
    console.log('=============================');
};
