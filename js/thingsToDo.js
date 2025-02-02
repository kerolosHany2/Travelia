// Select all scroll-track containers
const tracks = document.querySelectorAll(".thingstodo_scroll-track");

tracks.forEach((track) => {
  const container = track.closest(".thingstodo_scroll"); // Ensure each track has its buttons and cards within a container
  const prevBtn = container.querySelector(".thingstodo_prev-btn");
  const nextBtn = container.querySelector(".thingstodo_next-btn");
  const cardWidth = container.querySelector(".thingstodo_card").offsetWidth + 20;

  let scrollPosition = 0;

  // Slide movement
  function slideCarousel(direction) {
    const maxScroll = track.scrollWidth - track.offsetWidth;

    if (direction === "next") {
      scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
    } else {
      scrollPosition = Math.max(scrollPosition - cardWidth, 0);
    }

    track.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", () => slideCarousel("next"));
  prevBtn.addEventListener("click", () => slideCarousel("prev"));

  // Auto-scroll 
  setInterval(() => {
    const maxScroll = track.scrollWidth - track.offsetWidth;
    scrollPosition = (scrollPosition + cardWidth) % (maxScroll + cardWidth);
    track.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, 5000);
});
