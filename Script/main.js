document.addEventListener("DOMContentLoaded", () => {

  const API_URL =
    "https://newsdata.io/api/1/latest?apikey=pub_fda5f763f216452fba36d8b4cc57cc25&q=latest";

  // HERO elements
  const heroTitle = document.querySelector(".top-news");
  const heroPara = document.querySelector(".paragraph-text");
  const heroImg = document.querySelector(".main-news img");

  const heroCategory = document.querySelector(".meta-item .meta-text");
  const heroAuthor = document.querySelectorAll(".meta-divider .meta-text")[0];
  const heroDate = document.querySelectorAll(".meta-divider .meta-text")[1];

  // Sidebar + below
  const sidebarContainer = document.getElementById("article-list");
  const belowContainer = document.getElementById("article-listBelow");

  async function loadHeaderNews() {
    try {
      heroTitle.textContent = "Loading news…";

      const response = await fetch(API_URL);
      const data = await response.json();

      const articles = data?.results || [];

      if (!articles.length) {
        heroTitle.textContent = "No news available right now.";
        return;
      }

      // ------------- HERO -------------
      const hero = articles[0];

      heroTitle.textContent = hero?.title || "Untitled";
      heroPara.textContent =
        hero?.description || "No description available right now.";
      heroImg.src = hero?.image_url || "Assets/hero-image.png";

      heroCategory.textContent =
        hero?.category?.[0] || "News";

      heroAuthor.textContent =
        hero?.source_id || "Unknown Source";

      heroDate.textContent =
        hero?.pubDate?.split(" ")[0] || "";

      // ------------- SIDEBAR (1–3) -------------
      const sidebar = articles.slice(1, 4);
      sidebarContainer.innerHTML = sidebar
        .map(
          (a) => `
          <div class="side-news-item mb-4">
            <h5 class="truncate-2-lines">
              <a href="${a?.link}" target="_blank" class="a dark">
                ${a?.title || ""}
              </a>
            </h5>
            <p class="paragraph-text-light truncate-2-lines textGray">
              ${a?.description || ""}
            </p>
          </div>
        `
        )
        .join("");

      // ------------- BELOW HERO GRID (6 items) -------------
      const below = articles.slice(4, 10);

      belowContainer.innerHTML = below
        .map(
          (a) => `
          <div class="col-lg-4 col-md-6 mb-4 px-3">
            <div class="ratio ratio-16x9 overflow-hidden">
              <img src="${a?.image_url || "Assets/newest1.png"}"
                class="w-100 h-100 object-fit-cover" />
            </div>

            <h5 class="mt-3 truncate-2-lines">
              <a class="a dark" href="${a?.link}" target="_blank">
                ${a?.title || ""}
              </a>
            </h5>

            <p class="paragraph-text-light truncate-2-lines textGray">
              ${a?.description || ""}
            </p>
          </div>
        `
        )
        .join("");

    } catch (err) {
      console.error("Hero Load Error", err);
      heroTitle.textContent = "Failed to load news.";
    }
  }

  loadHeaderNews();
});
