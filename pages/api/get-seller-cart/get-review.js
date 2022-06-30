const fs = require('fs');

export default function handler(req, res) {
  const json_data = fs.readFileSync('pages/api-data/sellers-cart/get-review.json')
  res.status(200).json(JSON.parse(json_data))
}