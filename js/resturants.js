document.querySelectorAll('.see-more-btn').forEach((button) => {
    button.addEventListener('click', () => {
      // Safely find the parent card-container
      const container = button.closest('.containerrr');
      if (!container) {
        console.error('Parent container not found for button:', button);
        return; // Stop execution if no container is found
      }
  
      // Select hidden cards only within this container
      const hiddenCards = container.querySelectorAll('.carddd.hidden');
  
      hiddenCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = 1;
          }, 50);
        }, index * 200); // Staggered appearance
      });
  
      // Hide the button after all cards are shown
      if (hiddenCards.length > 0) {
        setTimeout(() => {
          button.style.display = 'none';
        }, hiddenCards.length * 200);
      }
    });
  });

  const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
  
