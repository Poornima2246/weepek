// // src/data/projects.js
// // Single source of truth for StickyShowcase + WeepekWorkDetail

// import web from "../assets/shinobi_mockup.png";
// import web1 from "../assets/tada_mockup.png";
// import Branding from "../assets/Branding_mockup.png";
// import Branding1 from "../assets/Branding1_mockup.png";
// import white3 from "../assets/lap2.jpg";

// // Optional: more images when you fill real content
// // import lap from "../assets/lap.jpg";
// // import lap1 from "../assets/lap1.jpg";
// // etc.

// export const projects = [
//   {
//     id: "rhea",
//     number: "01",
//     label: "RHEA JEWELS",
//     type: "Web",
//     category: "WEB · 2025",
//     titleLine1: "Rhea",
//     titleLine2: "Jewels",
//     desc:
//       "An elegant digital storefront designed to make every piece feel as precious as it is. Refined visuals, seamless browsing, and a shopping experience built to turn admiration into action. +62% leads.",
//     cta: "View the work",
//     href: "/works/rhea",
//     image: web, // showcase image

//     // —— full detail page data ——
//     name: "Rhea Jewels",
//     tagline: "An elegant digital storefront designed to make every piece feel as precious as it is.",
//     cover: web,
//     services: ["Brand", "Web"],
//     year: "2025",
//     client: "Rhea Jewels",
//     timeline: "6 weeks",
//     liveUrl: "https://example.com", // update when ready

//     brief: {
//       question: ["What did", "they need?"],
//       text: "Add two simple lines here about who the client is and what they asked for.",
//       did: ["Added point one.", "Added point two.", "Added point three."],
//     },

//     statement: {
//       img: web,
//       words: ["Simple.", "Bold.", "Theirs."],
//     },

//     process: [
//       {
//         title: "Discover",
//         text: "One line about how we learned the brand.",
//         img: web,
//       },
//       {
//         title: "Design",
//         text: "One line about the look and feel.",
//         img: web,
//       },
//       {
//         title: "Develop",
//         text: "One line about how it was built.",
//         img: web,
//       },
//     ],

//     gallery: [
//       { img: web, caption: "Homepage", size: "wide" },
//       { img: web, caption: "Product page", size: "tall" },
//       { img: web, caption: "Packaging", size: "tall" },
//       { img: web, caption: "Collection", size: "wide" },
//       // { img: web, caption: "Full view", size: "full" },
//     ],

//     brand: {
//       color: "#f97316",
//       logo: "Rhea",
//       swatches: ["#f97316", "#1a1a1a", "#f5efe6", "#a78bfa"],
//       font: "Font name",
//     },

//     devices: {
//       laptop: web,
//       phone: web,
//     },

//     results: [
//       { prefix: "+", to: 62, suffix: "%", label: "Leads" },
//       { prefix: "", to: 3, suffix: "x", label: "Engagement" },
//       { prefix: "+", to: 45, suffix: "%", label: "Conversion" },
//     ],

//     quote: {
//       text: "They understood our vision from day one and delivered beyond expectations.",
//       name: "Jane Doe",
//       role: "Founder, Rhea Jewels",
//     },
//   },

//   {
//     id: "blur",
//     number: "02",
//     label: "BLUR STUDIO",
//     type: "Brand",
//     category: "BRAND · 2025",
//     titleLine1: "Blur",
//     titleLine2: "Studio",
//     desc:
//       "A distinctive visual identity built for a studio that refuses to blend in. From its visual language to its smallest details, every element works together to create a brand that feels bold, consistent, and impossible to overlook.",
//     cta: "View the work",
//     href: "/works/blur",
//     image: web1,

//     name: "Blur Studio",
//     tagline: "A distinctive visual identity built for a studio that refuses to blend in.",
//     cover: web1,
//     services: ["Brand"],
//     year: "2025",
//     client: "Blur Studio",
//     timeline: "8 weeks",
//     liveUrl: null,

//     brief: {
//       question: ["What did", "they need?"],
//       text: "Placeholder brief for Blur Studio.",
//       did: ["Visual identity", "Brand guidelines", "Collateral system"],
//     },

//     statement: {
//       img: web1,
//       words: ["Bold.", "Consistent.", "Unmistakable."],
//     },

