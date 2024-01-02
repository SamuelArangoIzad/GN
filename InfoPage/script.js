function updateClock() {
    const now = new Date();
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('es', options);
  
    const timeStr = now.toLocaleTimeString('es', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' });
  
    document.getElementById('date').innerHTML = dateStr;
    document.getElementById('time').innerHTML = timeStr;
  }
  
  function startClock() {
    updateClock();
    setInterval(updateClock, 1000); // Actualizar cada segundo
  }
  
  document.addEventListener('DOMContentLoaded', startClock);
  document.addEventListener("DOMContentLoaded", function () {
    const infoSection = document.querySelector(".info-section");
  
    window.addEventListener("scroll", function () {
      // Obtén la posición de desplazamiento vertical
      const scrollPosition = window.scrollY;
  
      // Ajusta la opacidad en función de la posición de desplazamiento
      const opacity = 1 - scrollPosition / 400; // Puedes ajustar este valor según tus preferencias
  
      // Limita la opacidad para asegurarte de que esté en el rango [0, 1]
      const limitedOpacity = Math.max(0, Math.min(1, opacity));
  
      // Aplica la opacidad a la sección de información
      infoSection.style.opacity = limitedOpacity;
    });
  });
  