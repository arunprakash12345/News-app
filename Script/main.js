// Run everything after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // ---------------------------
  // 1) Side articles in hero section (right column)
  // ---------------------------
  const sideArticles = [
    {
      author: "Daniel Albarta",
      date: "October 22, 2023",
      title: "‘Washy Clouds and a Weepy Sky Floating Upside Down…",
      category: "Our Planet",
      readTime: "8 mins read",
      image: "Assets/slide-image-1.png"
    },
    {
      author: "Donn Robinson",
      date: "October 21, 2023",
      title: "Rocket Lab Expects to Resume Electron Launche…",
      category: "Space and Universe",
      readTime: "4 mins read",
      image: "Assets/slide-image-2.png"
    },
    {
      author: "Natalia Freigman",
      date: "October 21, 2023",
      title: "Curiosity Rover Discovers New Evidence Mars Once…",
      category: "Space and Universe",
      readTime: "7 mins read",
      image: "Assets/slide-image-3.png"
    }
  ];

  function renderSideArticle(article) {
    return `
      <div class="col d-flex gap-3">
        <div class="col-lg-4 col-md-2">
          <img src="${article.image}" class="img-fluid w-100 object-cover" alt="${article.title}" />
        </div>
        <div class="news-content">
          <div class="d-flex align-items-center">
            <div class="meta-item"><p class="meta-text mb-0">${article.author}</p></div>
            <div class="meta-divider"><p class="meta-text mb-0">${article.date}</p></div>
          </div> 
          <p class="news-heading mt-3">${article.title}</p>
          <div class="d-flex align-items-center">
            <div class="meta-item"><p class="meta-text mb-0">${article.category}</p></div>
            <div class="meta-divider"><p class="meta-text mb-0">${article.readTime}</p></div>
          </div> 
        </div>
      </div>
      <br>
    `;
  }
  document.getElementById("article-list").innerHTML = sideArticles.map(renderSideArticle).join("");


  // ---------------------------
  // 2) Articles below hero section
  // ---------------------------
  const belowHeroArticles = [
    {
      author: "Daniel Albarta",
      date: "October 22, 2023",
      title: "‘Washy Clouds and a Weepy Sky Floating Upside Down…",
      category: "Our Planet",
      readTime: "8 mins read"
    },
    {
      author: "Donn Robinson",
      date: "October 21, 2023",
      title: "Rocket Lab Expects to Resume Electron Launche…",
      category: "Space and Universe",
      readTime: "4 mins read"
    },
    {
      author: "Natalia Freigman",
      date: "October 21, 2023",
      title: "Curiosity Rover Discovers New Evidence Mars Once…",
      category: "Space and Universe",
      readTime: "7 mins read"
    },
    {
      author: "Natalia Freigman",
      date: "October 21, 2023",
      title: "Curiosity Rover Discovers New Evidence Mars Once…",
      category: "Space and Universe",
      readTime: "7 mins read"
    }
  ];

  function renderBelowHeroArticle(article) {
    return `
      <div class="col-lg-3 d-flex gap-3 col-md-12">
        <div class="news-content">
          <div class="d-flex align-items-center">
            <div class="meta-item"><p class="meta-text mb-0">${article.author}</p></div>
            <div class="meta-divider"><p class="meta-text mb-0">${article.date}</p></div>
          </div> 
          <p class="news-heading mt-3">${article.title}</p>
          <div class="d-flex align-items-center">
            <div class="meta-item"><p class="meta-text mb-0">${article.category}</p></div>
            <div class="meta-divider"><p class="meta-text mb-0">${article.readTime}</p></div>
          </div> 
        </div>
      </div>
    `;
  }
  document.getElementById("article-listBelow").innerHTML = belowHeroArticles.map(renderBelowHeroArticle).join("");
});
