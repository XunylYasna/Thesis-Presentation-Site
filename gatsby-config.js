const url = "https://lumen.netlify.com";

module.exports = {
  siteMetadata: {
    url,
    siteUrl: url,
    title: "Thesis Site",
    department: "Software Technology Department",
    program: "Undergraduate Thesis Program",
    thesisTitle:
      "Using Remote Sensing to Track Sidewalk Accessibility Issues to Improve Urban Planning",
    ccsConcepts: ["Machine Learning", "Computer Vision"],
    keywords: [
      "Urban Studies",
      "Remote Sensing",
      "Computer Vision",
      "Crowd-sourcing",
      "Machine Learning",
    ],
    subtitle:
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    copyright: "© All rights reserved.",
    members: [
      {
        name: "Lynux Louie K. Ansay",
        email: "lynux_ansay@dlsu.edu.ph",
        imageFileName: "Lynux.png",
      },
      {
        name: "Nicolas Steven T. Sy",
        email: "nicolas_sy@dlsu.edu.ph",
        imageFileName: "Nicolas.png",
      },
      {
        name: "Henric Ivan L. Tay",
        email: "henric_tay@dlsu.edu.ph",
        imageFileName: "Henric.png",
      },
      {
        name: "Rafael Nicolas A. Topacio",
        email: "rafael_topace@dlsu.edu.ph",
        imageFileName: "Noki.png",
      },
    ],
    advisers: [
      {
        name: "Unisse C. Chua",
        email: "unisse.chua@dlsu.edu.ph",
        imageFileName: "Unisse.png",
      },
      {
        name: "Briane Paul V. Samson",
        email: "briane.samson@dlsu.edu.ph",
        imageFileName: "Briane.png",
      },
    ],
    abstract:
      "The lack of open datasets regarding sidewalk accessibility has reduced the opportunity to assess and address inaccessible sidewalks. In this project, we assessed the features of Metro Manila sidewalks to determine its accessibility. The features are limited to sidewalk width, surface type, and common obstructions found on local sidewalks. By collecting Google Street View images of sidewalks in Makati and Manila city, we labeled common sidewalk obstructions and crowdsourced for accessibility score through a platform we developed. Additionally, we ran a regression model to identify the most influential features that affect sidewalk accessibility. Our results show that a rough surface and obstructions, such as construction materials, street vendor stands, and tricycles, negatively affect sidewalk accessibility. Oppositely, the presence of wide sidewalks and trees positively affect sidewalk accessibility. Lastly, we recommend using the platform to collect more data on sidewalk accessibility and to extend the scope to other cities in Metro Manila.",
    menu: [
      {
        label: "Conference Paper",
        path: "/",
      },
      {
        label: "Proponents",
        path: "/proponents/",
      },
      {
        label: "Abstract",
        path: "/abstract/",
      },
      {
        label: "Research Overview",
        path: "/research-overview/",
      },
      {
        label: "System Overview",
        path: "/system-overview/",
      },
      {
        label: "Modules and System Features",
        path: "/modules-features/",
      },
    ],
    author: {
      name: "We The Streets",
      email: "#",
      telegram: "#",
      twitter: "#",
      github: "#",
      rss: "#",
      vk: "#",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
};
