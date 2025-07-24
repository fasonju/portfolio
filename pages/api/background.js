const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Tsinghua University",
        degree: "M. Sc. Advanced Computing",
        detail:
          "Master degree in Advanced Computing from Tsinghua university, Thesis on LLM",
        year: "2025-2027",
      },
      {
        id: 1,
        title: "Techincal University of Eindhoven",
        degree: "B.Sc. Computer Science and Engineering",
        detail:
          "Bachelor's Degree in Computer Science and Engineering from Technical university of Eindhoven.",
        year: "2022-2025",
      },
    ],
  },
  {
    expCards: [
      {
        id: 0,
        title: "Technical University of Eindhoven (Database group)",
        role: "Software developer",
        url: "https://avantgraph.io/",
        desc: "Assisted on development of custom graph database. Implemented key functionalities such as Arithmetic operations and Cypher query language parsing",
        year: "07/2024 - 07/2025",
        location: "Eindhoven, Netherlands",
      },
      {
        id: 1,
        title: "Team HART",
        role: "Tech lead",
        url: "https://www.tue.nl/en/our-university/community/hart",
        desc: "As a developer and tech lead, I made major decisions for architecture, developed on those projects and instructed less experienced team members",
        year: "09/2023 - 04/2024",
        location: "Eindhoven, Netherlands",
      },
      {
        id: 2,
        title: "ASML",
        role: "Computer science intern",
        url: "https://https://www.asml.com/en",
        desc: "Ported desktop applications to WASM to improve portability, wrote documentation for future ports",
        year: "08/2023 - 03/2024",
        location: "Veldhoven, Netherlands",
      },
      {
        id: 3,
        title: "SGS Intron",
        role: "Internal tools developer",
        url: "https://www.sgs.com/nl-nl",
        desc: "Maintained internal tools using Angular and MySQL, also made some embedded systems for material testing using Arduino",
        year: "03/2023 - 09/2023",
        location: "Sittard, Netherlands",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
