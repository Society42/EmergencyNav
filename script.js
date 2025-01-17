const countdownElement = document.querySelector('.countdown');
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10); 

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        countdownElement.textContent = 'We are live!';
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