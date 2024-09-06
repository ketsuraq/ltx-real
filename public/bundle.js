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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRCxpQ0FBaUMsY0FBYztBQUMvQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkUsd0JBQXdCLDhDQUE4QztBQUN0RSwwQkFBMEIsNEJBQTRCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QixJQUFJLHdCQUF3QixLQUFLLE9BQU8sS0FBSyxPQUFPO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw4RUFBOEU7QUFDL0ksK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSx3RCIsInNvdXJjZXMiOlsid2VicGFjazovL0xUWC1XZWJzaXRlLy4vanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZE1vdXNlRm9sbG93ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbW91c2VGb2xsb3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW91c2UtZm9sbG93ZXJcIik7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgbW91c2VGb2xsb3dlci5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WH1weGA7XHJcbiAgICBtb3VzZUZvbGxvd2VyLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFl9cHhgO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gI3RvZG86IGFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBzY3JvbGwgc28gdGhhdCBzY3JvbGwtc25hcCB3b3JrcyBzbW9vdGhseVxyXG5jb25zdCBsb2FkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7fTtcclxuXHJcbmNvbnN0IGxvYWRCYWxsQW5pbWF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbG9ycyA9IFtcIiNmZjAwMDA4MFwiLCBcIiNmZjc3MDA1ZVwiLCBcIiNmZjAwMDBcIiwgXCIjZmY3NzAwXCIsIFwiIzkzMDAwMFwiXTtcclxuICBjb25zdCBudW1TZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpLmxlbmd0aCAtIDEgLSAxO1xyXG4gIGNvbnN0IGF2Z0JhbGxTaXplID0gMTA7IC8vIGluIHJlbVxyXG4gIC8vIG51bWJlciBvZiBiYWxscyBwcmVzZW50IGluIHRoZSBwYWdlXHJcbiAgY29uc3QgbnVtQmFsbHMgPSA3MDtcclxuICBjb25zdCBiYWxscyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUJhbGxzOyBpKyspIHtcclxuICAgIGNvbnN0IGJhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiYmFsbFwiKTtcclxuICAgIGJhbGwuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XHJcbiAgICBiYWxsLnN0eWxlLmxlZnQgPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKiBudW1TZWN0aW9ucyl9dndgO1xyXG4gICAgYmFsbC5zdHlsZS50b3AgPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKiBudW1TZWN0aW9ucyl9dmhgO1xyXG4gICAgYmFsbC5zdHlsZS53aWR0aCA9IGAke01hdGgucmFuZG9tKCkgKiBhdmdCYWxsU2l6ZX1yZW1gO1xyXG4gICAgYmFsbC5zdHlsZS5oZWlnaHQgPSBiYWxsLnN0eWxlLndpZHRoO1xyXG5cclxuICAgIGJhbGxzLnB1c2goYmFsbCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWxsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gNTAwMDsgLy8gKG1pbGlzZWNvbmRzKVxyXG4gIC8vIEtleWZyYW1lc1xyXG4gIGNvbnN0IHlEaXNwbGFjZW1lbnQgPSAxNTA7IC8vIGluIHJlbVxyXG4gIGNvbnN0IHhEaXNwbGFjZW1lbnQgPSAxMTA7IC8vIGluIHJlbVxyXG4gIGJhbGxzLmZvckVhY2goKGJhbGwsIGlkKSA9PiB7XHJcbiAgICBjb25zdCB0byA9IHtcclxuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIChpZCAlIDIgPT09IDAgPyAteERpc3BsYWNlbWVudCA6IHhEaXNwbGFjZW1lbnQpLFxyXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogeURpc3BsYWNlbWVudCxcclxuICAgIH07XHJcblxyXG4gICAgYmFsbC5hbmltYXRlKFt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMCwgMClcIiB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RvLnh9cmVtLCAke3RvLnl9cmVtKWAgfV0sIHtcclxuICAgICAgZHVyYXRpb246IChNYXRoLnJhbmRvbSgpICsgMSkgKiBhbmltYXRpb25EdXJhdGlvbiwgLy8gcmFuZG9tIGR1cmF0aW9uXHJcbiAgICAgIGRpcmVjdGlvbjogXCJhbHRlcm5hdGVcIixcclxuICAgICAgZmlsbDogXCJib3RoXCIsXHJcbiAgICAgIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIixcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZEhhbWJ1cmdlciA9ICgpID0+IHtcclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XHJcbiAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2XCIpO1xyXG5cclxuICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKCkgPT4ge1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgbW9iaWxlTmF2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLW92ZXJmbG93XCIpO1xyXG4gIH07XHJcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2xhc3Nlcyk7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vYmlsZS1uYXYgLm5hdi1saW5rXCIpO1xyXG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNsYXNzZXMpKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xyXG4gIGxvYWRNb3VzZUZvbGxvd2VyKCk7XHJcbiAgbG9hZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgbG9hZEJhbGxBbmltYXRpb24oKTtcclxuICBsb2FkSGFtYnVyZ2VyKCk7XHJcbn07XHJcblxyXG5jb25zdCBtb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRyZWFjaC1idXR0b24xXCIpO1xyXG5jb25zdCBsZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRyZWFjaC1idXR0b24yXCIpO1xyXG5jb25zdCBhZGRQYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbmVsMlwiKTtcclxuY29uc3Qgc2Vhc29uc0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFzb24tc2VsZWN0aW9uLWJ1dHRvblwiKTtcclxuXHJcbm1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYWRkUGFuZWxzLmZvckVhY2gocGFuZWwgPT4ge1xyXG4gICAgcGFuZWwuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgfSk7XHJcbiAgbW9yZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gIGxlc3Muc3R5bGUub3BhY2l0eSA9ICcwLjgnO1xyXG4gIG1vcmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBsZXNzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KTtcclxuXHJcbmxlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYWRkUGFuZWxzLmZvckVhY2gocGFuZWwgPT4ge1xyXG4gICAgcGFuZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSk7XHJcbiAgbW9yZS5zdHlsZS5vcGFjaXR5ID0gJzAuOCc7XHJcbiAgbGVzcy5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gIG1vcmUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgbGVzcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbnNlYXNvbnNEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFzb24tc2VsZWN0aW9uLWJ1dHRvblwiKS5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9ICcwcmVtJztcclxufSlcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuc2Vhc29uLXNlbGVjdGlvbi1idXR0b24nKSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXNvbi1zZWxlY3Rpb24tYnV0dG9uXCIpLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gJzFyZW0nO1xyXG4gIH1cclxuICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5zaG93Y2FzZS1kcm9wZG93bi1vcHRpb24nKSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93Y2FzZVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7aWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmltYXJ5XCIpKSBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwcmltYXJ5XCIpfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5pZH0tc2hvd2Nhc2VgKS5jbGFzc0xpc3QuYWRkKFwicHJpbWFyeVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWRQYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=