// newest-dev.js
// Fetches newest news articles (frontend dev version — for production, use backend to hide API key)

document.addEventListener('DOMContentLoaded', () => {

  // ✅ NewsData API (Technology, Latest, 4 Articles)
  const API_URL = `https://newsdata.io/api/1/latest?apikey=pub_fda5f763f216452fba36d8b4cc57cc25&q=technology`;

  const container = document.getElementById('newest-articles');

  const FALLBACK_IMG = 'Assets/newest1.png';

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  async function loadNewest() {
    container.innerHTML = '<div class="text-center py-4">Loading newest news…</div>';

    try {
      const response = await fetch(API_URL);

      if (!response.ok) throw new Error(`Network error: ${response.status}`);

      const data = await response.json();
      console.log("NewsData.io:", data);

      const articles = (data?.results || []).slice(0, 4);

      if (articles.length === 0) {
        container.innerHTML = '<p>No newest articles right now.</p>';
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
      document.getElementById('tryAgain').addEventListener('click', loadNewest);
    }
  }

  function renderCard(a) {
    const title = escapeHtml(a?.title || 'Untitled');
    const image = escapeHtml(a?.image_url || FALLBACK_IMG);
    const url = a?.link || '#';
    const category = escapeHtml((a?.category?.[0]) || 'General');
    const para = escapeHtml(a?.description || 'No description available.');
    const readTime = '5 mins read'; // static placeholder (NewsData doesn't give this)

    return `
      <div class="col-lg-3 col-md-6">
        <div class="ratio ratio-16x9 overflow-hidden">
          <img src="${image}" loading="lazy" class="w-100 h-100 object-fit-cover" alt="${title}" />
        </div>

        <h5 class="line-height mt-3 truncate-2-lines">
          <a class="truncate-2-lines" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
            ${title}
          </a>
        </h5>

        <p class="paragraph-text-light truncate-2-lines">
          <a class="truncate-2-lines" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
            ${para}
          </a>
        </p>

        <div class="d-flex align-items-center">
          <div class="meta-item">
            <p style="color: black;" class="meta-text mb-0">${category}</p>
          </div>
          <div class="meta-divider">
            <p style="color: black;" class="meta-text mb-0">${readTime}</p>
          </div>
        </div>
      </div>
    `;
  }

  loadNewest();
});
