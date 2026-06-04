export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '*';

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Max-Age': '86400'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    if (request.method !== 'GET') {
      return new Response(JSON.stringify({ error: 'method not allowed' }), { status: 405, headers });
    }

    const isHit = url.pathname === '/hit';

    const raw = await env.COUNTER.get('visits');
    let count = parseInt(raw) || 0;

    if (isHit) {
      count += 1;
      await env.COUNTER.put('visits', count.toString());
    }

    return new Response(JSON.stringify({ value: count }), { headers });
  }
};
