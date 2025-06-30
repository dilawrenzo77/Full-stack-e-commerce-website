import { Pool } from "pg";


export async function GET() {
    const pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "veldt",
        password:"Subm@rine77",
        port: 5432,
      });


      try {
        const client = await pool.connect();
        const data = await client.query("SELECT * FROM products");
        client.release();
        return Response.json(data.rows);
        }catch(err){
        console.log(err, "something went wrong");
        }
};