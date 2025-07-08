document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){ 
    everyitem.addEventListener('click', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
        if(el_link != null){
            location.href = el_link.href;
        }

    });
});

$(function() {
    // Get current page filename
    var currentPage = window.location.pathname.split("/").pop() || "index.html";

    // First pass: clear existing active
    $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").removeClass("active");

    // Flag to store which dropdown parents should be active
    var activeDropdowns = new Set();

    // Match all dropdown items first
    $(".navbar-nav .dropdown-item").each(function() {
        var href = $(this).attr("href");
        if (href && href === currentPage) {
        $(this).addClass("active");
        // Mark its parent dropdown as active too
        var parentDropdown = $(this).closest(".dropdown");
        if (parentDropdown.length) {
            activeDropdowns.add(parentDropdown[0]);
        }
        }
    });

    // Handle top-level nav-links
    $(".navbar-nav .nav-link").each(function() {
        var href = $(this).attr("href");
        var isDropdownToggle = $(this).hasClass("dropdown-toggle");
        var parentDropdown = $(this).closest(".dropdown")[0];

        // Direct match with nav-link
        if (href && (href === currentPage || (href === "index.html" && currentPage === ""))) {
        $(this).addClass("active");
        }
        // Or parent of active dropdown-item
        else if (isDropdownToggle && activeDropdowns.has(parentDropdown)) {
        $(this).addClass("active");
        }
    });
});