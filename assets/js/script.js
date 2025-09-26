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


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto'; // let the browser do it
}

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration, decimals = 0) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        // make increment a decimal-friendly step:
        increment = range / (duration / 16), // 60fps-ish
        startTime = null;

        function animateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            current = start + increment * (progress / 16);

            // clamp when over
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
            }

            obj.textContent = current.toFixed(decimals);

            if (current !== end) {
                requestAnimationFrame(animateCounter);
            }
        }

        requestAnimationFrame(animateCounter);
  }
    counter("count1", 0, 7, 1000);
    counter("count2", 0, 1, 1000);
    counter("count3", 0, 1895, 1000);
    counter("count4", 0, 99, 1000);
    counter("count5", 0, 4, 1000);
    counter("count6", 0, 693, 1000);
    counter("count7", 0, 32.9, 1000, 1);
    counter("count8", 0, 97, 1000);
    counter("count9", 0, 13, 1000);
});