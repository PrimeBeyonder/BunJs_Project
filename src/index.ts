import Elysia  from "elysia";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
const app = new Elysia();

app.get("/", () => "Hello World!");
app.listen(8000, ()=> {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
});
