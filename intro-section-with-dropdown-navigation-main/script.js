const menuClick = document.querySelector(".hamburger-menu");

const menuExpand = document.querySelector(".expanded-menu-icon");

const mobileNav = document.querySelector(".nav-items");

const closeIcon = document.querySelector(".close");

menuClick.addEventListener("click", function () {
  if (mobileNav.style.display === "" || menuExpand.style.display === "none") {
    menuExpand.style.display = "block";
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
    menuExpand.style.display = "none";
  }
});

closeIcon.addEventListener("click", function () {
  if (menuExpand.style.display === "block") {
    mobileNav.style.display = "flex";
    menuExpand.style.display = "none";
  } else {
    mobileNav.style.display = "none";
    menuExpand.style.display = "block";
  }
});

const open = document.querySelector(".drop-down");

const upArrow = document.querySelector(".up-arrow");

const downArrow = document.querySelector(".down-arrow");

const featureBlock = document.querySelector(".feature-expanded");

open.addEventListener("click", function () {
  if (featureBlock.style.display === "block") {
    featureBlock.style.display = "none";
    downArrow.style.display = "block";
    upArrow.style.display = "none";
  } else {
    featureBlock.style.display = "block";
    downArrow.style.display = "none";
    upArrow.style.display = "block";
  }
});

upArrow.addEventListener("click", function () {
  if (featureBlock.style.display === "block") {
    featureBlock.style.display = "none";
    downArrow.style.display = "block";
    upArrow.style.display = "none";
  } else {
    featureBlock.style.display = "block";
    downArrow.style.display = "none";
    upArrow.style.display = "block";
  }
});

const openCompany = document.querySelector(".down-arrow-company");

const companyBlock = document.querySelector(".company-expanded");

const upArrowCompany = document.querySelector(".up-arrow-company");

const downArrowCompany = document.querySelector(".down-arrow-company");

openCompany.addEventListener("click", function () {
  if (companyBlock.style.display === "block") {
    companyBlock.style.display = "none";
    downArrowCompany.style.display = "block";
    upArrowCompany.style.display = "none";
  } else {
    companyBlock.style.display = "block";
    downArrowCompany.style.display = "none";
    upArrowCompany.style.display = "block";
  }
});

upArrowCompany.addEventListener("click", function () {
  if (companyBlock.style.display === "block") {
    companyBlock.style.display = "none";
    downArrowCompany.style.display = "block";
    upArrowCompany.style.display = "none";
  } else {
    companyBlock.style.display = "block";
    downArrowCompany.style.display = "none";
    upArrowCompany.style.display = "block";
  }
});

const desktopDown = document.querySelector(".down-arrow-desktop-feature");

const element = document.querySelector(".features-open");

const featureList = element.firstElementChild;

const desktopUp = document.querySelector(".up-arrow-desktop-feature");

desktopDown.addEventListener("click", function () {
  if (featureList.style.display === "flex") {
    featureList.style.display = "none";
    desktopDown.style.display = "block";
    desktopUp.style.display = "none";
  } else {
    featureList.style.display = "flex";
    desktopDown.style.display = "none";
    desktopUp.style.display = "block";
  }
});
desktopUp.addEventListener("click", function () {
  if (featureList.style.display === "flex") {
    featureList.style.display = "none";
    desktopDown.style.display = "block";
    desktopUp.style.display = "none";
  } else {
    featureList.style.display = "flex";
    desktopDown.style.display = "none";
    desktopUp.style.display = "block";
  }
});

const desktopDownCompany = document.querySelector(
  ".down-arrow-desktop-company"
);

const elementCompany = document.querySelector(".company-open");

const CompanyList = elementCompany.firstElementChild;

const desktopUpCompany = document.querySelector(".up-arrow-desktop-company");

desktopDownCompany.addEventListener("click", function () {
  if (CompanyList.style.display === "flex") {
    CompanyList.style.display = "none";
    desktopDownCompany.style.display = "block";
    desktopUpCompany.style.display = "none";
  } else {
    CompanyList.style.display = "flex";
    desktopDownCompany.style.display = "none";
    desktopUpCompany.style.display = "block";
  }
});

desktopUpCompany.addEventListener("click", function () {
  if (CompanyList.style.display === "flex") {
    CompanyList.style.display = "none";
    desktopDownCompany.style.display = "block";
    desktopUpCompany.style.display = "none";
  } else {
    CompanyList.style.display = "flex";
    desktopDownCompany.style.display = "none";
    desktopUpCompany.style.display = "block";
  }
});
