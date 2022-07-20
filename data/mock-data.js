import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const imagePath = path.join(__dirname, "../public/uploads/");

export default [
  {
    img: `${imagePath}img1.jpeg`,
    title: "Alicia Keys: 'I felt I was from another planet'",
    excerpt:
      'The R&B star on feeling like an "outsider", police brutality and the advice she gave Billie Eilish',
    category: "Entertainment & Arts",
  },
  {
    img: `${imagePath}img2.jpeg`,
    title: "Alligator on gas snaps up Ig Nobel prize",
    excerpt:
      "The 2020 Ig Nobel prizes honour crocodilian vocalisations, narcissistic eyebrows and vibrating worms",
    category: "Science & Environment",
  },
  {
    img: `${imagePath}img3.jpeg`,
    title: "Banksy loses 'flower bomber' trademark battle",
    excerpt:
      'The elusive artist was "inconsistent with honest practices" in the case, EU authorities say',
    category: "Entertainment & Arts",
  },
];
