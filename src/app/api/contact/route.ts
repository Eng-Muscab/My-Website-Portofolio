type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.subject || !body.message) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    return Response.json({
      success: true,
      message: "Mock contact endpoint received the message."
    });
  } catch {
    return Response.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }
}
