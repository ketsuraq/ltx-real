const loadMouseFollower = () => {
  const mouseFollower = document.querySelector("#mouse-follower");

  window.addEventListener("mousemove", (event) => {
    mouseFollower.style.left = `${event.clientX}px`;
    mouseFollower.style.top = `${event.clientY}px`;
  });
};

// #todo: add event listeners for the scroll so that scroll-snap works smoothly
const loadEventListeners = () => {};

const loadBallAnimation = () => {
  const colors = ["#ff000080", "#ff77005e", "#ff0000", "#ff7700", "#930000"];
  const numSections = document.querySelectorAll("section").length - 1 - 1;
  const avgBallSize = 10; // in rem
  // number of balls present in the page
  const numBalls = 70;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100 * numSections)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100 * numSections)}vh`;
    ball.style.width = `${Math.random() * avgBallSize}rem`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
  }

  const animationDuration = 5000; // (miliseconds)
  // Keyframes
  const yDisplacement = 150; // in rem
  const xDisplacement = 110; // in rem
  balls.forEach((ball, id) => {
    const to = {
      x: Math.random() * (id % 2 === 0 ? -xDisplacement : xDisplacement),
      y: Math.random() * yDisplacement,
    };

    ball.animate([{ transform: "translate(0, 0)" }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
      duration: (Math.random() + 1) * animationDuration, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    });
  });
};

const loadHamburger = () => {
  const menuBtn = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  const toggleClasses = () => {
    menuBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("hide-overflow");
  };
  menuBtn.addEventListener("click", toggleClasses);
  const links = document.querySelectorAll(".mobile-nav .nav-link");
  links.forEach((link) => link.addEventListener("click", toggleClasses));
};

const loadPage = () => {
  loadMouseFollower();
  loadEventListeners();
  loadBallAnimation();
  loadHamburger();
};

const more = document.querySelector(".outreach-button1");
const less = document.querySelector(".outreach-button2");
const addPanels = document.querySelectorAll(".panel2");
const seasonsDropdown = document.querySelector(".season-selection-button");

more.addEventListener('click', () => {
  addPanels.forEach(panel => {
    panel.style.opacity = '1';
    panel.style.display = 'flex';
  });
  more.style.opacity = '0';
  less.style.opacity = '0.8';
  more.style.display = 'none';
  less.style.display = 'block';
});

less.addEventListener('click', () => {
  addPanels.forEach(panel => {
    panel.style.opacity = '0';
    panel.style.display = 'none';
  });
  more.style.opacity = '0.8';
  less.style.opacity = '0';
  more.style.display = 'block';
  less.style.display = 'none';
});

seasonsDropdown.addEventListener('click', () => {
  document.querySelector(".dropdown-content").style.display = 'block';
  document.querySelector(".season-selection-button").style.borderBottomRightRadius = '0rem';
})

window.onclick = function(event) {
  if (!event.target.matches('.season-selection-button')) {
    document.querySelector(".dropdown-content").style.display = 'none';
    document.querySelector(".season-selection-button").style.borderBottomRightRadius = '1rem';
  }
  if (event.target.matches('.showcase-dropdown-option')) {
    document.querySelectorAll(".showcase").forEach((element) => {if(element.classList.contains("primary")) element.classList.remove("primary")})
    document.querySelector(`#${event.target.id}-showcase`).classList.add("primary");
  }
}

document.addEventListener("DOMContentLoaded", loadPage);