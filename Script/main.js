
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


  document.addEventListener("DOMContentLoaded", function () {
    const trending = [
      {
        title: "Scientists Identify Molten Layer Deep Within Interior of Mars",
        image: "Assets/trending1.png",
      },
      {
        title: "Speciality Chemicals Manufacturer and Global Distributor, Devine Chemicals has doubled the size of its head office and opened a research centre.",
        image: "Assets/trending2.png",
      },
      {
        title: "Neuron E-scooter Access in Saskatoon Stops as Cold Weather Rolls In",
        image: "Assets/trending3.png",
      },
      {
        title: "Civilizations are Probably Spreading Quickly Through the Universe",
        image: "Assets/trending4.png",
      },
      {
        title: "Chemistry Study Improves Method to Measure Vibrations of Solids",
        image: "Assets/trending5.png",
      },
      {
        title: "Qualcomm's Powerful Snapdragon X Elite Processor Scores Partnerships from More leading laptop OEMs",
        image: "Assets/trending6.png",
      },
      {
        title: "Researchers Identify Metals Released into the Atmosphere by Satellite Reentry",
        image: "Assets/trending7.png",
      },
      {
        title: "Human Powered Health adds 'pure climber' Doebel-Hickok for 2024",
        image: "Assets/trending8.png",
      },
      {
        title: "Indonesia Ranks Low on Internet Speed, Free Trial Rides on 'Whoosh' High-speed Train Extended",
        image: "Assets/trending9.png",
      },
      {
        title: "SpaceX Falcon 9 Launches 23 Starlink Satellites from Cape Canaveral",
        image: "Assets/trending10.png",
      },
      {
        title: "Source of Raw Milk Causing Illness Found, Health Officials Report",
        image: "Assets/trending11.png",
      },
      {
        title: "You Need to Know About These 3 New Features on the iPhone 15 Pro and 15 Pro Max",
        image: "Assets/trending12.png",
      }
      ];
      const trendingContainer = document.getElementById("trending-articles");

      function renderTrendingArticle(trending) {
        return `
          <div class="col-md-4 col-sm-6">
            <div class="news-card">
              <img src="${trending.image}" alt="News Image">
              <p class="paragraph-text-light truncate-2-lines">${trending.title}</p>
            </div>
          </div>
        `;
      }
      
      trendingContainer.innerHTML = trending.map(renderTrendingArticle).join('');
  });