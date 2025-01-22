





//  ===== Top News =====


const topNewsData = [
  {
      link: "https://www.thehindu.com/news/cities/Mangalore/centre-for-indian-cuisine-and-food-culture-inaugurated/article67376062.ece",
      image: "./assets/images/center_for.jpg",
      description: "Chef Vikas Khanna inaugurates a center dedicated to exploring the rich historical background and science behind Indian cuisine, aiming to place it firmly on the global culinary map."
  },
  {
      link: "https://time.com/4856954/can-money-buy-you-happiness/",
      image: "./assets/images/Money-Can-Buy.jpg",
      description: "New research challenges the age-old saying that money can't buy happiness. Economists and psychologists have found a strong correlation between wealth and well-being, suggesting that higher incomes contribute to both daily contentment and overall life satisfaction."
  },
  {
      link: "https://www.npr.org/2024/10/30/g-s1-30873/china-launches-new-crew-to-its-space-station-as-it-seeks-to-expand-exploration",
      image: "./assets/images/china_explore.jpg",
      description: "China successfully launched a three-person crew to its Tiangong space station, signaling further advancements in its space exploration program. The crew aims to conduct spacewalks and install new station equipment."
  },
  {
    link: "https://olympics.com/en/news/simone-biles-all-titles-records-medals-complete-list",
    image: "./assets/images/simone.avif",
    description: "American gymnast Simone Biles set a new record by winning her 28th World Championship title, surpassing the previous record of 27 titles held by Russian gymnast Svetlana Khorkina."
  },
  {
    link: "https://www.bbc.com/news/world-australia-65606208",
    image: "./assets/images/aus.jpeg",
    description: "Australia announces a new climate policy aimed at reducing carbon emissions by 40% by 2030. The move is expected to reshape the country's energy sector and strengthen global climate action."
  },
  {
    link: "https://www.thesun.co.uk/money/32878898/lindt-lindor-easter-egg-pistachio-tesco/",
    image: "./assets/images/food.webp",
    description: "Tesco stores across the UK are seeing a surge in customers eager to try Lindt's new Easter egg flavours: Lindor Milk Chocolate Egg with Pistachio Truffles, Lindor Tiramisu Egg, and an Extra Large Salted Caramel Egg. These additions have sparked mixed reactions among shoppers."
  },
  {
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9388078/",
    image: "./assets/images/covid.png",
    description: "A study published in the *ANZ Journal of Surgery* indicates that disruptions caused by the COVID-19 pandemic have led to an increase in advanced breast cancer diagnoses, highlighting the importance of timely screening."
  },
  {
    link: "https://www.cbsnews.com/news/nasa-parker-solar-probe-closest-ever-approach-sun/#:~:text=A%20NASA%20spacecraft%20made%20history,miles%20of%20the%20sun's%20surface.",
    image: "./assets/images/china_sun.jpg",
    description: "The NASA Parker Solar Probe completed its closest-ever approach to the sun on Christmas Eve, flying just 3.8 million miles above the sun's surface at a speed of 430,000 miles per hour. The spacecraft successfully survived the encounter, providing valuable data to understand solar phenomena."
  },
  {
    link: "https://www.euronews.com/my-europe/2024/10/10/eu-delays-again-its-new-entryexit-system-for-short-stay-travellers2",
    image: "./assets/images/euro.jpg",
    description: "The European Entry/Exit System, initially set for November 2024, has been postponed. Airlines warn of potential delays and congestion at airports once implemented."
  },
  {
    link: "https://www.vogue.com/article/troye-sivan-prada-milan-fashion-week-librarian-chic",
    image: "./assets/images/fas.webp",
    description: "Troye Sivan attended Prada's fall 2025 menswear show in Milan, sporting a 'librarian-chic' ensemble featuring steel-rimmed glasses, a gray cardigan, and a chocolate brown leather peacoat, signaling a new fashion era for the artist."
  },
  {
    link: "https://www.lbc.co.uk/news/nearly-a-third-of-pupils-receiving-extra-exam-time/",
    image: "./assets/images/exam.jpg",
    description: "Nearly 420,000 pupils in England are provided with extra time for their GCSE and A-level exams, quadruple the number from ten years ago, according to Ofqual."
  },
  {
    link: "https://mpora.com/multi-sport/adventure-holidays-best-kind-family-fun-can/",
    image: "./assets/images/tra.jpg",
    description: "Research indicates a rise in family adventure holidays, with destinations like Kenya and Thailand gaining popularity. Families seek educational and unique experiences during vacations."
  },
  {
    link: "https://apnews.com/article/italy-fashion-upcycled-simon-cracker-fa39e78120aee6318e819b0aa8397c51",
    image: "./assets/images/fast.jpeg",
    description: "Italian brand Simon Cracker showcased an upcycled collection at Milan Fashion Week, parodying luxury items like Hermes' Birkin bag to critique the industry's disconnect from quality and creativity."
  },
  {
    link: "https://olympics.com/en/paris-2024/the-games/olympic-paralympic-games/olympic-games",
    image: "./assets/images/oly.jpg",
    description: "The 2024 Paris Summer Olympics are set to showcase a wide array of exciting sports, including the return of surfing, skateboarding, and breakdancing. Paris promises to deliver a unique and thrilling experience for fans worldwide."
  },
  
];

