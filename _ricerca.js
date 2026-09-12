/* MOTORE DI RICERCA DYNAMIQUE DANS LE COURS */
const searchInput = document.getElementById('live-search-input');
const searchCounter = document.getElementById('search-results-count');
const searchClearBtn = document.getElementById('search-clear-btn');
const contentArea = document.getElementById('course-content-area');

function removeHighlights() {
  const marks = contentArea.querySelectorAll('mark.search-highlight');
  marks.forEach(mark => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function performSearch() {
  const query = searchInput.value.trim();
  removeHighlights();

  if (query.length < 2) {
    searchCounter.textContent = "";
    searchClearBtn.style.display = "none";
    return;
  }

  searchClearBtn.style.display = "block";

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  let count = 0;
  let firstMatch = null;

  function highlightTextNodes(node) {
    if (node.nodeType === 3) {
      const match = node.nodeValue.match(regex);
      if (match) {
        count += match.length;
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(regex, '<mark class="search-highlight">$1</mark>');
        node.parentNode.replaceChild(span, node);
        if (!firstMatch) {
          firstMatch = span.querySelector('mark.search-highlight');
        }
      }
    } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE' && node.nodeName !== 'SVG') {
      Array.from(node.childNodes).forEach(highlightTextNodes);
    }
  }

  if(contentArea) {
    highlightTextNodes(contentArea);
  }

  if (count > 0) {
    searchCounter.textContent = `${count} trouvé${count > 1 ? 's' : ''}`;
    searchCounter.style.color = '#22c55e';
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } else {
    searchCounter.textContent = "0 résultat";
    searchCounter.style.color = '#ef4444';
  }
}

if(searchInput) {
  searchInput.addEventListener('input', performSearch);
}

if(searchClearBtn) {
  searchClearBtn.addEventListener('click', function() {
    searchInput.value = "";
    searchCounter.textContent = "";
    searchClearBtn.style.display = "none";
    removeHighlights();
    searchInput.focus();
  });
}

/* Protezione tasto destro e copia */
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
  if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 83)) {
    return false;
  }
};