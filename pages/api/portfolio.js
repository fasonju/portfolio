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
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
