
document.addEventListener("DOMContentLoaded", () => {
    const topNews = document.querySelector(".topNews");
    const scrollStep = 1; // Pixels to scroll per interval
    const intervalTime = 20; // Time in milliseconds for each scroll step

    const autoScroll = () => {
        topNews.scrollTop += scrollStep;

        // Check if the scroll reached the end
        if (topNews.scrollTop + topNews.clientHeight >= topNews.scrollHeight) {
            topNews.scrollTop = 0; // Reset to the top
        }
    };

    // Start automatic scrolling
    const scrollInterval = setInterval(autoScroll, intervalTime);
});



  
  let nums = ['./assets/images/sports1.gif','./assets/images/health1.gif', './assets/images/sports2.gif','./assets/images/sports3.gif','./assets/images/health2.gif','./assets/images/health3.gif','./assets/images/sports2.gif','./assets/images/health4.gif'];
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
  
  


  