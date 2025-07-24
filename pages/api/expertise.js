const expertise = [
  {
    id: 0,
    title: "System development",
    desc: "I have a good understanding of operating systems, Linux specifically, and am able to write low level programs that are performant and maintainable",
  },
  {
    id: 1,
    title: "DBMS",
    desc: "During my time at the database group of Technical University of Eindhoven, I contributed and gained deep understandings of the inner workings of DBMS. I understand their architecture and how one would go about constructing one.",
  },
  {
    id: 2,
    title: "Scrum and Jira",
    desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
  },
  {
    id: 3,
    title: "Full Stack Development",
    desc: "I have hands-on experience with a wide range of frontend and backend technologies. On the frontend, I specialize in building responsive and dynamic user interfaces using frameworks like React and Angular. On the backend, I’m proficient in developing robust APIs and server-side applications with tools such as Spring Boot, Express.js, and Rocket.rs. I also have strong skills in integrating applications with databases, including MySQL, Firebase, and SQLite.",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource projects that I like using.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
