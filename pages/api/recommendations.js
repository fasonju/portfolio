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
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
