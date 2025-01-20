
document.addEventListener("DOMContentLoaded", () => {
  const topNews = document.querySelector(".topNews");
  const topBox = document.querySelector(".topBox");
  
  // Increase the scroll step and reduce the interval time to make it faster
  const scrollStep = 3;  // Number of pixels to scroll per interval (higher value means faster scroll)
  const intervalTime = 5; // Time between each scroll step (lower value means faster scroll)

  let isScrollingDown = true; // Initial scroll direction (down)

  const autoScroll = () => {
    if (isScrollingDown) {
      topNews.scrollTop += scrollStep;

      // If the content reaches the bottom, reverse the scrolling direction
      if (topNews.scrollTop + topNews.clientHeight >= topNews.scrollHeight) {
        isScrollingDown = false;
      }
    } else {
      topNews.scrollTop -= scrollStep;

      // If the content reaches the top, reverse the scrolling direction
      if (topNews.scrollTop <= 0) {
        isScrollingDown = true;
      }
    }
  };

  // Start automatic scrolling
  const scrollInterval = setInterval(autoScroll, intervalTime);
});






// document.addEventListener("DOMContentLoaded", () => {
//   // Get all elements with class 'top'
//   const topElements = document.querySelectorAll(".top");

//   topElements.forEach(top => {
//     // Add click event listener to each .top element
//     top.addEventListener("click", () => {
//       // Get the value of the 'data-link' attribute
//       const link = top.getAttribute("data-link");
      
//       // Redirect the user to the link in a new tab
//       if (link) {
//         window.open(link, '_blank');
//       } else {
//         console.error("No data-link attribute found on this element.");
//       }
//     });
//   });

//   // Get all elements with class 'profile'
//   const profiles = document.querySelectorAll('.profile');

//   profiles.forEach(profile => {
//     // Add click event listener to each .profile element
//     profile.addEventListener('click', (event) => {
//       // Prevent the event from propagating to parent elements
//       event.stopPropagation();

//       // Get the value of the 'data-link' attribute
//       const link = profile.getAttribute("data-link");

