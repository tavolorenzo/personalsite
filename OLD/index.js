window.onload = function() {
    Particles.init({
      selector: '.background-animation',
      color: ['#353C40', '#6B787F', '#D5F0FF'],
      connectParticles: true,
      responsive: [{
        breakpoint: 800,
        options: {
          color: '#353C40',
          maxParticles: 80,
          connectParticles: false
        }
      }]
    });
  };