const { MongoClient } = require('mongodb');

// Ganti dengan string koneksi Anda
const uri = "mongodb+srv://atha:pass123@cluster0.vfjao.mongodb.net/myDatabase?retryWrites=true&w=majority";

async function connectToDatabase() {
    const client = new MongoClient(uri);

    try {
        // Menghubungkan ke database
        await client.connect();
        console.log("Connected to the database!");

        // Mengakses database
        const database = client.db("myDatabase"); // Ganti dengan nama database Anda
        const collection = database.collection("yourCollection"); // Ganti dengan nama koleksi Anda

        // Lakukan operasi database di sini
        const documents = await collection.find({}).toArray();
        console.log(documents);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    } finally {
        // Menutup koneksi
        await client.close();
    }
}

connectToDatabase();