//     process: [
//       { title: "Discover", text: "Understanding the studio DNA.", img: web1 },
//       { title: "Design", text: "Building the visual language.", img: web1 },
//       { title: "Deliver", text: "Guidelines and applications.", img: web1 },
//     ],

//     gallery: [
//       { img: web1, caption: "Identity", size: "wide" },
//       { img: web1, caption: "Applications", size: "tall" },
//       { img: web1, caption: "Guidelines", size: "tall" },
//       { img: web1, caption: "Full system", size: "full" },
//     ],

//     brand: {
//       color: "#a78bfa",
//       logo: "Blur",
//       swatches: ["#a78bfa", "#0b0613", "#ffffff", "#ed710c"],
//       font: "Font name",
//     },

//     devices: null, // brand project – no devices

//     results: [],
//     quote: null,
//   },

//   {
//     id: "white",
//     number: "03",
//     label: "WHITE ROOM",
//     type: "App",
//     category: "APP · 2024",
//     titleLine1: "White",
//     titleLine2: "Room",
//     desc:
//       "A quieter, more considered approach to the booking experience. Clean interfaces, effortless navigation, and thoughtful interactions remove the friction from every visit, giving users more reasons to return. +48% repeat bookings.",
//     cta: "View the work",
//     href: "/works/white",
//     image: Branding,

//     name: "White Room",
//     tagline: "A quieter, more considered approach to the booking experience.",
//     cover: Branding,
//     services: ["App", "UI/UX"],
//     year: "2024",
//     client: "White Room",
//     timeline: "10 weeks",
//     liveUrl: null,

//     brief: {
//       question: ["What did", "they need?"],
//       text: "Placeholder brief for White Room.",
//       did: ["UX flows", "UI system", "Motion design"],
//     },

//     statement: {
//       img: Branding,
//       words: ["Quiet.", "Clear.", "Inevitable."],
//     },

//     process: [
//       { title: "Discover", text: "Mapping the booking friction.", img: Branding },
//       { title: "Design", text: "Building calm, focused UI.", img: Branding },
//       { title: "Develop", text: "Shipping the product.", img: Branding },
//     ],

//     gallery: [
//       { img: Branding, caption: "Home", size: "wide" },
//       { img: Branding, caption: "Booking", size: "tall" },
//       { img: Branding, caption: "Profile", size: "tall" },
//       { img: Branding, caption: "Full flow", size: "full" },
//     ],

//     brand: null,
//     devices: null,

//     results: [
//       { prefix: "+", to: 48, suffix: "%", label: "Repeat bookings" },
//     ],
//     quote: null,
//   },

//   {
//     id: "north",
//     number: "04",
//     label: "NORTH AVENUE",
//     type: "SEO",
//     category: "SEO · 2025",
//     titleLine1: "North",
//     titleLine2: "Avenue",
//     desc:
//       "A search strategy designed to put the brand where its audience is already looking. Through focused keyword targeting, technical refinement, and content optimisation, we turned online visibility into a stronger digital presence.",
//     cta: "View the work",
//     href: "/works/north",
//     image: Branding1,

//     name: "North Avenue",
//     tagline: "A search strategy designed to put the brand where its audience is already looking.",
//     cover: Branding1,
//     services: ["SEO", "Content"],
//     year: "2025",
//     client: "North Avenue",
//     timeline: "12 weeks",
//     liveUrl: null,

//     brief: {
//       question: ["What did", "they need?"],
//       text: "Placeholder brief for North Avenue.",
//       did: ["Keyword strategy", "Technical SEO", "Content plan"],
//     },

//     statement: {
//       img: Branding1,
//       words: ["Visible.", "Found.", "Growing."],
//     },

//     process: [
//       { title: "Audit", text: "Technical and content baseline.", img: Branding1 },
//       { title: "Strategy", text: "Keywords and priorities.", img: Branding1 },
//       { title: "Execute", text: "Optimisation and content.", img: Branding1 },
//     ],

//     gallery: [
//       { img: Branding1, caption: "Dashboard", size: "wide" },
//       { img: Branding1, caption: "Rankings", size: "tall" },
//       { img: Branding1, caption: "Content", size: "tall" },
//       { img: Branding1, caption: "Results", size: "full" },
//     ],

//     brand: null,
//     devices: null,
//     results: [],
//     quote: null,
//   },

