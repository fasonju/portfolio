// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Arman Akçay",
    image: "images/arman.jpeg",
    designation: "Microsoft consultant at Cloudify",
    view: "Ren Fu has always been extremely sharp and easy to work with when I've collaborated with him on a variety of projects, including AI, system design, and web development. He picks things up really quickly and isn’t afraid to dive into complex problems.  Ren always brings positive energy and insightful perspectives, whether he is coming up with new ideas or delving into technical details. Definitely someone I'd work with again.",
    linkednURL: "https://linkedin.com/in/arman-akçay-a0a10723a",
  },
  {
    id: 1,
    name: "Marcio Azevedo",
    image: "images/marcio.jpeg",
    designation: "Senior software engineer at ASML | Java",
    view: "During the internship, Ren Fu was asked to explore a technology that was not known by anyone in the team where he was assigned to. The idea was to migrate one of our existing test tools to that new technology. Ren Fu was able to do all the research by his own and then successfully build the solution and present to the team as a proof of concept.\nDue to his ability to self-study and exploring new subjects by his own, I would like to give my recommendation for his professional growth",
    linkednURL: "https://linkedin.com/in/mecva",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