// Function to create the "top-box" for each item in the top news array
function createTopNewsBox(newsData) {
  // Select the container where the top news boxes will be appended
  const topNewsContainer = document.querySelector('.topNews');

  // Loop through each item in the topNewsData array
  newsData.forEach(data => {
      // Create the top div element
      const topBox = document.createElement('div');
      topBox.classList.add('top');
      topBox.setAttribute('data-link', data.link);

      // Create the top_img div and set the background image
      const topImg = document.createElement('div');
      topImg.classList.add('top_img');
      topImg.style.backgroundImage = `url(${data.image})`;

      // Create the description paragraph
      const description = document.createElement('p');
      description.textContent = data.description;

      // Append the image and description to the top box
      topBox.appendChild(topImg);
      topBox.appendChild(description);

      // Append the top box to the container
      topNewsContainer.appendChild(topBox);
  });
}

// Call the function to create and append the top news boxes
createTopNewsBox(topNewsData);





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










//  ===== Thired Section =====


//  ===== ALL POST =====


// ---------------Array of post objects--------------------------------
const posts = [
  {
    category: "nature",
    title: "India's Record-Breaking Heat in 2024",
    date: "21 Jan 2025",
    description: "India experienced its hottest year since 1901, with the average minimum temperature 0.90°C above the long-term average. The Indian Meteorological Department (IMD) reported that the annual average land surface air temperature was 0.65°C higher than the 1991-2020 average, raising concerns about climate change and its impact on agriculture and daily life.",
    image: "./assets/images/heat.webp",
    link: "https://hindi.moneycontrol.com/news/india/2024-to-be-hottest-year-in-india-since-1901-most-parts-likely-to-remain-hot-in-january-imd-1947829.html?utm_source=chatgpt.com",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "science",
    title: "India's Push for Electric Vehicles Faces Challenges",
    date: "21 Jan 2025",
    description: "Despite efforts to promote electric vehicles (EVs), EVs currently hold just a 2% market share in India. Challenges such as inadequate battery life, insufficient charging infrastructure, and theft-prone chargers deter potential buyers, emphasizing the need for more comprehensive infrastructure development.",
    image: "./assets/images/ev.gif",
    link: "https://pune.news/auto/sealion-7-debuts-at-bharat-mobility-expo-byd-expands-india-ev-lineup-292623/",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "tech",
    title: "India's Space Ambitions: 'India Space Station' by 2035",
    date: "21 Jan 2025",
    description: "India has announced plans to establish the 'India Space Station' by 2035 and aims to land an Indian astronaut on the Moon by 2040. This ambitious initiative underscores India's growing capabilities in space exploration.",
    image: "./assets/images/space.webp",
    link: "https://economictimes.indiatimes.com/news/science/by-2035-india-will-set-up-its-own-space-station-and-set-foot-on-moon-by-2040-union-minister-jitendra-singh/articleshow/116203833.cms?from=mdr",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "finance",
    title: "PM Modi to Inaugurate Jewar Airport in April 2025",
    date: "21 Jan 2025",
    description: "Prime Minister Narendra Modi is scheduled to inaugurate the Jewar Airport in Uttar Pradesh in April 2025. The airport is expected to bring unprecedented prosperity to the region, enhancing connectivity and boosting economic growth.",
    image: "./assets/images/jewar.avif",
    link: "https://www.businesstoday.in/india/story/pm-modi-to-inaugurate-noida-international-airport-in-jewar-in-april-2025-458130-2024-12-21",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "news",
    title: "Former Army Chief V K Singh Sworn in as Mizoram Governor",
    date: "16 Jan 2025",
    description: "Former Army Chief General V K Singh was sworn in as the 25th Governor of Mizoram on January 16, 2025. His appointment is anticipated to bring valuable experience to the state's governance.",
    image: "./assets/images/vk_singh.avif",
    link: "https://www.newindianexpress.com/nation/2025/Jan/16/former-army-chief-vk-singh-sworn-in-as-mizoram-governor",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "politics",
    title: "Odisha Government to Provide Pension to Emergency Period Detainees",
    date: "21 Jan 2025",
    description: "The Odisha government announced a monthly pension of ₹20,000 for individuals who were imprisoned during the Emergency period (1975-1977). This initiative aims to honor their sacrifices and contributions to democracy.",
    image: "./assets/images/odisha.webp",
    link: "https://indianexpress.com/article/india/odisha-mohan-charan-majhi-pension-emergency-detainees-9776599/",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "tech",
    title: "ISRO's Successful Space Docking Experiment",
    date: "21 Jan 2025",
    description: "ISRO successfully executed the Space Docking Experiment (SpaDeX), marking India's entry into the elite club of nations capable of autonomous docking in space. This achievement enhances India's capabilities in space missions and satellite servicing.",
    image: "./assets/images/isro.webp",
    link: "https://www.thehindu.com/sci-tech/science/isro-successfully-executes-spadex-docking-experiment-india-joins-elite-club-of-nations/article69103462.ece",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "tech",
    title: "India Becomes 3rd Largest Smartphone Exporter",
    date: "21 Jan 2025",
    description: "India has emerged as the third-largest exporter of smartphones worldwide, with exports exceeding ₹20,000 crore in November 2024. This growth reflects India's expanding role in the global electronics manufacturing sector.",
    image: "./assets/images/smart.jpeg",
    link: "https://currentaffairs.adda247.com/india-emerges-as-3rd-largest-exporter-in-smartphone-market/",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "news",
    title: "India Signs Multiple MoUs with Sri Lanka",
    date: "16 Dec 2024",
    description: "On December 16, 2024, India signed multiple Memoranda of Understanding (MoUs) with Sri Lanka in New Delhi to enhance cooperation across various sectors, including trade, tech, and cultural exchange. These agreements aim to strengthen bilateral ties and promote regional stability.",
    image: "./assets/images/sri.jpg",
    link: "https://ddnews.gov.in/en/india-and-sri-lanka-sign-key-mous-to-strengthen-bilateral-ties/#:~:text=India%20and%20Sri%20Lanka%20signed,day%20state%20visit%20to%20India.",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "food",
      title: "Centre for Indian Cuisine and Food Culture Inaugurated",
      date: "15 Jan 2025",
      description: "Chef Vikas Khanna inaugurates a center dedicated to exploring the rich historical background and science behind Indian cuisine, aiming to place it firmly on the global culinary map.",
      image: "./assets/images/center_for.jpg",
      link: "https://www.thehindu.com/news/cities/Mangalore/centre-for-indian-cuisine-and-food-culture-inaugurated/article67376062.ece",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "health",
      title: "Money can buy happiness! Here's the science",
      date: "16 Jan 2025",
      description: "New research challenges the age-old saying that money can't buy happiness. Economists and psychologists have found a strong correlation between wealth and well-being, suggesting that higher incomes contribute to both daily contentment and overall life satisfaction.",
      image: "./assets/images/Money-Can-Buy.jpg",
      link: "https://time.com/4856954/can-money-buy-you-happiness/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "news",
      title: "China launches new crew to its space station as it seeks to expand exploration",
      date: "17 Jan 2025",
      description: "China successfully launched a three-person crew to its Tiangong space station, signaling further advancements in its space exploration program. The crew aims to conduct spacewalks and install new station equipment.",
      image: "./assets/images/china_explore.jpg",
      link: "https://www.npr.org/2024/10/30/g-s1-30873/china-launches-new-crew-to-its-space-station-as-it-seeks-to-expand-exploration",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "sports",
      title: "Simone Biles Breaks Record for Most World Championship Titles",
      date: "18 Jan 2025",
      description: "American gymnast Simone Biles set a new record by winning her 28th World Championship title, surpassing the previous record of 27 titles held by Russian gymnast Svetlana Khorkina.",
      image: "./assets/images/simone.avif",
      link: "https://olympics.com/en/news/simone-biles-all-titles-records-medals-complete-list",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "news",
      title: "Australia to Implement Groundbreaking Climate Policy",
      date: "19 Jan 2025",
      description: "Australia announces a new climate policy aimed at reducing carbon emissions by 40% by 2030. The move is expected to reshape the country's energy sector and strengthen global climate action.",
      image: "./assets/images/aus.jpeg",
      link: "https://www.bbc.com/news/world-australia-65606208",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "fashion",
      title: "Prada's Instinctive Menswear Shines at Milan Fashion Week",
      date: "19 Jan 2025",
      description: "Miuccia Prada and Raf Simons unveil a raw and cinematic menswear collection, blending primitive and domestic elements, advocating for instinctive dressing as a form of resistance to challenging times.",
      image: "./assets/images/Italy_Fashion.avif",
      link: "https://apnews.com/article/milan-fashion-week-prada-miuccia-raf-simons-709d6cc22235940f525cc0692fbb5bac#:~:text=Men%20were%20invited%20to%20wear,tops%20or%20slightly%20ratty%20sweaters.",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "travel",
      title: "Seat Squatters on Planes: The Latest Social Media Trend",
      date: "19 Jan 2025",
      description: "A new trend involves passengers occupying seats assigned to others in hopes of upgrades. Experts advise against this practice, emphasizing the importance of respecting assigned seating.",
      image: "./assets/images/seat.webp",
      link: "https://www.hindustantimes.com/lifestyle/travel/selfish-seat-squatters-travel-trend-stirs-up-flight-drama-redditors-share-their-most-awkward-encounters-101734329003782.html",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "food",
      title: "Shoppers Rush to Tesco for New Lindt Easter Egg Flavours",
      date: "19 Jan 2025",
      description: "Tesco stores across the UK are seeing a surge in customers eager to try Lindt's new Easter egg flavours: Lindor Milk Chocolate Egg with Pistachio Truffles, Lindor Tiramisu Egg, and an Extra Large Salted Caramel Egg. These additions have sparked mixed reactions among shoppers.",
      image: "./assets/images/food.webp",
      link: "",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "health",
      title: "New Research Links Rise in Advanced Breast Cancer to COVID-19",
      date: "19 Jan 2025",
      description: "A study published in the *ANZ Journal of Surgery* indicates that disruptions caused by the COVID-19 pandemic have led to an increase in advanced breast cancer diagnoses, highlighting the importance of timely screening.",
      image: "./assets/images/covid.png",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9388078/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "education",
      title: "China Unveils 2024-2035 Plan to Build 'Strong Education Nation'",
      date: "19 Jan 2025",
      description: "China has announced a comprehensive plan for 2024-2035 to strengthen its education system, focusing on expanding free education, optimizing school distribution, and increasing enrollment in high-quality undergraduate programs.",
      image: "./assets/images/chine_edu.avif",
      link: "https://www.reuters.com/world/asia-pacific/china-unveils-2024-2035-plan-build-strong-education-nation-2025-01-19/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "science",
  title: "NASA Probe Completes Historic Closest-Ever Approach to Sun",
  date: "19 Jan 2025",
  description: "The NASA Parker Solar Probe completed its closest-ever approach to the sun on Christmas Eve, flying just 3.8 million miles above the sun's surface at a speed of 430,000 miles per hour. The spacecraft successfully survived the encounter, providing valuable data to understand solar phenomena.",
  image: "./assets/images/china_sun.jpg",
  link: "https://www.cbsnews.com/news/nasa-parker-solar-probe-closest-ever-approach-sun/#:~:text=A%20NASA%20spacecraft%20made%20history,miles%20of%20the%20sun's%20surface.",
  profileImage: "./assets/images/tom.jpg",
  profileName: "Tanmoy",
  profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "lifestyle",
      title: "Eight out of 10 Brits want to be 'more Italian' and adopt a 'slower, more relaxed pace of life', new research shows",
      date: "19 Jan 2025",
      description: "A recent study commissioned by Italian coffee company Lavazza shows that 80% of British people wish to adopt a more Italian lifestyle characterized by a slower and more relaxed pace of life. The research, which surveyed 2,000 adults, revealed that many Brits admire Italian culture, describing it as passionate, laid-back, and sophisticated.",
      image: "./assets/images/slower.webp",
      link: "https://www.thesun.co.uk/fabulous/31110047/brits-more-italian-slower-more-relaxed-lifestyle-research/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "finance",
      title: "Trump's New Crypto Token Surges Ahead of Inauguration",
      date: "19 Jan 2025",
      description: "Former President Donald Trump's newly launched cryptocurrency token has experienced a significant surge in value as his inauguration approaches, attracting attention from investors and the media.",
      image: "./assets/images/trump.avif",
      link: "https://www.thehindu.com/sci-tech/tech/trump-promotes-new-meme-coin-before-taking-office-on-pro-crypto-agenda/article69118222.ece",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "travel",
      title: "New European Border Checks Delayed Again Amid Airline Concerns",
      date: "19 Jan 2025",
      description: "The European Entry/Exit System, initially set for November 2024, has been postponed. Airlines warn of potential delays and congestion at airports once implemented.",
      image: "./assets/images/euro.jpg",
      link: "https://www.euronews.com/my-europe/2024/10/10/eu-delays-again-its-new-entryexit-system-for-short-stay-travellers2",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "fashion",
      title: "Troye Sivan's Fashion Week Look? Librarian-Chic",
      date: "19 Jan 2025",
      description: "Troye Sivan attended Prada's fall 2025 menswear show in Milan, sporting a 'librarian-chic' ensemble featuring steel-rimmed glasses, a gray cardigan, and a chocolate brown leather peacoat, signaling a new fashion era for the artist.",
      image: "./assets/images/fas.webp",
      link: "https://www.vogue.com/article/troye-sivan-prada-milan-fashion-week-librarian-chic",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "sports",
      title: "Govt should leverage sports industry for economic growth: Report",
      date: "19 Jan 2025",
      description: "The government should create a model to boost the sports industry for economic growth. Policies need to encourage investment in sports infrastructure, events, and related services.",
      image: "./assets/images/spt.webp",
      link: "https://brandequity.economictimes.indiatimes.com/news/research/govt-should-leverage-sports-industry-for-economic-growth-report/115930284#:~:text=%22The%20Indian%20government%20should%20focus,of%20Sports%20in%20India%20report.",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "education",
      title: "A Third of Pupils Now Receive Extra Time in Exams",
      date: "19 Jan 2025",
      description: "Nearly 420,000 pupils in England are provided with extra time for their GCSE and A-level exams, quadruple the number from ten years ago, according to Ofqual.",
      image: "./assets/images/exam.jpg",
      link: "https://www.lbc.co.uk/news/nearly-a-third-of-pupils-receiving-extra-exam-time/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "travel",
      title: "Families Opting for Adventure Holidays Despite Challenges",
      date: "19 Jan 2025",
      description: "Research indicates a rise in family adventure holidays, with destinations like Kenya and Thailand gaining popularity. Families seek educational and unique experiences during vacations.",
      image: "./assets/images/tra.jpg",
      link: "https://mpora.com/multi-sport/adventure-holidays-best-kind-family-fun-can/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  }, 
      {
      category: "fashion",
      title: "Independent Brand Simon Cracker Denounces Luxury Fashion System with Upcycled Parodies",
      date: "19 Jan 2025",
      description: "Italian brand Simon Cracker showcased an upcycled collection at Milan Fashion Week, parodying luxury items like Hermes' Birkin bag to critique the industry's disconnect from quality and creativity.",
      image: "./assets/images/fast.jpeg",
      link: "https://apnews.com/article/italy-fashion-upcycled-simon-cracker-fa39e78120aee6318e819b0aa8397c51",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "entertainment",
      title: "Rob Lowe Reflects on 'St. Elmo's Fire' Fame and Halloween Costumes",
      date: "19 Jan 2025",
      description: "Rob Lowe recalls the surreal experience of seeing people dressed as his 'St. Elmo's Fire' character for Halloween, marking the peak of his career during the Brat Pack era. He hints at the potential for a 'St. Elmo's Fire' sequel, although it is in the very early stages of development.",
      image: "./assets/images/rob.jpg",
      link: "https://people.com/rob-lowe-recalls-surreal-experience-inspired-halloween-costumes-in-80s-exclusive-8727679",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "sports",
      title: "The 2024 Summer Olympics: What to Expect in Paris",
      date: "19 Jan 2025",
      description: "The 2024 Paris Summer Olympics are set to showcase a wide array of exciting sports, including the return of surfing, skateboarding, and breakdancing. Paris promises to deliver a unique and thrilling experience for fans worldwide.",
      image: "./assets/images/oly.jpg",
      link: "https://olympics.com/en/paris-2024/the-games/olympic-paralympic-games/olympic-games",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "nature",
      title: "Butterflies Flee to Scotland in the Face of Climate Change",
      date: "19 Jan 2025",
      description: "Over the past 40 years, climate change has driven ten new butterfly species to Scotland, traditionally found in England and Wales. This shift highlights the impact of climate change on species distribution.",
      image: "./assets/images/butt.jpg",
      link: "https://www.thetimes.com/uk/scotland/article/butterflies-flee-to-scotland-in-the-face-of-climate-change-mclnmsprv",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "politics",
      title: "Priyanka Gandhi Vadra to Contest Indian Parliamentary Election",
      date: "19 Jan 2025",
      description: "Priyanka Gandhi Vadra, a member of India's influential Nehru-Gandhi family, has filed her nomination to contest the upcoming parliamentary elections from the Wayanad constituency in Kerala. This marks her formal entry into electoral politics.",
      image: "./assets/images/gandhi.webp",
      link: "https://www.thehindu.com/news/national/profile-of-priyanka-gandhi-vadra-contesting-from-wayanad-lok-sabha-constituency/article68783333.ece",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "culture",
      title: "Indian American Dhol Band to Perform at Trump's Inauguration Parade",
      date: "19 Jan 2025",
      description: "An Indian American Dhol band from Texas will perform at Donald Trump's inauguration parade, showcasing India's musical traditions to a global audience. This performance highlights the growing recognition of Indian culture and the strong cultural ties between the US and India.",
      image: "./assets/images/parade.webp",
      link: "https://www.hindustantimes.com/world-news/us-news/indian-american-dhol-band-to-participate-in-donald-trump-inauguration-parade-101736249901947.html",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "movies",
      title: "Emergency: Kangana Ranaut's Political Drama Hits the Big Screen",
      date: "19 Jan 2024",
      description: "Directed by Kangana Ranaut, 'Emergency' is a political drama focusing on the 1975 Emergency period in India. The film showcases a gripping narrative and stellar performances.",
      image: "./assets/images/emergrncy.jpeg",
      link: "https://economictimes.indiatimes.com/magazines/panache/emergency-box-office-day-3-kangana-ranauts-political-drama-collects-over-rs-10-crore-beats-azaad-game-changer/articleshow/117385541.cms?from=mdr",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "music",
      title: "Manchester Camerata/Pioro Review: Thrilling New Twist on The Four Seasons",
      date: "1 Jan 2025",
      description: "Violinist Daniel Pioro, in collaboration with the Manchester Camerata, presented a dynamic interpretation of Vivaldi's 'The Four Seasons,' enhanced by new poems penned by Michael Morpurgo and read by Stephen Fry. The performance was described as thrilling and imaginative, blending baroque and folk styles.",
      image: "./assets/images/mancam.png",
      link: "https://www.thetimes.com/culture/classical-opera/article/manchester-cameratapioro-review-thrilling-new-twist-on-the-four-seasons-nvkj0n8gd#:~:text=Pioro%20takes%20many%20liberties%2C%20from,and%20pure%20intonation%2C%20not%20indulgence.",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "nature",
      title: "Slight Progress in Global Biodiversity Protection Efforts but Some Species Decline, New Reports Find",
      date: "10 Jan 2025",
      description: "Recent reports indicate moderate progress in global biodiversity protection, with 17.6% of land and inland waters and 8.4% of oceans and coastal areas now protected. However, 38% of the world's trees are at risk of extinction, underscoring the need for accelerated conservation efforts.",
      image: "./assets/images/slight.avif",
      link: "https://www.business-standard.com/world-news/slight-progress-in-biodiversity-protection-but-some-species-decline-report-124102801183_1.html",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "science",
      title: "The Mind-Bending New Science of Measuring Time",
      date: "11 Jan 2025",
      description: "The definition of time has evolved significantly with scientific advancements, moving from celestial observations to atomic precision. Researchers at the National Institute of Standards and tech (NIST) are at the forefront of timekeeping, maintaining highly accurate atomic clocks and considering redefining the second based on optical clocks for even finer measurements.",
      image: "./assets/images/mind.avif",
      link: "https://www.ft.com/content/625d2043-a5a4-4d6d-bbe9-42e524a211dd",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "lifestyle",
      title: "What Dry January can do for the ‘sober curious’",
      date: "12 Jan 2025",
      description: "Scott Strode, founder of sober-active community The Phoenix, shares his journey to sobriety and how it led to a more active lifestyle. He discusses the benefits of participating in Dry January and how it can help individuals explore a sober lifestyle.",
      image: "./assets/images/dry.jpeg",
      link: "https://www.usatoday.com/story/money/food/2025/01/01/dry-january-alcohol-abstinence-mocktail-health/77202754007/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
      category: "entertainment",
      title: "Chris Hemsworth in Talks to Play Prince Charming in Upcoming Disney Live-Action Film",
      date: "13 Jan 2025",
      description: "Actor Chris Hemsworth is reportedly in discussions to portray Prince Charming in a new Disney live-action movie directed by Paul King. The film's plot details have not been disclosed, but it is said not to be linked to Cinderella.",
      image: "./assets/images/Chris-Hemsworth.webp",
      link: "https://variety.com/2024/film/news/chris-hemsworth-prince-charming-disney-paul-king-1236187996/",
      profileImage: "./assets/images/tom.jpg",
      profileName: "Tanmoy",
      profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  {
    category: "sports",
    title: "India’s Historic Victory in the 2023 ICC Cricket World Cup",
    date: "19 Jan 2025",
    description: "India's cricket team clinched the 2023 ICC Cricket World Cup, defeating Australia in a thrilling final. This victory marks India's third World Cup win, cementing their place in cricket history.",
    image: "./assets/images/india_win.jpg",
    link: "https://news.abplive.com/sports/cricket/india-commenced-their-historic-icc-cricket-world-cup-2023-campaign-on-this-day-1-year-ago-vs-australia-chennai-kolhi-rohit-kl-rahul-hardik-pandya-chepauk-1722979",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  },
  
  {
    category: "tech",
    title: "India Ranked Second in QS World Future Skills Index 2025",
    date: "21 Jan 2025",
    description: "India has been ranked second, after the United States, in the QS World Future Skills Index 2025, highlighting its readiness in areas like artificial intelligence, digital, and green skills. This ranking underscores India's commitment to developing a skilled workforce for the future.",
    image: "./assets/images/future.webp",
    link: "https://indianexpress.com/article/explained/explained-economics/qs-ranking-india-say-jobs-skills-9784091/#:~:text=India%20Future%20Job%20Market%3A%20India,World%20Future%20Skills%20Index%202025.",
    profileImage: "./assets/images/tom.jpg",
    profileName: "Tanmoy",
    profileLink: "https://www.linkedin.com/in/tanmoy-majee-empty/"
  }
  

];

// Function to create post-box elements
function createPosts() {
  const container = document.querySelector('.post.container'); // Select the container to append posts

  posts.forEach(post => {
      const postBox = document.createElement('div');
      postBox.classList.add('post-box', post.category);
      postBox.setAttribute('data-link', post.link);

      postBox.innerHTML = `
          <img src="${post.image}" alt="" class="post-img">
          <h2 class="category">#${post.category}</h2>
          <a href="${post.link}" target="_blank" class="post-title">${post.title}</a>
          <span class="post-date">${post.date}</span>
          <p class="post-description">${post.description}</p>
          <div class="profile" data-link="${post.profileLink}">
              <img src="${post.profileImage}" alt="" class="profile-img">
              <span class="profile-name">${post.profileName}</span>
          </div>
      `;

      container.appendChild(postBox);
  });
}

// Call the function to render posts
createPosts();






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






//  ===== Filter Items =====






document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".filter-item");
  const postBoxes = document.querySelectorAll(".post-box");

  // Helper function for smooth display
  function smoothDisplay(element, displayStyle) {
    if (displayStyle === "block") {
      element.style.opacity = 0; // Start transparent
      element.style.display = displayStyle;
      setTimeout(() => {
        element.style.transition = "opacity 0.5s ease"; // Smooth transition
        element.style.opacity = 1; // Fade in
      }, 10);
    } else {
      element.style.transition = "opacity 0.5s ease"; // Smooth transition
      element.style.opacity = 0; // Fade out
      setTimeout(() => {
        element.style.display = displayStyle; // Set to "none" after fade-out
      }, 500);
    }
  }

  filterItems.forEach(function (filterItem) {
    filterItem.addEventListener("click", function () {
      const value = filterItem.getAttribute("data-filter");

      postBoxes.forEach(function (postBox) {
        if (value === "all" || postBox.classList.contains(value)) {
          smoothDisplay(postBox, "block");
        } else {
          smoothDisplay(postBox, "none");
        }
      });

      // Update active filter
      filterItems.forEach(function (item) {
        item.classList.remove("active-filter");
      });
      filterItem.classList.add("active-filter");
    });
  });
});















