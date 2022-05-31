import { productCard } from "./data/productApi";
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(productCard)
  }
}

