// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Arman Akcay",
    image: "images/renfu.jpg",
    designation: "TBD",
    view: "TBD",
    linkednURL: "TBD",
  },
  {
    id: 1,
    name: "Marcio Azevedo",
    image: "images/marcio.jpeg",
    designation: "Senior software engineer at ASML | Java",
    view: "During the internship, Ren Fu was asked to explore a technology that was not known by anyone in the team where he was assigned to. The idea was to migrate one of our existing test tools to that new technology. Ren Fu was able to do all the research by his own and then successfully build the solution and present to the team as a proof of concept.\nDue to his ability to self-study and exploring new subjects by his own, I would like to give my recommendation for his professional growth"
  }
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
