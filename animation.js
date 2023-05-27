function restartAnimation() {
    var creditosDiv = document.querySelector('.creditos');
    var animatedText = document.querySelector('.animated-text');
    
    if (isElementInViewport(creditosDiv)) {
      animatedText.style.width = '0';
      animatedText.style.animation = 'none';
      void animatedText.offsetWidth; /* Forçar uma reflow */
      animatedText.style.animation = 'typing 4s steps(40, end) forwards, blink-caret 0.85s step-end infinite';
      animatedText.style.width = '24%';
    }
  }
  
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('load', restartAnimation);
  window.addEventListener('scroll', restartAnimation);
  