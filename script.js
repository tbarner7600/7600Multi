document.addEventListener("DOMContentLoaded", function() {

  // 1. Create a list of pages for the navigation menu
  const pages = [
    { name: "Home", file: "index.html", id: "index" },
    { name: "About", file: "about.htm", id: "about" },
    { name: "Examples", file: "examples.htm", id: "examples" }
  ];

  // 2. Create a navigation section
  const nav = document.createElement("nav");

  // 3. Create a link for each page
  for (let i = 0; i < pages.length; i++) {
    const link = document.createElement("a");

    // Set the link text and destination
    link.textContent = pages[i].name;
    link.href = pages[i].file;

    // Give the link an ID to identify the page
    link.dataset.page = pages[i].id;

    // Add the link to the navigation menu
    nav.appendChild(link);
  }

  // 4. Add the navigation menu to the top of the page
  document.body.insertBefore(nav, document.body.firstChild);

  // 5. Find the name of the current HTML file
  let currentPage = window.location.pathname.split("/").pop();

  // 6. If the site loads at the home page, select index.html
  if (currentPage === "" || currentPage === "index.html") {
    currentPage = "index.html";
  }

  // 7. Find all navigation links
  const links = nav.querySelectorAll("a");

  // Check each link to see if it matches the current page
  for (let i = 0; i < links.length; i++) {
    const linkPage = links[i].getAttribute("href");

    if (linkPage === currentPage) {
      links[i].classList.add("active");
    }
  }

});