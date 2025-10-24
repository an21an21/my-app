export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;
  if (!name && !email && !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  return Response.json(
    { success: true, data: { name, email, message } },
    { status: 200 }
  );
}
