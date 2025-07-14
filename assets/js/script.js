document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){ 
    everyitem.addEventListener('click', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
        if(el_link != null){
            location.href = el_link.href;
        }

    });
});

$(function() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf("/") + 1) || "index.html";

    $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").removeClass("active");

    $(".navbar-nav .dropdown").each(function() {
    var $dropdown = $(this);
    var parentLink = $dropdown.children(".nav-link");
    var childItems = $dropdown.find(".dropdown-item");
    var foundActive = false;

    childItems.each(function() {
        var href = $(this).attr("href");
        if (href && href === page) {
        $(this).addClass("active");
        foundActive = true;
        }
    });

    if (foundActive) {
        parentLink.addClass("active");
    }

    var parentHref = parentLink.attr("href");
    if (parentHref && parentHref === page) {
        parentLink.addClass("active");
    }
    });

    $(".navbar-nav > .nav-item > .nav-link").each(function() {
    var href = $(this).attr("href");
    if (href && href === page) {
        $(this).addClass("active");
    }
    });
});