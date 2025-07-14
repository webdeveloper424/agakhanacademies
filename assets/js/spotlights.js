var itemsPerPages = 8;
var tabState = {};

function initPagination(tabId) {
  var newsItem = document.querySelectorAll(`#news-list-${tabId} .news-item`);
  var paginations = document.getElementById(`pagination-${tabId}`);
  var totalPage = Math.ceil(newsItem.length / itemsPerPages);

  tabState[tabId] = {
    currentPage: 1,
    newsItem: newsItem,
    paginations: paginations,
    totalPage: totalPage
  };

  showPages(tabId, 1);
}

function showPages(tabId, page) {
  var state = tabState[tabId];
  state.currentPage = page;

  var start = (page - 1) * itemsPerPages;
  var end = start + itemsPerPages;

  state.newsItem.forEach(function(item, index) {
    item.style.display = (index >= start && index < end) ? 'flex' : 'none';
  });

  renderPaginations(tabId);
}

function renderPaginations(tabId) {
    var state = tabState[tabId];
    var paginations = state.paginations;
    var currentPages = state.currentPage;
    var totalPage = state.totalPage;

    paginations.innerHTML = '';

    var prevDisableds = currentPages === 1 ? 'disabled' : '';
    var nextDisableds = currentPages === totalPage ? 'disabled' : '';

    paginations.innerHTML += `
        <li class="page-item ${prevDisableds}">
        <a class="page-link" href="#" onclick="changePage('${tabId}', ${currentPages - 1})">Previous</a>
        </li>
    `;

    for (var i = 1; i <= totalPage; i++) {
        var active = currentPages === i ? 'active' : '';
        paginations.innerHTML += `
        <li class="page-item ${active}">
            <a class="page-link" href="#" onclick="changePage('${tabId}', ${i})">${i}</a>
        </li>
        `;
    }

    paginations.innerHTML += `
        <li class="page-item ${nextDisableds}">
        <a class="page-link" href="#" onclick="changePage('${tabId}', ${currentPages + 1})">Next</a>
        </li>
    `;
    }

    function changePage(tabId, pages) {
    var state = tabState[tabId];
    if (pages < 1 || pages > state.totalPage) return;
    showPages(tabId, pages);
    }

    document.addEventListener('DOMContentLoaded', function() {
    initPagination(1);
    initPagination(2);
    initPagination(3);
    initPagination(4);
});