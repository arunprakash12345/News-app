
  document.addEventListener("DOMContentLoaded", function () {
    const articles = [
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
        image:"Assets/slide-image-2.png"
      },
      {
        author: "Natalia Freigman",
        date: "October 21, 2023",
        title: "Curiosity Rover Discovers New Evidence Mars Once…",
        category: "Space and Universe",
        readTime: "7 mins read",
        image:"Assets/slide-image-3.png"
      }
    ];

    const container = document.getElementById("article-list");

    function renderArticle(article) {
      return `

      <div class="col d-flex gap-3">
          <div class="col-lg-4 col-md-2">
            <img src="${article.image}" class="img-fluid w-100 object-cover" alt="Side Image 1" />
          </div>
          <div class="news-content ">
            <div class="d-flex align-items-center ">
              <div class="meta-item">
                <p class="meta-text mb-0">${article.author}</p>
              </div>
              <div class="meta-divider">
                <p class="meta-text mb-0">${article.date}</p>
              </div>
            </div> 
            <p class="news-heading mt-3">${article.title}</p>
            <div class="d-flex align-items-center ">
              <div class="meta-item">
                <p class="meta-text mb-0">${article.category}</p>
              </div>
              <div class="meta-divider">
                <p class="meta-text mb-0">${article.readTime}</p>
              </div>
            </div> 
          </div>
        </div>
        <br>
      `;
    }

    container.innerHTML = articles.map(renderArticle).join('');
  });




  document.addEventListener("DOMContentLoaded", function () {
    const articlese = [
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
        image:"Assets/slide-image-2.png"
      },
      {
        author: "Natalia Freigman",
        date: "October 21, 2023",
        title: "Curiosity Rover Discovers New Evidence Mars Once…",
        category: "Space and Universe",
        readTime: "7 mins read",
        image:"Assets/slide-image-3.png"
      },
      {
        author: "Natalia Freigman",
        date: "October 21, 2023",
        title: "Curiosity Rover Discovers New Evidence Mars Once…",
        category: "Space and Universe",
        readTime: "7 mins read",
        image:"Assets/slide-image-3.png"
      }
    ];

    const container = document.getElementById("article-listBelow");

    function renderArticle(article) {
      return `
      <div class="col-lg-3 d-flex gap-3 col-md-12">
          <div class="news-content ">
            <div class="d-flex align-items-center ">
              <div class="meta-item">
                <p class="meta-text mb-0">${article.author}</p>
              </div>
              <div class="meta-divider">
                <p class="meta-text mb-0">${article.date}</p>
              </div>
            </div> 
            <p class="news-heading mt-3">${article.title}</p>
            <div class="d-flex align-items-center ">
              <div class="meta-item">
                <p class="meta-text mb-0">${article.category}</p>
              </div>
              <div class="meta-divider">
                <p class="meta-text mb-0">${article.readTime}</p>
              </div>
            </div> 
          </div>
        </div>
        
        
      `;
    }

    container.innerHTML = articlese.map(renderArticle).join('');
  });



  document.addEventListener("DOMContentLoaded", function () {
    const temp = [
      {
        title: "‘Washy Clouds and a Weepy Sky Floating Upside Down...",
        category: "Our Planet",
        readTime: "8 mins read",
        image: "Assets/newest1.png",
        para:"Rocket Lab aims to return to flight this year after September launch failure. The company is still investigating the Sept."
      },
      {
        title: "‘Space Force Planning $8 Billion Satellite...",
        category: "Our Planet",
        readTime: "4 mins read",
        image: "Assets/newest2.png",
        para:"Space Force Planning $8 Billion Satellite Architecture for Nuclear Command and Control. Thadawda."
      },
      {
        title: "October’s Orionids Meteor Shower are Linked to...",
        category: "Our Planet",
        readTime: "5 mins read",
        image: "Assets/newest3.png",
        para:"Want to know how to watch October’s Orionids meteor shower and contemplate the wonders of sky that are linked to Halley’s comet? Here's the date, time, location"
      },
      {
        title: "China Sends Three More Astronauts to Space Station...",
        category: "Our Planet",
        readTime: "2 mins read",
        image: "Assets/newest4.png",
        para:"China has sent three astronauts to its space station to replace the current crew. The Shenzhou-17 blasted off from northwestern China."
      },
      
    ];

    const container = document.getElementById("newest-articles");

    function renderArticle(temp) {
      return `   
         <div class="col-lg-3 col-md-6">
          <img src="${temp.image}" class="img-fluid w-100 object-cover" alt="Side Image 1" />
          <h5 class="line-height mt-3 truncate-2-lines">${temp.title}</h5>
          <p  class="paragraph-text-light truncate-2-lines">${temp.para}</p>
          <div  class="d-flex align-items-center ">
            <div class="meta-item">
              <p style="color: black;" class="meta-text mb-0">${temp.category}</p>
            </div>
            <div class="meta-divider">
              <p style="color: black;" class="meta-text mb-0">${temp.readTime}</p>
            </div>
          </div> 
        </div>
        
      `;
    }

    container.innerHTML = temp.map(renderArticle).join('');
  });