//  ===== Trending Section =====

  
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
  
  


  






  //  ===== Iconic Person =====







  // Data structure for cards
const cards = [
  {
    imageSrc: './assets/images/ratan_tata.png',
    alt: 'Ratan Tata',
    name: 'Ratan Tata',
    lifespan: '(1937–2024)',
    description: 'Ratan Tata, former chairman of Tata Group, passed away in October 2024, leaving behind a legacy of global business success and ethical leadership. His philanthropic efforts in education, healthcare, and rural development continue to inspire.'
  },
  {
    imageSrc: './assets/images/lata_mangeskhar.png',
    alt: 'Lata Mangeshkar',
    name: 'Lata Mangeshkar',
    lifespan: '(1929–2022)',
    description: 'Lata Mangeshkar, the legendary playback singer, passed away in February 2022. Known as the "Nightingale of India," her voice enchanted generations, with thousands of timeless songs across Indian cinema. Her contribution to music and culture made her an iconic figure in India and beyond.'
  },
  {
    imageSrc: './assets/images/pandit_birju_maharaj.png',
    alt: 'Pandit Birju Maharaj',
    name: 'Pandit Birju Maharaj',
    lifespan: '(1938–2022)',
    description: 'Pandit Birju Maharaj, a celebrated Kathak dancer, passed away in January 2022. Renowned for his mastery and graceful storytelling through dance, he was a living legend in Indian classical dance. He passed on a legacy of artistry, education, and passion for Kathak.'
  },
  {
    imageSrc: './assets/images/apj.png',
    alt: 'Dr. APJ Abdul Kalam',
    name: 'Dr. APJ Abdul Kalam ',
    lifespan: '(1931–2015)',
    description: `Dr. APJ Abdul Kalam, the 11th President of India, was a visionary scientist and an inspirational leader who made significant contributions to India's space and defense programs. He passed away in 2015, but his ideals of education, innovation, and patriotism continue to guide and inspire millions.`
  }
  ,
  {
    imageSrc: './assets/images/vangelis.png',
    alt: 'Vangelis',
    name: 'Vangelis',
    lifespan: '(1943–2022)',
    description: `Although not Indian, Vangelis passed in May 2022 and his work had significant influence in India. The composer of the iconic score for "Chariots of Fire" and "Blade Runner," Vangelis' music inspired many filmmakers and artists globally, including in Indian cinema.`
  },
  {
    imageSrc: './assets/images/sidhu.png',
    alt: 'Sidhu Moosewala',
    name: 'Sidhu Moosewala',
    lifespan: ' (1993–2022)',
    description: 'Sidhu Moosewala, a Punjabi singer and politician, tragically passed away in May 2022. Known for his rebellious lyrics and deep connection with youth culture, his music became a symbol of social and political commentary. His untimely death left a lasting impact on the music industry and his fans worldwide.'
  },
  {
    imageSrc: './assets/images/chuni.png',
    alt: 'Chuni Goswami',
    name: 'Chuni Goswami ',
    lifespan: '(1938–2020)',
    description: 'Chuni Goswami, a legendary footballer and cricketer, passed away in 2020. His sporting achievements in both cricket and football made him one of India’s greatest all-round athletes. He was a beloved figure in West Bengal and a respected sports personality in the country.'
  },
  {
    imageSrc: './assets/images/banchendri.png',
    alt: 'Bachendri Pal',
    name: 'Bachendri Pal ',
    lifespan: '(1954–2023)',
    description: 'Bachendri Pal, an iconic mountaineer, passed away in 2023. She was the first Indian woman to summit Mount Everest and inspired countless individuals with her achievements in adventure sports. Pal’s passion for mountaineering and her leadership in the field of sports continue to be a source of inspiration.'
  },
  {
    imageSrc: './assets/images/sushant.png',
    alt: 'Sushant Singh Rajput',
    name: 'Sushant Singh Rajput ',
    lifespan: '(1986–2020)',
    description: 'Sushant Singh Rajput was an actor known for his versatile roles in Bollywood, including his portrayal of cricketer MS Dhoni. His tragic death in 2020 brought attention to mental health issues in the film industry, and his legacy continues to inspire young talent.'
  },
  {
    imageSrc: './assets/images/kurien.png',
    alt: 'Dr. Verghese Kurien',
    name: 'Dr. Verghese Kurien',
    lifespan: '(1921–2012)',
    description: `Dr. Verghese Kurien, the "Father of the White Revolution," played a key role in transforming India into the world’s largest milk producer. He founded the National Dairy Development Board (NDDB) and the Amul cooperative, which empowered millions of dairy farmers.`
  },
  {
    imageSrc: './assets/images/kalpana.png',
    alt: 'Kalpana Chawla',
    name: 'Kalpana Chawla ',
    lifespan: '(1961–2003)',
    description: `Kalpana Chawla was the first woman of Indian origin in space. She made history as a NASA astronaut, and her untimely death in the Columbia space shuttle disaster in 2003 did not diminish her legacy. She continues to inspire future generations of scientists and space explorers.`
  },
  {
    imageSrc: './assets/images/vikram.png',
    alt: 'Vikram Sarabhai',
    name: 'Vikram Sarabhai ',
    lifespan: '(1919–1971)',
    description: `Vikram Sarabhai is considered the father of the Indian space program. His leadership in establishing the Indian Space Research Organisation (ISRO) laid the foundation for India's advancements in space technology. He passed away in 1971, but his work continues to shape India's space exploration.`
  }
  // Add more cards as needed
];

// Function to generate the HTML for the cards dynamically
function generateCards() {
  const container = document.getElementById('card-container');
  container.innerHTML = ''; // Clear the container before adding new cards

  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-index', index); // Store the index for future modification

    // Use backticks (``) for string interpolation
    cardElement.innerHTML = `
      <div class="imgBx">
        <img src="${card.imageSrc}" alt="${card.alt}">
      </div>
      <div class="details">
        <h2>${card.name} <br>${card.lifespan}</h2>
        <p>${card.description}</p>
      </div>
    `;

    // Append the card element to the container
    container.appendChild(cardElement);
  });
}

// Call the function to generate cards when the page loads
generateCards();
