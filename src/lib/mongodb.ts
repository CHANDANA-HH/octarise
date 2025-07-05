import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const options = {};

let client;
let clientPromise: Promise<MongoClient>;
console.log("Connecting to:", process.env.MONGODB_URI);


if (!process.env.MONGODB_URI) {
  console.warn("⚠️ No MONGODB_URI environment variable set.");
}

if (process.env.NODE_ENV === "development") {
  // In dev, use a global var to preserve connection across reloads
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In prod, just create once
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
