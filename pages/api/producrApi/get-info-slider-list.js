const fs = require('fs');

export default function handler(req, res) {
  const json_data = fs.readFileSync('pages/api-data/get-info-slider-list.json')
  res.status(200).json(JSON.parse(json_data))
}
//http://localhost:3000/api/producrApi/get-info-slider-list