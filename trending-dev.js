// trending-dev.js
// This script fetches latest trending news using NewsAPI (for dev/testing)
// I’m using my personal API key here, but in real deployment I’ll keep it hidden in backend.

// Wait until the page DOM is fully loaded before running
document.addEventListener('DOMContentLoaded', () => {

    // My NewsAPI key (⚠️ don’t expose this in production!)
    const API_KEY = 'b1f158578adb4fdd8a4789cecf213ed9';

    // This is where the news cards will be injected
    const container = document.getElementById('trending-articles');

    // Fallback image (local PNG) if article has no image
    const FALLBACK_IMG = 'Assets/trending1.png';

    // ---- Function: Escape any HTML in strings ----
    // Why? To avoid malicious code from running if API sends weird input
    function escapeHtml(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')   // & becomes &amp;
        .replace(/</g, '&lt;')    // < becomes &lt;
        .replace(/>/g, '&gt;')    // > becomes &gt;
        .replace(/"/g, '&quot;')  // " becomes &quot;
        .replace(/'/g, '&#039;'); // ' becomes &#039;
    }

    // ---- Main Function: Load trending articles ----
    async function loadTrending() {

      // While fetching, show a loading message
      container.innerHTML = '<div class="text-center py-4">Loading trending news…</div>';

      try {
        // Build API URL — getting top headlines from US, limiting to 12
        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${API_KEY}`;

        // Call the API
        const response = await fetch(url);

        // If the server responds with an error status
        if (!response.ok) throw new Error('Network response not ok: ' + response.status);

        // Convert JSON into usable JS object
        const data = await response.json();

        // NewsAPI sometimes returns more — slice to only 9 for layout
        const articles = (data.articles || []).slice(0, 9);

        // If nothing is returned, show a friendly message
        if (articles.length === 0) {
          container.innerHTML = '<p>No trending articles right now.</p>';
          return;
        }

        // Otherwise, render each article as a card
        container.innerHTML = articles.map(renderCard).join('');

      } catch (err) {
        // If the fetch fails (offline, API down, etc.)
        console.error('Fetch error', err);

        // Show an error + retry button
        container.innerHTML = `
          <div class="text-center py-4">
            <p class="text-danger">Could not load news. Please try again.</p>
            <button id="tryAgain" class="btn btn-link">Try again</button>
          </div>`;

        // When user clicks retry, try again
        document.getElementById('tryAgain').addEventListener('click', loadTrending);
      }
    }

    // ---- Function: Convert article object into HTML card ----
    function renderCard(a) {
      const title = escapeHtml(a.title || 'Untitled'); // protect + fallback
      const image = a.urlToImage || FALLBACK_IMG;      // fallback to local PNG
      const url = a.url || '#';                        // if no link, keep dummy

      return `
        <div class="col-md-4 col-sm-6">
          <div class="news-card">
            <a class="a" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
              <img src="${escapeHtml(image)}" alt="${title}">
            </a>
            <p class="paragraph-text-light truncate-2-lines">
              <a class="a" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${title}</a>
            </p>
          </div>
        </div>
      `;
    }

    // Kick off the first fetch when the page loads
    loadTrending();
});
