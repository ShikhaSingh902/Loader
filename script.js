function animateLoader() {
    let progress = 0;
    const numberElement = document.getElementById('number');
    const loader = document.querySelector('.loader');

    const interval = setInterval(() => {
      progress++;
      if (progress === 101) {
        clearInterval(interval);
      } else {
        numberElement.textContent = progress;
        loader.style.borderTopColor = `hsl(${progress}, 70%, 50%)`;
      }
    },100);
  }

  animateLoader();
