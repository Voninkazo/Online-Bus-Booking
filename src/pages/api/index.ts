import type { APIRoute } from "astro";
import { MongoClient } from "mongodb";
const MONGO_URI = import.meta.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

export const GET: APIRoute = async () => {
    try {
        await client.connect();
        const db = client.db();
        const collection = db.collection('buses');
        const buses = await collection.find({}).toArray();
        return new Response(
            JSON.stringify(buses ),
            { headers: { 'Content-Type': 'application/json' } }
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