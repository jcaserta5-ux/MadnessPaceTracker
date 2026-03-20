export async function onRequest(context) {
  const url = context.request.url;
  const target = new URL(url).searchParams.get("url");

  if (!target) {
    return new Response("Missing ?url=", { status: 400 });
  }

  try {
    const upstream = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0 NCAA Proxy",
      }
    });

    const body = await upstream.arrayBuffer();

    return new Response(body, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("Content-Type") || "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store"
      }
    });
  } catch (err) {
    return new Response("Proxy error: " + err.message, { status: 500 });
  }
}
