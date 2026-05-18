export async function GET() {
  return new Response(JSON.stringify({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