//   {
//     id: "your-turn",
//     number: "05",
//     label: "YOUR TURN",
//     type: "Your turn",
//     category: "YOUR TURN",
//     titleLine1: "Make it",
//     titleLine2: "unforgettable",
//     desc:
//       "Every great project starts with an idea worth exploring. Whether you're building something new or reimagining what already exists, let's create something meaningful, distinctive, and impossible to ignore. Your next chapter starts here.",
//     cta: "Start a project",
//     href: "#contact", // special case – no detail page
//     image: white3,

//     // no full detail needed for CTA slide
//     name: "Your Turn",
//     tagline: "",
//     cover: white3,
//     services: [],
//     year: "",
//     client: "",
//     timeline: "",
//     liveUrl: null,
//     brief: null,
//     statement: null,
//     process: [],
//     gallery: [],
//     brand: null,
//     devices: null,
//     results: [],
//     quote: null,
//   },
// ];

// /** Showcase-only shape (what StickyShowcase needs) */
// export const slides = projects.map((p) => ({
//   id: p.id,
//   number: p.number,
//   label: p.label,
//   type: p.type,
//   category: p.category,
//   titleLine1: p.titleLine1,
//   titleLine2: p.titleLine2,
//   desc: p.desc,
//   cta: p.cta,
//   href: p.href,
//   image: p.image,
// }));

// export const TOTAL_DISPLAY = String(projects.length).padStart(2, "0");

// /** Helpers for detail page */
// export function getProjectById(id) {
//   return projects.find((p) => p.id === id) || null;
// }

// export function getNextProject(id) {
//   const idx = projects.findIndex((p) => p.id === id);
//   if (idx === -1) return null;

//   // skip "your-turn" if you want, or cycle through real projects only
//   const real = projects.filter((p) => p.id !== "your-turn");
//   const realIdx = real.findIndex((p) => p.id === id);
//   if (realIdx === -1) return null;

//   const next = real[(realIdx + 1) % real.length];
//   return {
//     name: next.name,
//     cover: next.cover || next.image,
//     href: `/works/${next.id}`,
//   };
// }


// src/data/projects.js
// Single source of truth for StickyShowcase + WeepekWorkDetail

import web from "../assets/shinobi_mockup.png";
import web1 from "../assets/tada_mockup.png";
import Branding from "../assets/Branding_mockup.png";
import Branding1 from "../assets/Branding1_mockup.png";
import white3 from "../assets/lap2.jpg";

// desert den
import Den1 from '../assets/den1.png';
import Den2 from '../assets/den2.png';
import Den3 from '../assets/den3.png';
import Den4 from '../assets/den4.png';
import Den5 from '../assets/den5.png';
import Den6 from '../assets/den6.png';
import Den7 from '../assets/den7.png';

import d61 from '../assets/d61.png';
import d62 from '../assets/d62.png';
import d63 from '../assets/d63.png';


/*
  GALLERY DIMENSIONS

  width: "100%"  = Full available width
  width: 400     = 400px
  height: 600    = 600px

  Every image can have its own dimensions.
*/

