const countDownDate = new Date('Jan 1,2021 00:00:00').getTime();

const calculateLaunchTime = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    'launch'
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

  if (distance < 0) {
    clearInterval(calculateLaunchTime);
    document.getElementById('launch').innerHTML = 'Expired';
  }
}, 1000);