//       // Redirect the user to the link in a new tab
//       if (link) {
//         window.open(link, '_blank');
//       } else {
//         console.error("No data-link attribute found on this element.");
//       }
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", () => {

  // Get all elements with class 'top'
  const topElements = document.querySelectorAll(".top");

  topElements.forEach(top => {
    // Add click event listener to each .top element
    top.addEventListener("click", () => {
      // Get the value of the 'data-link' attribute
      const link = top.getAttribute("data-link");
      
      // Redirect the user to the link in a new tab
      if (link) {
        window.open(link, '_blank');
      } else {
        console.error("No data-link attribute found on this element.");
      }
    });
  });



  // Get all elements with class 'post-box'
  const postBoxes = document.querySelectorAll('.post-box');

  postBoxes.forEach(postBox => {
    // Add click event listener to each .post-box element
    postBox.addEventListener('click', () => {
      // Get the value of the 'data-link' attribute
      const link = postBox.getAttribute("data-link");

      // Redirect the user to the link in a new tab
      if (link) {
        window.open(link, '_blank');
      } else {
        console.error("No data-link attribute found on this post-box element.");
      }
    });



    // Get the profile element inside the current post-box
    const profile = postBox.querySelector('.profile');

    if (profile) {
      // Add click event listener to the profile element
      profile.addEventListener('click', (event) => {
        // Prevent the event from propagating to the parent .post-box
        event.stopPropagation();

        // Get the value of the 'data-link' attribute for the profile
        const profileLink = profile.getAttribute("data-link");

        // Redirect the user to the profile link in a new tab
        if (profileLink) {
          window.open(profileLink, '_blank');
        } else {
          console.error("No data-link attribute found on this profile element.");
        }
      });
    }
  });
});


  
  let nums = ['./assets/images/trend1.jpg','./assets/images/trend2.webp','./assets/images/trend3.avif',"./assets/images/trend4.webp","./assets/images/trend5.jpeg","./assets/images/trend6.avif","./assets/images/trend7.jpg","./assets/images/trend8.jpg","./assets/images/trend9.jpg","./assets/images/trend10.webp","./assets/images/trend11.jpg","./assets/images/trend12.webp","./assets/images/trend13.webp","./assets/images/trend14.webp","./assets/images/trend15.jpg","./assets/images/trend16.png","./assets/images/trend17.webp","./assets/images/trend18.webp","./assets/images/trend19.jpeg","./assets/images/trend20.webp"];
  const title = [
    "India's G20 Presidency: Pioneering Global Change",
    "IPL 2025 Auction Sees Record-Breaking Bids",
    "India's Mars Mission 2.0 Set for Launch",
    "Economic Reforms: India Eyes Trillion-Dollar Milestone",
    "Women's Cricket League Inspires Next Generation",
    "India's Startup Ecosystem Rises to Global Prominence",
    "Political Alliances Reshape India's 2025 Elections",
    "India’s Digital Revolution Transforms Rural Landscapes",
    "Historic Win: India Clinches World Test Championship",
    "Chandrayaan's Legacy: Exploring Lunar Secrets",
    "Farm Laws Revisited: A Dialogue for Sustainable Growth",
    "India’s AI Advancements Lead to Global Collaboration",
    "National Education Policy Redefines Learning Pathways",
    "Electric Vehicles Surge in India’s Automotive Market",
    "India-Pakistan Relations: Cricket Diplomacy Renewed",
    "Floods and Droughts: Climate Change Challenges India",
    "Kashmir's Tourism Boom Brings New Hope",
    "Indian Cinema Wins Big at Global Film Festivals",
    "Renewable Energy Goals: India Leads the Charge",
    "Sports Infrastructure Overhaul Aims for Olympic Glory"
  ];
  
  const description = [
    "India takes center stage at the G20, showcasing leadership in sustainability and innovation.",
    "The IPL 2025 auction witnesses unprecedented player valuations, setting new industry benchmarks.",
    "India’s ambitious Mars Mission 2.0 aims to further its prowess in space exploration.",
    "Recent reforms position India as a powerhouse in the global trillion-dollar economy race.",
    "The Women's Cricket League inspires young athletes, promoting equality and representation in sports.",
    "India emerges as a global leader in the startup ecosystem with record-breaking investments.",
    "New alliances and strategies dominate India’s political landscape ahead of the 2025 elections.",
    "Digital initiatives transform rural India, bridging gaps in connectivity and opportunity.",
    "India celebrates a historic victory as the World Test Championship title returns home.",
    "Chandrayaan’s groundbreaking discoveries reveal critical insights about the Moon’s mysteries.",
    "Ongoing discussions about farm laws aim to balance progress with sustainable development.",
    "India’s advancements in AI lead to partnerships with global tech giants, reshaping industries.",
    "The new education policy emphasizes skill-based learning, empowering future generations.",
    "India accelerates its adoption of electric vehicles with incentives and infrastructure upgrades.",
    "India and Pakistan leverage cricket diplomacy to ease geopolitical tensions.",
    "Unpredictable weather patterns highlight the urgency of climate change mitigation in India.",
    "Kashmir sees a tourism revival, bringing economic growth and renewed optimism to the region.",
    "Indian filmmakers achieve global recognition, celebrating culture and storytelling worldwide.",
    "India’s renewable energy initiatives set ambitious goals, inspiring global collaboration.",
    "Upgraded sports facilities aim to improve India’s performance on the Olympic stage."
  ];
  
  let i = 0;
  let box = document.querySelector('#breakingImg');
  let t = document.querySelector('.t_title');
  let d = document.querySelector('.dt');
  
  // Use setInterval to cycle through images and content
  setInterval(() => {
      box.style.backgroundImage = `url(${nums[i]})`; // Set the background image
      t.innerText = title[i]; // Corrected the spelling of 'innerText'
      d.innerText = description[i]; // Corrected the spelling of 'innerText'
      i = (i + 1) % nums.length; // Increment index and reset to 0 if it reaches the end
  }, 2000); // Change image every 2 seconds
  
  


  