const portfolio = [
  {
    id: 0,
    projectName: "VisFork",
    url: "https://github.com/visvork-sep/VisFork",
    image: "https://www.vecteezy.com/free-vector/image-placeholder",
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
        tech: "Git",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
