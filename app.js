const onToggleButton = () => {
  const sideNav = document.getElementById("side-nav");
  const toggleButton = document.getElementById("toggle-button");
  toggleButton.addEventListener("click", () => {
    sideNav.classList.toggle("after-clicked")
  });
};

onToggleButton();
