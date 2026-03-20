export async function onRequest(context) {
  const url = context.request.url;
  const target = new URL(url).searchParams.get("url");

  if (!target) {
    return new Response("Missing ?url=", { status: 400 });
  }

  // Forward headers ESPN requires
  const headers = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json, text/plain, */*",
    "Referer": "https://www.espn.com/",
    "Origin": "https://www.espn.com"
  };

  const upstream = await fetch(target, { headers });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": upstream.headers.get("Content-Type") || "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
