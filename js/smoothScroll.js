// Funkcija za počasen pomik do elementa
function smoothScroll(event) {
    event.preventDefault();  // Prepreči običajno delovanje povezave
    const targetId = event.currentTarget.getAttribute("href");  // Pridobi ciljni ID
    const targetElement = document.querySelector(targetId);  // Poišči element po ID-ju
    
    // Nastavitev začetnega položaja
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop;
    const distance = targetPosition - startPosition;
  
    // Nastavi čas trajanja animacije (v ms)
    const duration = 1000; // 1000ms = 1 sec
    let startTime = null;
  
    // Funkcija za izvajanje animacije pomika
    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollPosition = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, scrollPosition);  // Pomik strani
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);  // Nadaljuj animacijo, dokler ne doseže trajanja
      }
    }
  
    // Začni animacijo z uporabo requestAnimationFrame
    requestAnimationFrame(animation);
  }
  
  // Easing funkcija (počasnejši začetek in konec)
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  // Poveži event listener za vse povezave s hash (id) v URL-ju
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });