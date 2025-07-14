var itemsPerPage = 8;
var newsItems = document.querySelectorAll('.news-item');
var pagination = document.getElementById('pagination');
var totalPages = Math.ceil(newsItems.length / itemsPerPage);

var currentPage = 1;

function showPage(page) {
    currentPage = page;
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;

    newsItems.forEach(function(item, index) {
        item.style.display = (index >= start && index < end) ? 'flex' : 'none';
    });

    renderPagination();
}

function renderPagination() {
    pagination.innerHTML = '';

    var prevDisabled = currentPage === 1 ? 'disabled' : '';
    var nextDisabled = currentPage === totalPages ? 'disabled' : '';

    pagination.innerHTML += `
        <li class="page-item ${prevDisabled}">
        <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
        </li>
    `;

    for (var i = 1; i <= totalPages; i++) {
        var active = currentPage === i ? 'active' : '';
        pagination.innerHTML += `
        <li class="page-item ${active}">
            <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
        </li>
        `;
    }

    pagination.innerHTML += `
        <li class="page-item ${nextDisabled}">
        <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
        </li>
    `;
}

function changePage(page) {
    if (page < 1 || page > totalPages) return;
    showPage(page);
}

showPage(1);