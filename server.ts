// Oak is a middleware framework for Deno's http server
import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const port = Deno.env.get("PORT") || 5000;

const app = new Application();

app.use(router.routes());
// Allow methods -- can be restricted
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port: +port });
