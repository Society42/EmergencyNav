const countdownElement = document.querySelector('.countdown');
const confettiCanvas = document.getElementById('confetti-canvas');
const targetDate = new Date('March 31, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        countdownElement.textContent = '🎊 We Are Live! 🎊';
        startConfetti();
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.textContent = `Launching in: ${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Simple confetti effect
function startConfetti() {
    const confetti = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    let particles = [];
    
    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * confettiCanvas.width,
                y: Math.random() * confettiCanvas.height,
                r: Math.random() * 5 + 2,
                d: Math.random() * 10,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            });
        }
    }
    
    function drawParticles() {
        confetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            confetti.beginPath();
            confetti.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
            confetti.fillStyle = p.color;
            confetti.fill();
        }
    }
    
    function updateParticles() {
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.y += p.d;
            if (p.y > confettiCanvas.height) {
                p.y = 0;
                p.x = Math.random() * confettiCanvas.width;
            }
        }
    }
    
    function animateConfetti() {
        drawParticles();
        updateParticles();
        requestAnimationFrame(animateConfetti);
    }
    
    createParticles();
    animateConfetti();
}

window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});
