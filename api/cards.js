import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const r = await fetch("https://shopee-api-public.vercel.app/random");
    const data = await r.json();

    res.setHeader("Content-Type", "text/html");

    let html = `
    <style>
      .grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(180px,1fr)); gap:15px; }
      .card { border:1px solid #eee; border-radius:10px; padding:10px; text-align:center; }
      .card img { width:150px; border-radius:10px; }
      .card .title { font-size:14px; margin:8px 0; height:40px; overflow:hidden; }
      .card .price { font-size:16px; font-weight:bold; color:#e67e22; }
      .card a { display:block;margin-top:10px;padding:8px;background:#ff5722;color:#fff;border-radius:6px;text-decoration:none; }
    </style>
    <div class="grid">
    `;

    data.items.forEach(p => {
      html += `
      <div class="card">
          <img src="${p.image}">
          <div class="title">${p.name}</div>
          <div class="price">₱${p.price}</div>
          <a href="${p.url}" target="_blank">Buy on Shopee</a>
      </div>`;
    });

    html += "</div>";

    res.status(200).send(html);

  } catch (err) {
    res.status(500).send("Error loading cards feed");
  }
}
