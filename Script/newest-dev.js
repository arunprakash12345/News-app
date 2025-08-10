// newest-dev.js
// Fetches newest news articles (frontend dev version — for production, use backend to hide API key)

document.addEventListener('DOMContentLoaded', () => {

    //  Include all params directly here so no double "?"
    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=4&apiKey=b1f158578adb4fdd8a4789cecf213ed9`;
  
    // Container for news cards
    const container = document.getElementById('newest-articles');
  
    // Fallback image if article has no image
    const FALLBACK_IMG = 'Assets/newest1.png';
  
    // Escape HTML to avoid malicious injection
    function escapeHtml(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  
    // Main function to load newest articles
    async function loadNewest() {
      container.innerHTML = '<div class="text-center py-4">Loading newest news…</div>';
  
      try {
        const response = await fetch(API_URL);
  
        if (!response.ok) throw new Error(`Network error: ${response.status}`);
  
        const data = await response.json();
        console.log("NewsAPI data:", data); // 👀 See what the API sends
  
        const articles = data?.articles || [];
  
        if (articles.length === 0) {
          container.innerHTML = '<p>No trending articles right now.</p>';
          return;
        }
  
        // Render articles
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
  
    // Convert article object into HTML card
    function renderCard(a) {
      const title = escapeHtml(a?.title || 'Untitled');
      const image = escapeHtml(a?.urlToImage || FALLBACK_IMG);
      const url = a?.url || '#';
      const category = escapeHtml(a?.category || 'General');
      const readTime = escapeHtml(a?.readTime || '5 mins read');
      const para = escapeHtml(a?.description || 'No description available.');
  
      return `
        <div class="col-lg-3 col-md-6">
      <div class="ratio ratio-16x9 overflow-hidden">
        <img src="${image}" loading="lazy" class="w-100 h-100 object-fit-cover" alt="${title}" />
      </div>

      <h5 class="line-height mt-3 truncate-2-lines">
      <a class="truncate-2-lines" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${title}</a>
      </h5>
       <p class="paragraph-text-light truncate-2-lines">
              <a class="truncate-2-lines"  href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${para}</a>
       </p> 
      <div class="d-flex align-items-center">
        <div class="meta-item"><p style="color: black;" class="meta-text mb-0">${category}</p></div>
        <div class="meta-divider"><p style="color: black;" class="meta-text mb-0">${readTime}</p></div>
      </div> 
    </div>
      `;
    }
  
    // Load on page start
    loadNewest();
  });
  