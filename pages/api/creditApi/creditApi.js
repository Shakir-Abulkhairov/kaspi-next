import { creditApi } from "./data/questionsCardApi"
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(creditApi)
  }
}

