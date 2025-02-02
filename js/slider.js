function initializeCarousel(
    wrapperSelector,
    carouselSelector,
    leftBtnId,
    rightBtnId
  ) {
    const wrapper = document.querySelector(wrapperSelector);
    const carousel = document.querySelector(carouselSelector);
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = [
      document.getElementById(leftBtnId),
      document.getElementById(rightBtnId),
    ];
    const carouselChildrens = [...carousel.children];
    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;
  
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  
    // Infinite scrolling setup
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
  
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  
    // Arrow buttons
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id === leftBtnId ? -firstCardWidth : firstCardWidth;
      });
    });
  
    // Dragging functionality
    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };
  
    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
  
    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };
  
    const infiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      } else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };
  
    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return;
      timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
    };
  
    autoPlay();
  
    // Event listeners
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
  }
  
  // Initialize both carousels
  initializeCarousel(".wrapper", "#carousel1", "left1", "right1");
  initializeCarousel(".wrapper2", "#carousel2", "left2", "right2");
  