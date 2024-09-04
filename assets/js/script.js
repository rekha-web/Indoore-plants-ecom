// Swiper Slider
var swiper = new swiper(".myswiper", {
  direction: "vertical",
  loop:true,
  pagination: {
    el:".swiper-pagination",
    clickable:true,
  },
  autoplay: {
    delay:3500,
  },
});