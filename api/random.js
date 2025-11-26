import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const r = await fetch("https://shopee-api-public.vercel.app/random");
    const data = await r.json();

    res.setHeader("Content-Type", "text/html");

    let html = "<h2>Random Shopee Products</h2>";
    data.items.forEach(p => {
        html += `
        <div style="border:1px solid #ddd;padding:10px;margin:10px;">
            <img src="${p.image}" width="150">
            <div>${p.name}</div>
            <div>₱${p.price}</div>
            <a href="${p.url}" target="_blank">View on Shopee</a>
        </div>`;
    });

    res.status(200).send(html);

  } catch (err) {
    res.status(500).send("Error loading random feed");
  }
}
