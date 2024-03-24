document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const { left, top, width, height } = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const maxPupilMovement = Math.min(width, height) / 4;
        const distance = Math.min(maxPupilMovement, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY));
        const pupilX = distance * Math.cos(angle);
        const pupilY = distance * Math.sin(angle);
        const pupil = eye.querySelector('.pupil');
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
