document.addEventListener('mousemove', (event) => {
    const svgRoot = document.getElementById('svgRoot');
    const eyes = document.querySelectorAll('.eyeGroup');
    eyes.forEach(eyeGroup => {
        const svgPoint = svgRoot.createSVGPoint();
        svgPoint.x = event.clientX;
        svgPoint.y = event.clientY;

        const pointTransformed = svgPoint.matrixTransform(eyeGroup.getScreenCTM().inverse());
        const pupil = eyeGroup.querySelector('.pupil');

        const dx = pointTransformed.x;
        const dy = pointTransformed.y;
        const distance = Math.min(20, Math.sqrt(dx * dx + dy * dy));
        const angle = Math.atan2(dy, dx);

        pupil.setAttribute('cx', distance * Math.cos(angle));
        pupil.setAttribute('cy', distance * Math.sin(angle));
    });
});
