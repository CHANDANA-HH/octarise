import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const client = await clientPromise;
    const db = client.db("octarise"); // your DB name
    const collection = db.collection("contact_us");

    await collection.insertOne({
      name,
      email: email || null,
      phone,
      message,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
