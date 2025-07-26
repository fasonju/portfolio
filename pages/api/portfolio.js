const portfolio = [
  {
    id: 0,
    projectName: "VisFork",
    url: "https://github.com/visvork-sep/VisFork",
    image: "projects/visfork.png",
    projectDetail: "Visualization tool for Git fork ecosystems.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "GraphQL",
      },
      {
        tech: "MySQL",
      },
      {
        tech: "d3",
      },
      {
        tech: "Git",
      },
    ],
  },
  {
    id: 1,
    projectName: "Portfolio",
    url: "https://github.com/fasonju/portfolio",
    image: "projects/portfolio.png",
    projectDetail: "This website",
    technologiesUsed: [
      {
        tech: "NextJs"
      },
      {
        tech: "Docker"
      },
      {
        tech: "TailwindCSS"
      }
    ]
  }
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
