document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){ 
    everyitem.addEventListener('click', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
        if(el_link != null){
            location.href = el_link.href;
        }

    });
});

$(function () {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf("/") + 1) || "index.html";

    // Reset all active classes
    $(".bottom-nav .nav-link, .bottom-nav .dropdown-item").removeClass("active");

    // Loop through each nav-item
    $(".bottom-nav .nav-item").each(function () {
        var $item = $(this);
        var $link = $item.children(".nav-link");
        var href = $link.attr("href");
        var isDropdown = $item.hasClass("dropdown");
        var foundActive = false;

        // If it's a dropdown
        if (isDropdown) {
            // Check child dropdown-items
            $item.find(".dropdown-item").each(function () {
                var childHref = $(this).attr("href");
                if (childHref && childHref === page) {
                    $(this).addClass("active");
                    foundActive = true;
                }
            });

            // If child is active or parent matches
            if (foundActive || (href && href === page)) {
                $link.addClass("active");
            }
        } else {
            // Not a dropdown, check direct match
            if (href && href === page) {
                $link.addClass("active");
            }
        }
    });
});