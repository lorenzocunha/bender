document.addEventListener('mousemove', function(event) {
    const svgRoot = document.getElementById('bender');
    const eyes = document.querySelectorAll('.eyeGroup');

    eyes.forEach(eyeGroup => {
        // Obter a posição do mouse relativa ao SVG
        const svgPoint = svgRoot.createSVGPoint();
        svgPoint.x = event.clientX;
        svgPoint.y = event.clientY;
        // Converter coordenadas do mouse para o sistema de coordenadas do SVG
        const pointTransformed = svgPoint.matrixTransform(eyeGroup.getScreenCTM().inverse());
        
        // Calcular a direção da pupila
        const dx = pointTransformed.x;
        const dy = pointTransformed.y;
        const angle = Math.atan2(dy, dx);

        // Limitar o movimento da pupila dentro do olho
        const maxPupilMovement = 3; // Definir a distância máxima que a pupila pode se mover
        const distance = Math.min(maxPupilMovement, Math.sqrt(dx * dx + dy * dy));
        
        // Calcular a nova posição da pupila
        const pupil = eyeGroup.querySelector('.pupil');
        const pupilMovementX = distance * Math.cos(angle);
        const pupilMovementY = distance * Math.sin(angle);

        // Aplicar a nova posição
        pupil.setAttribute('cx', pupilMovementX);
        pupil.setAttribute('cy', pupilMovementY);
        pupil.setAttribute('x', pupilMovementX - 12.5);
        pupil.setAttribute('y', pupilMovementY - 12.5);
    });
});