
// Toggle Visibility Of Navbar When Button Clicked

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});

// Tab Interface For Resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeHeading.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};
// Portfolio Filter

const filterContainer = document.querySelector(".portfolio-filter-nav");
const galleryItems = document.querySelectorAll(".portfolio-item");

filterContainer.addEventListener("click", (e) => {
  e.preventDefault();
  filterContainer.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  const filterValue = e.target.getAttribute("data-id");
  galleryItems.forEach((item) => {
    if (item.classList.contains(filterValue) || filterValue === "all") {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      item.classList.remove("show");
      item.classList.add("hide");
    }
  });
});

// Send Email

const msg = document.querySelector(".form-message");

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("9JuRWnYhThTVG_WiV");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.querySelector(".loader").classList.add("show");
      // Replace With Your Email Service ID & Contact Form ID Which You Will Get After Registering With EmailJs
      emailjs.sendForm("service_h78plct", "template_5bqt1ko", this).then(
        function () {
          document.getElementById("contact-form").reset();
          document.querySelector(".loader").classList.remove("show");
          msg.innerHTML = "";
          msg.innerHTML += "<span class='success-msg'>Email Sent</span>";
          msg.classList.add("show");
          setTimeout(() => msg.classList.remove("show"), 2000);
        },
        function (error) {
          document.querySelector(".loader").classList.toggle("show");
          msg.classList.add("show");
          msg.innerHTML += "<span class='error-msg'>Not Sent ! Sign Up with EmailJS.</span>";
        }
      );
    });
};

// Navbar Header Sticky While Scroll

function stickyNav() {
  var headerHeight = document.querySelector("#about").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);

