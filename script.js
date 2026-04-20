document.getElementById("year").textContent = new Date().getFullYear();

const revealables = document.querySelectorAll(
  ".hero-inner, .section .container, .card, .why-card, .contact-card"
);
revealables.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
revealables.forEach((el) => io.observe(el));
