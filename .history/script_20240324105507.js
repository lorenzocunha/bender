document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const { left, top, width, height } = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const radius = Math.min(width, height) / 4;
        const pupilX = radius * Math.cos(angle);
        const pupilY = radius * Math.sin(angle);
        const pupil = eye.querySelector('.pupil');
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
