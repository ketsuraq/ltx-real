/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
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

document.addEventListener("DOMContentLoaded", loadPage);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hELGlDQUFpQyxjQUFjO0FBQy9DLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUE4QztBQUN2RSx3QkFBd0IsOENBQThDO0FBQ3RFLDBCQUEwQiw0QkFBNEI7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsOEJBQThCLElBQUksd0JBQXdCLEtBQUssT0FBTyxLQUFLLE9BQU87QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MVFgtV2Vic2l0ZS8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRNb3VzZUZvbGxvd2VyID0gKCkgPT4ge1xuICBjb25zdCBtb3VzZUZvbGxvd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3VzZS1mb2xsb3dlclwiKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBtb3VzZUZvbGxvd2VyLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYfXB4YDtcbiAgICBtb3VzZUZvbGxvd2VyLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFl9cHhgO1xuICB9KTtcbn07XG5cbi8vICN0b2RvOiBhZGQgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgc2Nyb2xsIHNvIHRoYXQgc2Nyb2xsLXNuYXAgd29ya3Mgc21vb3RobHlcbmNvbnN0IGxvYWRFdmVudExpc3RlbmVycyA9ICgpID0+IHt9O1xuXG5jb25zdCBsb2FkQmFsbEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY29sb3JzID0gW1wiI2ZmMDAwMDgwXCIsIFwiI2ZmNzcwMDVlXCIsIFwiI2ZmMDAwMFwiLCBcIiNmZjc3MDBcIiwgXCIjOTMwMDAwXCJdO1xuICBjb25zdCBudW1TZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpLmxlbmd0aCAtIDEgLSAxO1xuICBjb25zdCBhdmdCYWxsU2l6ZSA9IDEwOyAvLyBpbiByZW1cbiAgLy8gbnVtYmVyIG9mIGJhbGxzIHByZXNlbnQgaW4gdGhlIHBhZ2VcbiAgY29uc3QgbnVtQmFsbHMgPSA3MDtcbiAgY29uc3QgYmFsbHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUJhbGxzOyBpKyspIHtcbiAgICBjb25zdCBiYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWxsLmNsYXNzTGlzdC5hZGQoXCJiYWxsXCIpO1xuICAgIGJhbGwuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgYmFsbC5zdHlsZS5sZWZ0ID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICogbnVtU2VjdGlvbnMpfXZ3YDtcbiAgICBiYWxsLnN0eWxlLnRvcCA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCAqIG51bVNlY3Rpb25zKX12aGA7XG4gICAgYmFsbC5zdHlsZS53aWR0aCA9IGAke01hdGgucmFuZG9tKCkgKiBhdmdCYWxsU2l6ZX1yZW1gO1xuICAgIGJhbGwuc3R5bGUuaGVpZ2h0ID0gYmFsbC5zdHlsZS53aWR0aDtcblxuICAgIGJhbGxzLnB1c2goYmFsbCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFsbCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IDUwMDA7IC8vIChtaWxpc2Vjb25kcylcbiAgLy8gS2V5ZnJhbWVzXG4gIGNvbnN0IHlEaXNwbGFjZW1lbnQgPSAxNTA7IC8vIGluIHJlbVxuICBjb25zdCB4RGlzcGxhY2VtZW50ID0gMTEwOyAvLyBpbiByZW1cbiAgYmFsbHMuZm9yRWFjaCgoYmFsbCwgaWQpID0+IHtcbiAgICBjb25zdCB0byA9IHtcbiAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiAoaWQgJSAyID09PSAwID8gLXhEaXNwbGFjZW1lbnQgOiB4RGlzcGxhY2VtZW50KSxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiB5RGlzcGxhY2VtZW50LFxuICAgIH07XG5cbiAgICBiYWxsLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwLCAwKVwiIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dG8ueH1yZW0sICR7dG8ueX1yZW0pYCB9XSwge1xuICAgICAgZHVyYXRpb246IChNYXRoLnJhbmRvbSgpICsgMSkgKiBhbmltYXRpb25EdXJhdGlvbiwgLy8gcmFuZG9tIGR1cmF0aW9uXG4gICAgICBkaXJlY3Rpb246IFwiYWx0ZXJuYXRlXCIsXG4gICAgICBmaWxsOiBcImJvdGhcIixcbiAgICAgIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZEhhbWJ1cmdlciA9ICgpID0+IHtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXZcIik7XG5cbiAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9ICgpID0+IHtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1vdmVyZmxvd1wiKTtcbiAgfTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2xhc3Nlcyk7XG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtbmF2IC5uYXYtbGlua1wiKTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2xhc3NlcykpO1xufTtcblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGxvYWRNb3VzZUZvbGxvd2VyKCk7XG4gIGxvYWRFdmVudExpc3RlbmVycygpO1xuICBsb2FkQmFsbEFuaW1hdGlvbigpO1xuICBsb2FkSGFtYnVyZ2VyKCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsb2FkUGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=