const { MongoClient } = require('mongodb');
const songs = require('./songs.js');
const artists = require('./artists.js');
const popularSongs = require('./popularSongs.js');

async function mongodb() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('spotify');

        await database.collection('Songs').insertMany(songs);
        await database.collection('Artists').insertMany(artists);
        await database.collection("PopularSongs").insertMany(popularSongs);

        console.log("Data berhasil dimasukkan ke dalam database.");
    } catch (error) {
        console.error("Gagal mengisi database:", error);
    } finally {
        await client.close();
    }
}

mongodb();