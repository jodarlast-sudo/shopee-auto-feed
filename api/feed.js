import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://shopee.ph/api/v4/search/search_items?by=pop&limit=10&match_id=11035647&newest=0&order=desc&page_type=search"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Shopee feed" });
  }
}
