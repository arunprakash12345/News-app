// trending-dev.js
document.addEventListener('DOMContentLoaded', () => {

  // ✅ Your new API Key
  const API_KEY = 'pub_fda5f763f216452fba36d8b4cc57cc25';

  // News container
  const container = document.getElementById('trending-articles');

  // Fallback image
  const FALLBACK_IMG = 'Assets/trending1.png';

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  async function loadTrending() {
    container.innerHTML = '<div class="text-center py-4">Loading trending news…</div>';

    try {
      // ✅ NewsData API Endpoint
      const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=latest`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response not ok: ' + response.status);

      const data = await response.json();

      // NewsData returns results[]
      const articles = (data.results || []).slice(0, 9);

      if (articles.length === 0) {
        container.innerHTML = '<p>No trending articles right now.</p>';
        return;
      }

      container.innerHTML = articles.map(renderCard).join('');

    } catch (err) {
      console.error('Fetch error', err);

      container.innerHTML = `
        <div class="text-center py-4">
          <p class="text-danger">Could not load news. Please try again.</p>
          <button id="tryAgain" class="btn btn-link">Try again</button>
        </div>`;

      document.getElementById('tryAgain')
        .addEventListener('click', loadTrending);
    }
  }

  function renderCard(a) {
    const title = escapeHtml(a.title || 'Untitled');
    const image = a.image_url || FALLBACK_IMG;
    const url = a.link || '#';

    return `
      <div class="col-md-4 col-sm-6">
        <div class="news-card">
          <a class="a" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
            <img src="${escapeHtml(image)}" alt="${title}">
          </a>
          <p class="paragraph-text-light truncate-2-lines">
            <a class="a" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
              ${title}
            </a>
          </p>
        </div>
      </div>
    `;
  }

  loadTrending();
});
