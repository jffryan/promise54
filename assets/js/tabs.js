// get all the data attributes
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content");
// Cycle through and add event listeners
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    // remove other tabs from view
    tabContents.forEach(tabContent =>
      tabContent.classList.remove("selected-tab")
    );
    // remove active style from menu
    tabs.forEach(tab => tab.classList.remove("selected-tab"));
    // view selected tab and menu
    tab.classList.add("selected-tab");
    target.classList.add("selected-tab");
  });
});
