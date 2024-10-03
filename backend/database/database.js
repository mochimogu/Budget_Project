const pool = require('pg').Pool;

require('dotenv').config();

const database = new pool({
    connectionString : `${process.env.DATABASE_URL}`,
    ssl : {
        rejectUnauthorized : false
    }
})

async function createTable() {

    try {
        const client = await database.connect();

        const query = "";
        const value = [];

        await client.query();

        await client.release();


    } catch (error) {
        console.log(error);
        return 1;
    }



}

