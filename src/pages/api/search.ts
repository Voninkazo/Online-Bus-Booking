import type { APIRoute } from "astro";
import { MongoClient } from "mongodb";
const MONGO_URI = import.meta.env.MONGO_URI;
const client = new MongoClient(MONGO_URI);

export const POST: APIRoute = async ({ request }) => {

    const data = await request.formData();
    const busDepartureLocation = data.get("departureLocation");
    const destination = data.get("destination");
    const departureDate = data.get("departureDate") as any;
    const convertedDate = new Date(departureDate)

    if (!busDepartureLocation || !destination || !departureDate) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    try {
        await client.connect();
        const db = client.db();
        const collection = db.collection('buses');
        const buses = await collection.find({ busDepartureLocation, destination, departureDate: convertedDate }).toArray();

        return new Response(
            JSON.stringify({
                buses,
                uri:"/home"
            }),
            { headers: { 'Content-Type': 'application/json' } },
        );

    } catch (error) {
        console.error("DB failed:", error);
        return new Response(
            JSON.stringify({ message: 'Failed to fetch buses' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    } finally {
        await client.close();
    }
};