export const projects = [
  // =====================================================
  // 01.Desert Den
  // =====================================================
  
{
  id: "desert-den",
  number: "01",
  label: " DESERT DEN",
  type: "Branding",
  category: "Branding · 2025",
  titleLine1: "Desert",
  titleLine2: "Den",

  desc: "A delightful bakery experience crafted to make every treat feel special. A warm visual identity, thoughtful presentation, and a memorable brand experience designed to turn cravings into connections. +62% leads.",

  cta: "View the work",
  href: "/works/desert-den",
  image: Den5,

  // DETAIL PAGE
  name: "Desert Den",
  tagline: "A delightful bakery experience crafted to make every treat feel special.",
  cover: Den6,
  services: ["Brand", "logo"],
  year: "2025",
  client: "Desert Den",
  timeline: "1 weeks",
  liveUrl: "https://example.com",

  // CONTEXT
  context: {
    category: "Bakery Branding & Logo Design",

    paragraphs: [
      "Desert Den wanted a distinctive brand identity that could capture the warmth, freshness and irresistible appeal of its baked creations. The brand needed to feel welcoming while creating a memorable impression among customers.",

      "The challenge was to build a visual identity that reflected the bakery's personality while making its products instantly recognisable across packaging, promotional materials and digital platforms."
    ]
  },

  // SOLUTION
  solution: {
    paragraphs: [
      "We developed a distinctive visual direction inspired by the warmth and charm of a modern bakery. Every branding element was designed to communicate freshness, quality and the joy of indulging in something delicious.",

      "From the logo and colour palette to the overall visual language, the identity brings consistency across customer touchpoints and creates a recognisable bakery brand."
    ]
  },

  brief: {
    question: ["What did", "they need?"],

    text: "A memorable bakery brand identity that communicates warmth, freshness and quality while creating a consistent experience across every customer touchpoint.",

    did: [
      "Created a distinctive bakery logo and brand identity.",
      "Developed a warm and appetising colour palette.",
      "Designed a consistent visual language for brand applications."
    ]
  },

  statement: {
    img: web,
    words: ["Fresh.", "Warm.", "Delicious."]
  },

  process: [
    {
      title: "Discover",
      text: "Understanding the bakery, its products, personality and target audience.",
      img: web1
    },
    {
      title: "Design",
      text: "Creating a warm visual identity that captures the charm of the bakery.",
      img: web
    },
    {
      title: "Develop",
      text: "Bringing the identity together through consistent brand applications.",
      img: web
    }
  ],

  // CUSTOM GALLERY
  gallery: [
    {
      img: Den5,
      caption: "Brand Identity",
      width: "30%",
      height: 1500
    },
    {
      img: Den2,
      caption: "Brand Experience",
      width: "60%",
      height: 1500
    },
     {
        img: Branding,
        caption: "Home",
        width: "100%",
        height: 1250
      },
  ],

  brand: {
    color: "#f97316",
    logo: "Desert Den",
    swatches: ["#f97316", "#1a1a1a", "#f5efe6", "#a78bfa"],
    font: "Font name"
  },

  devices: {
    laptop: web,
    phone: web
  },

  results: [
    { prefix: "+", to: 62, suffix: "%", label: "Leads" },
    { prefix: "", to: 3, suffix: "x", label: "Engagement" },
    { prefix: "+", to: 45, suffix: "%", label: "Conversion" }
  ],

  quote: {
    text: "They captured the heart of our bakery and transformed it into a brand that feels truly special.",
    name: "Jane Doe",
    role: "Founder, Desert Den"
  }
},


  // =====================================================
  // 02. tadaa
  // =====================================================
  // {
  //   id: "blur",
  //   number: "02",
  //   label: "BLUR STUDIO",
  //   type: "Brand",
  //   category: "BRAND · 2025",
  //   titleLine1: "Blur",
  //   titleLine2: "Studio",

  //   desc: "A distinctive visual identity built for a studio that refuses to blend in. From its visual language to its smallest details, every element works together to create a brand that feels bold, consistent, and impossible to overlook.",

  //   cta: "View the work",
  //   href: "/works/blur",
  //   image: web1,

  //   name: "Blur Studio",
  //   tagline: "A distinctive visual identity built for a studio that refuses to blend in.",
  //   cover: web1,
  //   services: ["Brand"],
  //   year: "2025",
  //   client: "Blur Studio",
  //   timeline: "8 weeks",
  //   liveUrl: null,

  //   context: {
  //     category: "Creative Studio & Branding",

  //     paragraphs: [
  //       "Blur Studio needed a visual identity with a clear point of view. The brand had to communicate its creative character while staying consistent across different applications.",

  //       "The challenge was to build a recognisable identity that felt expressive and distinctive without losing clarity or flexibility."
  //     ]
  //   },

  //   solution: {
  //     paragraphs: [
  //       "We developed a bold visual language built around confident typography, a distinctive identity and a flexible graphic system.",

  //       "The identity was designed to work as one connected system, giving Blur Studio a consistent presence across its brand applications."
  //     ]
  //   },

  //   brief: {
  //     question: ["What did", "they need?"],

  //     text: "A distinctive identity system that gives the studio a recognisable visual voice and works consistently across its applications.",

  //     did: [
  //       "Developed the visual identity.",
  //       "Created a typography and graphic system.",
  //       "Designed brand applications and guidelines."
  //     ]
  //   },

  //   statement: {
  //     img: web1,
  //     words: ["Bold.", "Consistent.", "Unmistakable."]
  //   },

  //   process: [
  //     {
  //       title: "Discover",
  //       text: "Understanding the studio's character and creative direction.",
  //       img: web1
  //     },
  //     {
  //       title: "Design",
  //       text: "Building a bold and recognisable visual language.",
  //       img: web1
  //     },
  //     {
  //       title: "Deliver",
  //       text: "Bringing the identity together across its applications.",
  //       img: web1
  //     }
  //   ],

  //   gallery: [
  //     // {
  //     //   img: web1,
  //     //   caption: "Identity",
  //     //   width: "100%",
  //     //   height: 700
  //     // },
  //     {
  //       img: web1,
  //       caption: "Applications",
  //       width: 500,
  //       height: 1500
  //     },
  //     {
  //       img: web1,
  //       caption: "Guidelines",
  //       width: 350,
  //       height: 1500
  //     },
  //     // {
  //     //   img: web1,
  //     //   caption: "Full System",
  //     //   width: "100%",
  //     //   height: 1200
  //     // }
  //   ],

  //   brand: {
  //     color: "#a78bfa",
  //     logo: "Blur",
  //     swatches: ["#a78bfa", "#0b0613", "#ffffff", "#ed710c"],
  //     font: "Font name"
  //   },

  //   devices: null,

  //   results: [],
  //   quote: null
  // },

  
{
  id: "blur",
  number: "02",
  label: "TADAA",
  type: "Ecommerce",
  category: "E-COMMERCE · 2025",
  titleLine1: "Tadaa",
  titleLine2: "Store",

  desc: "A vibrant ecommerce experience designed to make online shopping effortless. From intuitive product discovery to a seamless checkout journey, every detail was crafted to turn browsing into buying.",

  cta: "View the work",
  href: "/works/blur",
  image: web1,

  name: "Tadaa",
  tagline: "A vibrant ecommerce experience designed to make online shopping effortless.",
  cover: web1,
  services: ["UI/UX Design", "Web Development"],
  year: "2025",
  client: "Tadaa",
  timeline: "8 weeks",
  liveUrl: null,

  context: {
    category: "Ecommerce Design & Development",

    paragraphs: [
      "Tadaa needed a modern ecommerce platform that could showcase its products while delivering a smooth and engaging shopping experience. The website had to reflect the brand's personality while making product discovery simple and intuitive.",

      "The challenge was to bring visual appeal and functionality together, creating a responsive online store that makes browsing, exploring products and completing purchases effortless."
    ]
  },

  solution: {
    paragraphs: [
      "We designed a visually engaging ecommerce experience with a clear layout, intuitive navigation and carefully structured product sections. Every design decision was made to keep the products at the centre of attention.",

      "From frontend development to responsive interactions, we built a complete ecommerce experience focused on usability, performance and a seamless shopping journey across devices."
    ]
  },

  brief: {
    question: ["What did", "they need?"],

    text: "A modern, responsive ecommerce website that showcases products beautifully and provides customers with a simple and seamless online shopping experience.",

    did: [
      "Designed a complete ecommerce UI/UX experience.",
      "Developed a responsive and interactive online store.",
      "Created intuitive product browsing and shopping flows."
    ]
  },

  statement: {
    img: web1,
    words: ["Explore.", "Discover.", "Shop."]
  },

  process: [
    {
      title: "Discover",
      text: "Understanding the brand, its products and customer shopping behaviour.",
      img: web1
    },
    {
      title: "Design",
      text: "Crafting an engaging ecommerce interface with intuitive navigation and product presentation.",
      img: web1
    },
    {
      title: "Develop",
      text: "Building a responsive ecommerce platform with smooth interactions and a seamless shopping experience.",
      img: web1
    }
  ],

  // gallery: [
  //   {
  //     img: web1,
  //     caption: "Ecommerce Experience",
  //     width: 500,
  //     height: 1500
  //   },
  //   {
  //     img: web1,
  //     caption: "Product Experience",
  //     width: 350,
  //     height: 1500
  //   }
  // ],

  brand: {
    color: "#a78bfa",
    logo: "Tadaa",
    swatches: ["#a78bfa", "#0b0613", "#ffffff", "#ed710c"],
    font: "Font name"
  },

  devices: null,

  results: [],
  quote: null
},


  

  // =====================================================
  // 04. d6 beauty salon
  // =====================================================
 

  
{
  id: "Studio",
  number: "04",
  label: "D6 BEAUTY SALON",
  type: "Branding",
  category: "BRANDING · 2025",
  titleLine1: "D6 Beauty",
  titleLine2: "Studio",

  desc: "A beauty destination designed to bring professional beauty services and expert training together. From an elegant digital presence to a seamless user experience, we created a platform that showcases the salon's services and academy offerings.",

  cta: "View the work",
  href: "/works/Studio",
  image: Branding1,

  name: "D6 Beauty Salon & Academy",
  tagline: "A beauty destination bringing professional salon services and expert beauty education together.",
  cover: d61,
  services: ["UI/UX Design", "Web Development"],
  year: "2025",
  client: "D6 Beauty Salon & Academy",
  timeline: "12 weeks",
  liveUrl: null,

  context: {
    category: "Beauty Salon & Academy Website",

    paragraphs: [
      "D6 Beauty Salon & Academy needed a digital presence that could represent both its professional beauty services and its beauty education programmes. The platform had to communicate the brand's expertise while making its offerings easy to explore.",

      "The challenge was to bring the salon and academy under one digital experience, helping potential customers discover services and aspiring beauty professionals explore training opportunities."
    ]
  },

  solution: {
    paragraphs: [
      "We created a refined digital experience that highlights the salon's services and academy programmes through clear content sections, elegant layouts and intuitive navigation.",

      "The website brings together service discovery and course exploration in a responsive experience, making it easier for visitors to understand the offerings and connect with the brand."
    ]
  },

  brief: {
    question: ["What did", "they need?"],

    text: "A professional website that presents the salon's beauty services and academy courses through one engaging and easy-to-navigate digital experience.",

    did: [
      "Designed an elegant and user-friendly website.",
      "Organised salon services and academy offerings.",
      "Developed a responsive digital experience."
    ]
  },

  statement: {
    img: Branding1,
    words: ["Beauty.", "Expertise.", "Confidence."]
  },

  process: [
    {
      title: "Discover",
      text: "Understanding the salon's services, academy programmes and target audience.",
      img: Branding1
    },
    {
      title: "Design",
      text: "Creating an elegant interface that reflects the brand's beauty and expertise.",
      img: Branding1
    },
    {
      title: "Develop",
      text: "Building a responsive website that connects salon services with academy offerings.",
      img: Branding1
    }
  ],

  gallery: [
    {
      img: Branding1,
      caption: "Website Experience",
     width: "100%",
      height: 890
    },
    {
      img: d62,
      caption: "Salon Services",
      width: "60%",
      height: 1500
    },
    {
      img: d63,
      caption: "Academy Experience",
      width: "30%",
      height: 1500
    }
  ],

  brand: null,
  devices: null,
  results: [],
  quote: null
},


  // =====================================================
  // 05. YOUR TURN
  // =====================================================
  {
    id: "your-turn",
    number: "05",
    label: "YOUR TURN",
    type: "Your turn",
    category: "YOUR TURN",
    titleLine1: "Make it",
    titleLine2: "unforgettable",

    desc: "Every great project starts with an idea worth exploring. Whether you're building something new or reimagining what already exists, let's create something meaningful, distinctive, and impossible to ignore. Your next chapter starts here.",

    cta: "Start a project",
    href: "#contact",
    image: white3,

    name: "Your Turn",
    tagline: "",
    cover: white3,
    services: [],
    year: "",
    client: "",
    timeline: "",
    liveUrl: null,

    context: null,
    solution: null,
    brief: null,
    statement: null,
    process: [],
    gallery: [],
    brand: null,
    devices: null,
    results: [],
    quote: null
  }
];


/* =====================================================
   SHOWCASE DATA
===================================================== */

export const slides = projects.map((p) => ({
  id: p.id,
  number: p.number,
  label: p.label,
  type: p.type,
  category: p.category,
  titleLine1: p.titleLine1,
  titleLine2: p.titleLine2,
  desc: p.desc,
  cta: p.cta,
  href: p.href,
  image: p.image
}));


/* =====================================================
   HELPERS
===================================================== */

export const TOTAL_DISPLAY = String(projects.length).padStart(2, "0");

export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}

export function getNextProject(id) {
  const idx = projects.findIndex((p) => p.id === id);

  if (idx === -1) return null;

  // Skip "your-turn" and cycle through real projects only.
  const real = projects.filter((p) => p.id !== "your-turn");

  const realIdx = real.findIndex((p) => p.id === id);

  if (realIdx === -1) return null;

  const next = real[(realIdx + 1) % real.length];

  return {
    name: next.name,
    cover: next.cover || next.image,
    href: `/works/${next.id}`
  };
}