const clock = document.getElementById('clock');

const getClock = () => {
  const time = new Date();
  const formattedTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  clock.innerText = `${formattedTime.padStart(11,"0")}`;
};
getClock();
setInterval(getClock, 1000);
