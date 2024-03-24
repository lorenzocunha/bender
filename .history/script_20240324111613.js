document.addEventListener('mousemove', (event) => {
    const svg = document.querySelector('svg');
    const eyes = document.querySelectorAll('.eyeGroup');
    eyes.forEach(eyeGroup => {
        // Transforma a posição do mouse para o espaço do coordenadas do SVG
        let point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        let cursorPoint = point.matrixTransform(svg.getScreenCTM().inverse());

        // Calcula a posição relativa da pupila dentro do grupo de olhos
        const eyeCX = parseFloat(eyeGroup.getAttribute('data-eye-cx') || 0);
        const eyeCY = parseFloat(eyeGroup.getAttribute('data-eye-cy') || 0);
        const dx = cursorPoint.x - eyeCX;
        const dy = cursorPoint.y - eyeCY;
        const angle = Math.atan2(dy, dx);
        const distance = Math.min(20, Math.sqrt(dx * dx + dy * dy));
        
        // Atualiza a posição da pupila
        const pupil = eyeGroup.querySelector('.pupil');
        pupil.setAttribute('cx', 20 * Math.cos(angle));
        pupil.setAttribute('cy', 20 * Math.sin(angle));
    });
});
